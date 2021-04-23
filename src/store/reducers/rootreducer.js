import interessados from './interessados'
import notificacoes from './notificacoes'
import petsuser from './petsuser'
import pettodos from './pettodos'
import chat from './chat'
import user from './user'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    user,
    pettodos,
    petsuser,
    interessados,
    notificacoes,
    chat,

});

export{reducer};



