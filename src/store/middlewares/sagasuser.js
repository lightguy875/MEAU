import { put, takeLatest, call, all } from 'redux-saga/effects'
import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_CADASTRO, USER_LOAD_DATA} from '../actions/actionTypes'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { Alert } from 'react-native'
import {
    user_login_success,
    user_login_failure,
    user_logout_success,
    user_logout_failure,
    user_load_data_sucess,
    user_load_data_failure,
}
    from '../actions/user'


function* sagasuser() {
    return yield all([
        takeLatest(USER_LOGGED_IN, loginuser),
        takeLatest(USER_LOGGED_OUT, logoutuser),
        takeLatest(USER_CADASTRO, cadastrouser),
        takeLatest(USER_LOAD_DATA, loaddatauser)
    ])

}

function* loginuser(action) {

    try {
        auth().signInWithEmailAndPassword(action.payload.email, action.payload.senha)
        Alert.alert('Login', 'Login realizado com sucesso')
        yield put(user_login_success())

    } catch (error) {
        var menssagem = '';
        switch (error.code) {
            case 'auth/invalid-email':
                menssagem = 'E-mail inválido';
                break;

            case 'auth/user-not-found':
                menssagem = 'Usuário não cadastrado';
                break;

            case 'auth/wrong-password':
                menssagem = 'Senha incorreta';

            default:
                menssagem = 'Tente novamente';
                break;
        }

        Alert.alert('Error', mensagem);
        yield put(user_login_failure())
    }
}

function* logoutuser() {
    try {
        auth().signOut()
        Alert.alert('Logout', 'Usuário Deslogado')
        yield put(user_logout_success())
    } catch (error) {
        Alert.alert('Error', error.message)
        yield put(user_logout_failure())
    }
}

function* loaddatauser(action) {

     try {

        let user = yield call(action =>
            firestore().collection('Users')
            .doc(action.payload.id)
            .get()
            , action
        );


        yield put(user_load_data_sucess(user.data()))
    } catch (error) {
        Alert.alert('Error',`Não foi possível carregar os dados do usuário ${error}`)
        yield put(user_load_data_failure())
 }

}

function* cadastrouser(action) {

    let newuser = action.user

    const login = yield auth().createUserWithEmailAndPassword(action.user.email, action.user.password)

    yield storage().ref(newuser.imagem).put(action.user.imagem)
    yield storage().ref(newuser.imagem).getDownloadURL().then(url => {
        newuser.imagemurl = url;
    })

    yield firestore().collection('Users').doc(login.user.uid).set({
        name: newuser.nome_completo,
        idade: newuser.idade,
        email: newuser.email,
        Estado: newuser.estado_moradia,
        cidade: newuser.cidade,
        endereço: newuser.endereco,
        telefone: newuser.telefone,
        imagem: newuser.image,
        imagemurl: newuser.imagemurl,
        nome_de_usuario: newuser.nome_de_usuario,
    })
}

export default sagasuser
