import {INTERESSADOS_DELETE,INTERESSADOS_GET,INTERESSADOS_UPDATE} from './actionTypes'

export const interessados_get = interessados => {
    return {
        type: INTERESSADOS_GET,
        payload: interessados
    }
}

export const interessados_update = interessados => {
    return {
        type: INTERESSADOS_UPDATE,
        payload: interessados
    }
}

export const interessados_delete = interessados => {
    return {
        type: INTERESSADOS_DELETE,
        payload: interessados
    }
}