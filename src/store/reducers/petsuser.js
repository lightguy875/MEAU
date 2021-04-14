import { PET_CADASTRO, PET_DELETE, PET_UPDATE } from '../actions/actionTypes'

const initialState = {
    pets: null,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case PET_CADASTRO:
            return {
                ...state,
                pets: state.pets.concat({
                    ...action.payload
                })
            }
        case PET_UPDATE:
            return {
                ...state,
                pets: state.pets.map(pet => {
                    if (pet.id === action.payload.id) {
                        pet = action.payload
                    }
                    return pet
                })
            }
        case PET_DELETE:
            return {
                ...state,
                pets: pets.map(pet => {
                    if (pet.id === action.payload.id) {
                        pets.splice(pets.indexOf(pet), 1)
                    }
                    return pet
                })
            }
        default:
            return state
    }
}
export default reducer