import { PET_CADASTRO, PET_DELETE, PET_LOAD_TODOS_FAILURE, PET_LOAD_TODOS_SUCCESS, PET_UPDATE , PET_LOAD_TODOS, USER_LOGGED_OUT_SUCCESS} from '../actions/actionTypes'

const initialState = {
    pets: null,
}

function reducer (state = initialState, action) {
    switch (action.type) {

        case PET_LOAD_TODOS:
            return {
                ...state
            }
        case PET_LOAD_TODOS_SUCCESS:
            return {
                ...state,
                pets: action.payload
            }
        case PET_LOAD_TODOS_FAILURE:
            return {
                ...state,
            }
        case USER_LOGGED_OUT_SUCCESS:
            return {
                ...state,
                pets: null,
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