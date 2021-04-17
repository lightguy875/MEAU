import { Alert } from 'react-native'
import { put, takeLatest, call, all } from 'redux-saga/effects'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import {
    PET_CADASTRO,
    PET_UPDATE,
    PET_DELETE,
    PET_LOAD_TODOS,
    PET_LOAD
} from '../actions/actionTypes'
import {
    pet_load_success,
    pet_load_failure,
    pet_load_todos_success,
    pet_load_todos_failure
} from '../actions/pet'
import { useDispatch } from 'react-redux'

function* sagaspet() {
    return yield all([
        // takeLatest(PET_UPDATE, petupdate),
        // takeLatest(PET_DELETE, petdelete),
        // takeLatest(PET_CADASTRO, petcadastro),
        takeLatest(PET_LOAD, loadpet),
        takeLatest(PET_LOAD_TODOS, loadpettodos),
    ])


}

function* loadpet(action) {

    try {
        let pets = [];

        yield firestore().collection('Animais').where('dono', '==', action.payload.id).get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                pets.push(Object.assign(doc.data(), { id: doc.id }))
            })
        })

        yield put(pet_load_success(pets))



        Alert.alert('Sucesso', 'Pets carregados com sucesso')

    } catch (error) {
        yield put(pet_load_failure())
        Alert.alert('Error', 'Não foi possível carregar meus Pets')

    }

}

function* loadpettodos(action) {
    try {
        let pettodos = [];
        yield firestore().collection('Animais').where('dono', '!=', action.payload.id).onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                pettodos.push(Object.assign(doc.data, { id: doc.id }))
            })
        })

        yield put(pet_load_todos_success(pettodos))

    } catch (error) {
        yield put(pet_load_todos_failure())

    }
}


export default sagaspet



