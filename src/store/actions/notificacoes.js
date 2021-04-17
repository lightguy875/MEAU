import {NOTFICIATIONS_LOAD_RESPOSTAS_SUCCESS, NOTIFICATIONS_LOAD_INTERESSES_SUCCESS} from './actionTypes'


export const notifications_load_interesses_success = payload => ({
    type: NOTIFICATIONS_LOAD_INTERESSES_SUCCESS,
    payload: payload,
})

export const notifications_load_respostas_success = payload => ({
    type: NOTFICIATIONS_LOAD_RESPOSTAS_SUCCESS,
    payload: payload,
})