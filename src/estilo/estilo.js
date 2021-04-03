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
    containeranimal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'baseline',
       justifyContent: 'center',
        padding: 16,
    },

    containerbotao: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        width:350,
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
        alignSelf: 'flex-start',
        marginTop: 28,
        color: cor.titulo,
    },

    input: {
        fontSize: fonte.input,
        borderBottomColor: 'black',
        width: 300,
        /*Adicionar width automatico na flex */
        alignSelf: 'flex-start',
        borderBottomWidth: 1,
        padding: 8,
      
    },
    

    botaoPadrao: {
        width: 232,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor.fundoPadrao,
        elevation: 5,
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

    botaoEnviarImagem: {
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 128,
        height: 120,
        backgroundColor: cor.fundoCinza,
    },

    textoBranco: {
        color: cor.fundoBranco,
    },

    caixaAnimal: {
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems:'center',
        width: 310,
        marginBottom: 3,
        flex:3
    },

     tituloAnimal: {
        flexDirection:'row',
        justifyContent:'center',
        fontFamily: 'Roboto Regular',
        fontSize: 16,
        color: '#000',
     },
     textoPerfil: {
        fontSize: 18,
        color: cor.accentSecundary,
        marginLeft: 1,
        marginTop: 10,
        width: '95%',
        height: 50,
        borderBottomColor: cor.grey,
        borderBottomWidth: 2,
        paddingLeft: 2,
        paddingBottom: 1,
    },
    textoPerfilUsuario: {
        fontSize: 24,
        justifyContent: 'center',
        alignContent: 'center',
        color: cor.primary,
        marginLeft: 1,
        marginTop: 10,
        width: '95%',
        height: 50,
        //borderBottomColor: cor.grey,
        borderBottomWidth: 2,
        paddingLeft: 2,
        paddingBottom: 1,
    },   
});
