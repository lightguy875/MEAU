import sagasinteressados from './sagasinteressados'
import sagaspet from './sagaspet'
import sagasuser from './sagasuser'
import {fork } from 'redux-saga/effects'



function* rootSaga() {
    yield [
        //fork(sagasinteressados),
        //fork(sagaspet),
        fork(sagasuser)
    ];

}

export default rootSaga