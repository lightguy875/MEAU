import interessados from './interessados'
import petsuser from './petsuser'
import pettodos from './pettodos'
import user from './user'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    user,
    pettodos,
    petsuser,
    interessados
});

export{reducer};



