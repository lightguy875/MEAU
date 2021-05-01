import {StyleSheet} from 'react-native'
import cor from './cor'



export default StyleSheet.create({
    botaoPrimario: {
        width: 232,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#88c9bf',
        marginBottom: 10,
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

    botaoLogin: {
        width: 232,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#88c9bf',
        marginBottom: 60,
        elevation: 5,
        marginTop: 50,
    },
})
