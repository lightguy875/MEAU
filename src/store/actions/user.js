import {USER_LOGGED_IN,  USER_LOGGED_OUT, USER_CADASTRO,USER_LOAD_DATA, USER_LOGGED_IN_SUCCESS, USER_LOGGED_IN_FAILURE, USER_LOGGED_OUT_SUCCESS} from './actionTypes'

export const user_login = payload => ({ 
    type: USER_LOGGED_IN,
    payload : payload,
    })

export const user_login_success = () => ({
    type: USER_LOGGED_IN_SUCCESS,
})
export const user_login_failure = () => ({
    type: USER_LOGGED_IN_FAILURE,
})

export const user_load = user => ({
        type: USER_LOAD_DATA,
        payload: user
})

export const user_logout = () => ({
        type: USER_LOGGED_OUT,

})

export const user_logout_failure = () => ({
    type: USER_LOGGED_OUT_FAILURE
})

export const user_logout_success = () => ({
    type: USER_LOGGED_OUT_SUCCESS
})


export const user_cadastro = user => ({
        type: USER_CADASTRO,
        payload: user,
})