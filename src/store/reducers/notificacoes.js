import {USER_LOGGED_OUT_SUCCESS, NOTFICIATIONS_LOAD_RESPOSTAS_SUCCESS, NOTIFICATIONS_LOAD_INTERESSES_SUCCESS } from '../actions/actionTypes'

const initialState = {
    interesse: null,
    resposta: null,
}


function reducer(state = initialState , action){
    switch(action.type){
        case NOTIFICATIONS_LOAD_INTERESSES_SUCCESS:
            return {
                ...state,
                interesse: action.payload,
            }

        case NOTFICIATIONS_LOAD_RESPOSTAS_SUCCESS:
            return {
                ...state,
                resposta: action.payload,
            }
        case USER_LOGGED_OUT_SUCCESS:
            return {
                ...initialState,
            }
        default:
            return state

    }
}
export default reducer