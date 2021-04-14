import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_CADASTRO, USER_LOAD_DATA, USER_LOGGED_IN_SUCCESS, USER_LOGGED_IN_FAILURE, USER_LOGGED_OUT_FAILURE, USER_LOGGED_OUT_SUCCESS } from '../actions/actionTypes'

const initialState = {
    user: [],
    loaded: false,
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state
            }
        case USER_LOGGED_IN_SUCCESS:

            return {
                ...state,
                loaded: true
            }
        case USER_LOGGED_IN_FAILURE:
            return {
                ...state,
                loaded: false
            }
        case USER_LOGGED_OUT:
            return {
                ...state,
            }
        case USER_LOGGED_OUT_FAILURE:
            return {
                ...state,
            }
        case USER_LOGGED_OUT_SUCCESS:
            return {
                ...state,
                loaded: false,
            }

        case USER_CADASTRO:
            return {
                ...state,
                user: action.payload.user
            }
        case USER_LOAD_DATA:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state
    }
}

export default reducer