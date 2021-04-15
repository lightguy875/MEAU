// import sagasinteressados from './sagasinteressados'
// import sagaspet from './sagaspet'
import sagasuser from './sagasuser'
import { fork } from 'redux-saga/effects'



export default function* rootSaga() {

        // yield fork(sagasinteressados),
        // yield fork(sagaspet),
        yield fork(sagasuser)

}

