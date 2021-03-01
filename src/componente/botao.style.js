import {StyleSheet} from 'react-native'
import cor from '../estilo/cor'



export default StyleSheet.create({
    botaoPrimario: {
        width: 232,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor.fundoPadrao,
        elevation: 5,
    },

    botaoImagem: {
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 120,
        backgroundColor: cor.fundoCinza,
    },

    botaoFacebook: {
        width: 232,
        height: 40,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor.fundoFacebook,
    },

    botaoGoogle: {
        width: 232,
        height: 40,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor.fundoGoogle,
    },


});
