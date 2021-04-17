import { PET_CADASTRO, PET_DELETE, PET_UPDATE , PET_LOAD, PET_LOAD_FAILURE, PET_LOAD_SUCCESS, USER_LOGGED_OUT_SUCCESS} from '../actions/actionTypes'

const initialState = {
    pets: null,
}

function reducer(state = initialState, action) {
    switch (action.type) {

        case PET_LOAD:
            return {
                ...state
            }

        case PET_LOAD_SUCCESS:
            return {
                ...state,
                pets: action.payload
            }
        case USER_LOGGED_OUT_SUCCESS:
            return {
                ...state,
                pets: null,
                }
        case PET_LOAD_FAILURE:
            return {
                ...state
            }
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