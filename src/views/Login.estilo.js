
import {StyleSheet} from 'react-native'
import Cor from '../estilo/cor'



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
        backgroundColor: Cor.fundoPadrao,
        marginBottom: 10,
        elevation: 5,

        marginTop: 100,
        marginBottom: 100,
        
    }

})