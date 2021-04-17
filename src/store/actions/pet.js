import {PET_CADASTRO,PET_CADASTRO_FAILURE,PET_CADASTRO_SUCESS,PET_UPDATE_FAILURE, PET_UPDATE, PET_DELETE, PET_LOAD_SUCCESS, PET_LOAD_FAILURE, PET_LOAD_TODOS, PET_LOAD_TODOS_SUCCESS, PET_LOAD_TODOS_FAILURE, PET_LOAD} from './actionTypes'


export const pet_load = id => ({
    type: PET_LOAD,
    payload: id
})

export const pet_load_success = pet => ({
    type: PET_LOAD_SUCCESS,
    payload: pet
})

export const pet_load_failure = () => ({
    type: PET_LOAD_FAILURE,
})

export const pet_load_todos = id => ({
    type: PET_LOAD_TODOS,
    payload: id
})

export const pet_load_todos_success = pet => ({
    type: PET_LOAD_TODOS_SUCCESS,
    payload: pet
})

export const pet_load_todos_failure = () => ({
    type: PET_LOAD_TODOS_FAILURE,
})

export const pet_cadastro = pet => ({
    type: PET_CADASTRO,
    payload: pet,
})

export const pet_cadastro_success = pet => {
    
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