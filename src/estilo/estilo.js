import {StyleSheet} from 'react-native'
import cor from './cor'
import fonte from './fonte.js'



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },

    

    text_inf_cadastroPessoal: {
        textAlign: 'center',
        height: 80,
        padding: 5,
        textAlign: 'center',
        backgroundColor: cor.fundoPadrao,
        borderRadius: 4,
    },

    status: {
        
        backgroundColor: 'black',
    },

    titulo: {
        flex: 2,
        justifyContent: 'flex-end',
        
        marginTop: 28,
        color: cor.titulo,
    },

    input: {
        fontSize: fonte.input,
        borderBottomColor: 'black',
        width: 300,
        borderBottomWidth: 1,
        padding: 8,
      
    },
    

    botaoPadrao: {
        width: 232,
        height: 40,
        marginTop: 52,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor.fundoPadrao,
    },


    botaoFacebook: {
        width: 232,
        height: 40,
        marginTop: 52,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor.fundoFacebook,
    },

    botaoGoogle: {
        width: 232,
        height: 40,
        marginTop: 52,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor.fundoGoogle,
    },

    textoBranco: {
        color: cor.fundoBranco,
    }
});
