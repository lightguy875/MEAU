import { put, takeLatest, call, all } from 'redux-saga/effects'
import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_CADASTRO, USER_LOAD_DATA } from '../actions/actionTypes'
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
    user_cadastro_success,
    user_cadastro_failure,
}
    from '../actions/user'
import { object } from 'yup/lib/locale'


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
        yield auth().signInWithEmailAndPassword(action.payload.email, action.payload.senha)
        Alert.alert('Login', 'Login realizado com sucesso')
        action.payload.reset()
        action.payload.navigation.navigate('Todos os Pets')
        yield put(user_login_success())
        

    } catch (error) {
        var mensagem = '';
        switch (error.code) {
            case 'auth/invalid-email':
                mensagem = 'E-mail inválido';
                break;

            case 'auth/user-not-found':
                mensagem = 'Usuário não cadastrado';
                break;

            case 'auth/wrong-password':
                mensagem = 'Senha incorreta';
                break;
            default:
                mensagem = 'Tente novamente';
                break;
        }

        Alert.alert('Erro', mensagem);
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
        // Alert.alert('Error', `Não foi possível carregar os dados do usuário ${error}`)
        yield put(user_load_data_failure())
    }

}

function* cadastrouser(action) {

    try {
        const {Estado, cidade, email, endereço, idade, imagem, imagemurl, name, nome_de_usuario, telefone} = action.payload.valor
        let newUser = {Estado,cidade,email,endereço,idade,imagem,imagemurl,name,nome_de_usuario,telefone}
        const ref = storage().ref(action.payload.valor.imagem)
        yield ref.putFile(action.payload.valor.imagem)
        yield ref.getDownloadURL().then((url) => {
            newUser.imagemurl = url
        })
        const login = yield auth().createUserWithEmailAndPassword(action.payload.valor.email,action.payload.valor.senha)

        yield firestore().collection('Users').doc(login.user.uid).set(newUser)


        yield put(user_cadastro_success(newUser))

        Alert.alert('Cadastro', 'Usuário Cadastrado com sucesso')
        
        action.payload.reset()
        action.payload.setImage('')


    } catch (error) {
        Alert.alert('Error', 'Usuário não cadastrado')
        yield put(user_cadastro_failure())
    }
}

export default sagasuser
