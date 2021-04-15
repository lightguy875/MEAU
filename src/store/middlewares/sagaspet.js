import { put, takeLatest, call, all } from 'redux-saga/effects'
import {PET_CADASTRO,PET_UPDATE,PET_DELETE} from '../actions/actionTypes'


export default function* sagasuser() {
    return yield all([
        takeLatest(USER_LOGGED_IN, loginuser),
        takeLatest(USER_LOGGED_OUT, logoutuser),
        takeLatest(USER_CADASTRO, cadastrouser),
        takeLatest(USER_LOAD_DATA, loaddatauser)
    ])

}


