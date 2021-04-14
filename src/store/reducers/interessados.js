import {INTERESSADOS_DELETE,INTERESSADOS_GET,INTERESSADOS_UPDATE} from '../actions/actionTypes'

const initialState = {
    interessados: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INTERESSADOS_GET: 
        return {
            ...state,
            pets: state.pets.concat({
                ...action.payload
            })
        }
        case INTERESSADOS_UPDATE:
            return {
                ...state,
                pets: state.pets.map(pet => {
                    if(pet.id === action.payload.id) {
                        pet = action.payload
                    }
                    return pet
                })
            }
        case INTERESSADOS_DELETE:
            return {
                ...state,
                pets: pets.map(pet => {
                    if(pet.id === action.payload.id) {
                         pets.splice(pets.indexOf(pet.id),1)
                    }
                    return pet
                })
            }
        default:
            return state
    }
}
export default reducer