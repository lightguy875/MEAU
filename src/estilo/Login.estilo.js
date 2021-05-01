
import {StyleSheet} from 'react-native'
import Cor from './cor'



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 120,
        

    },


    input: {
        borderBottomColor: 'black',
        width: 350,
        /*Adicionar width automatico na flex */
        borderBottomWidth: 1,
        padding: 8,
      
    },

    botaoLogin: {
        width: 232,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#88c9bf',
        marginBottom: 10,
        elevation: 5,

        marginTop: 100,
        marginBottom: 100,
        
    },

    botaoFacebook: {
        flexDirection: 'row',

        width: 232,
        height: 40,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Cor.fundoFacebook,
        marginBottom: 25,
        
    },

    botaoGoogle: {
        flexDirection: 'row',
        width: 232,
        height: 40,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Cor.fundoGoogle,
    },

    txtBotao:{
        fontSize: 12,
        color: '#fff',
        marginLeft: 10,

    },

    imageIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        margin: 5,
    },
    
})