import { USER_LOGGED_IN,
     USER_LOGGED_OUT,
      USER_CADASTRO, 
      USER_LOAD_DATA, 
      USER_LOGGED_IN_SUCCESS,
       USER_LOGGED_IN_FAILURE, 
       USER_LOGGED_OUT_FAILURE, 
       USER_LOGGED_OUT_SUCCESS,
        USER_LOAD_DATA_SUCCESS,
        USER_LOAD_DATA_FAILURE,
        USER_CADASTRO_SUCCESS,
        USER_CADASTRO_FAILURE
    } from '../actions/actionTypes'
    import auth from '@react-native-firebase/auth'

const initialState = {
    user: null,
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
                user: null,
            }

        case USER_CADASTRO:
            return {
                ...state,
            }
        case USER_CADASTRO_FAILURE:
            return {
                ...state,
            }
        case USER_CADASTRO_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                user: action.payload,
                loaded: true
            }
        case USER_LOAD_DATA:
            return {
                ...state,
            }
        case USER_LOAD_DATA_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loaded: true,
            }
        case USER_LOAD_DATA_FAILURE:
            return {
                ...state,
            }
        default:
            return {
                ...state,
                loaded: auth().currentUser ? true : false
            }
    }
}

export default reducer