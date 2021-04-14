import {PET_CADASTRO, PET_UPDATE, PET_DELETE} from './actionTypes'

export const pet_cadastro = pet => {
    return {
    type: PET_CADASTRO,
    payload: pet,
    }
}

export const pet_update = pet => {
    return {
    type: PET_UPDATE,
    payload: pet,
    }
}

export const pet_delete = pet => {
    return {
        type: PET_DELETE,
        payload: pet,
    }
}