import { NavigationContainer } from '@react-navigation/native';
import { Assets } from '@react-navigation/stack';
import React, { useEffect, useState, } from 'react';
import {View, Text, StyleSheet, Touchable, TouchableHighlight, Image, TextInput, Alert, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
//import MeuButton from '../components/MeuButton';
//import styles from '../components/estilo';
import cores from '../estilo/cor';
import app  from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

//const SignIn = (props) => {
    const SignIn = (props) => {
    //console.log(auth);
    //console.log('teste email');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    //const [text, onChangeText] = React.useState('');
    //const [number, onChangeNumber] = React.useState(null);
   function entrarLogin () {
        console.log('teste entrarLogin');
        //console.log(email);
        //console.log(senha);
        //alert("logar");
        //console.log(auth);
    auth()
    .signInWithEmailAndPassword(email, senha)
    .then(()=>{
        alert('logou');
        setEmail('');
        setSenha('');
    })
    .catch((e) => {
        console.log('SignIn: erro ao entrar no firebase' + e);
        alert('email ou senha inválidos');
        setEmail('');
        setSenha('');
    
    });
   };
    const recuperarSenha = () => {
        alert('abrir modal recuperar senha.');
    };
    const entrar = () => {
        alert('logar no sistema');
        console.log('Email= ${email} Senha={senha}');
    };
    const cadastrar = () => {
        alert('Vai para a tela signup');
    };

  
    return(
    <SafeAreaView>
    <ScrollView>    
        <View style={styles.container}>
            <View style={styles.divSuperior}>
                <Image
                    source={require('../img/Meau_Icone.png')}
                    style={styles.image}
                    accessibilityLabel='logo do app'
                /> 
                <TextInput
                style={styles.input}
                placeholder='Email'
                keyboardType='default'
                returnKeyType='next'
                onChangeText={email => setEmail(email)}
                value={email}
                />
                
                <TextInput
                
                style={styles.input}
                placeholder='Senha'
                secureTextEntry={true}
                keyboardType='default'
                returnKeyType='go' 
                onChangeText={senha => setSenha(senha)}
                value={senha}

                />
                
                <Text style={styles.textoEsqueceuSenha} onPress={recuperarSenha}>Esqueceu sua senha?</Text>
                <TouchableOpacity style={styles.button} onPress={() => {entrarLogin()}}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.divInferior}>
                <View style={styles.divOuHr}>
                    <View style={styles.divHr}></View>
                        <Text style={styles.textOu}>OU</Text>
                    <View style={styles.divHr}></View>
                </View>
                <View style={styles.divCadastrarSe}>
                    <Text style={styles.textNormal}>Ainda não tem uma conta?</Text>
                    <Text style={styles.textCadastrar} onPress={cadastrar}>Cadastre-se.</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>
    );
};

export default SignIn;

const styles = StyleSheet.create({
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
        borderBottomColor: cores.grey,
        borderBottomWidth: 2,
        fontSize: 16,
        paddingLeft: 2,
        paddingBottom: 1,
    },
    textoEsqueceuSenha: {
        fontSize: 16,
        color: cores.accent,
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
        borderBottomColor: cores.grey,
        borderBottomWidth: 2,
    },
    textOu: {
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,
        color: cores.grey,
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
        color: cores.accentSecundary,
        marginLeft: 5,
    },
    textoButton: {
        fontSize: 24,
        color: cores.primary,
      },
      button: {
        alignItems: 'center',
        backgroundColor: cores.accent,
        padding: 10,
        margin: 10,
        width: '95%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
      },
});

//<MeuButton texto='ENTRAR' onClick={entrar}/>
//<TouchableOpacity style={styles.button} onPress={() => alert('teste entrar') } >

/*
    switch (e.code) {
            case 'auth/wrong-password':
                Alert(e);
            case 'auth/invalid-email': 
                Alert(e);
            break; 
        };
        */