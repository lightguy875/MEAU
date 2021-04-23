import {CHAT_GET_SUCCESS, USER_LOGGED_OUT_SUCCESS} from '../actions/actionTypes'

const initialState = {
    chat: null
}

function reducer(state = initialState , action) {
    switch(action.type) {


        case CHAT_GET_SUCCESS:
            return {
                ...state,
                chat: action.payload
            }

        case USER_LOGGED_OUT_SUCCESS:
            return {
                ...state,
                chat: null,
                }

        default:
            return state;
    }



}

export default reducer