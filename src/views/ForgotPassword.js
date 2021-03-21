import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
//import {COLORS} from  '../screens/colors';
import cor from '../estilo/cor';
//import botao.primario from '../estilo/botao.style';
import  botao from '../estilo/botao.style'
//import { useState } from 'react/cjs/react.development';
//import MeuButton from '../components/MeuButton';
import auth from '@react-native-firebase/auth';

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState ('');
    const recover = () => {
        //alert (email);
        
        if (email !== ''){
            console.log(email);
            setEmail('');
            //setSenha('');

            auth()
            .sendPasswordResetEmail(email)
            .then((r) => {
                Alert.alert('Atenção, foi enviado um email para: ' + email);
                setEmail('');
                //setSenha('');
                
                })
            .catch((e) =>{
                console.log('ForgotPassword: erro ao entrar no firebase' + e);
        switch (e.code) {
            case 'auth/invalid-email':
                Alert.alert('E-mail inválido');
                //alert('email ou senha inválidos');
                setEmail('');
                //setSenha('');
                
                break;

                case 'auth/wrong-password':
                    Alert.alert('Senha inválida.');
                    //alert('email ou senha inválidos');
                //alert('email ou senha inválidos');
                //setEmail('');
                //setSenha('');
                
                break;

                case 'auth/user-not-found':
                    Alert.alert('Usuário não encontrado');
                //alert('email ou senha inválidos');
                    //alert('email ou senha inválidos');
                    //setEmail('');
                    //setSenha('');
                    
                    break;
        
            default:
                break;
        };
 


            });
    }else{
        Alert.alert('Erro: por favor digite E-mail cadastrado.');
    };
    navigation.navigate('Login');  
};

    return(
        <View style={styles.container}>

                <Image
                    source={require('../img/Meau_Icone.png')}
                    style={styles.image}
                    accessibilityLabel='logo do app'
                /> 


            <TextInput
            style={styles.input}
            placeholder = 'Email'
            keyboardType = 'email-address'
            returnKeyType = 'go'
            onChangeText={email => setEmail(email)}
            value={email}
            />
           
            <TouchableOpacity style={botao.botaoLogin}  onPress={() => {recover()}}>
                <Text>Recuperar senha.</Text>
            </TouchableOpacity>


        </View>
    )
};
export default ForgotPassword;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        width: '95%',
        height: 50,
        borderBottomColor: cor.grey,
        borderBottomWidth: 2,
        fontSize: 16,
        paddingLeft: 2,
        paddingBottom: 1,
        marginTop: 40,
    },
    button: {
        alignItems: 'center',
        backgroundColor: cor.accent,
        padding: 10,
        margin: 10,
        width: '95%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
      },
      image: {
        width: 150,
        height: 150,
        margin: 5,
    },
});

/*
    container:{
        flex: 1.,
        justifyContent: 'center',
        padding: 20,
    },
    divInferior: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        
   },
    divSuperior: {
        flex: 5,
        alignItems: 'center',
        
    },
    image: {
        width: 150,
        height: 150,
        margin: 5,
    },
    input: {
        width: '95%',
        height: 50,
        borderBottomColor: cor.grey,
        borderBottomWidth: 2,
        fontSize: 16,
        paddingLeft: 2,
        paddingBottom: 1,
    },
    textoEsqueceuSenha: {
        fontSize: 16,
        color: cor.accent,
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginTop: 10,  
    },
    divOuHr: {
        width:'100%',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divHr: {
        width:'30%',
        height: 1,
        borderBottomColor: cor.grey,
        borderBottomWidth: 2,
    },
    textOu: {
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,
        color: cor.grey,
    },
    divCadastrarSe: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textNormal: {
        fontSize: 18,
    },
    textCadastrar: {
        fontSize: 16,
        color: cor.accentSecundary,
        marginLeft: 5,
    },
    textoButton: {
        fontSize: 24,
        color: cor.primary,
      },
      button: {
        alignItems: 'center',
        backgroundColor: cor.accent,
        padding: 10,
        margin: 10,
        width: '95%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
      },
      */
