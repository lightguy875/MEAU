import {StyleSheet} from 'react-native'
import cor from './cor'
import fonte from './fonte.js'



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    status: {
        
        backgroundColor: 'black',
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
