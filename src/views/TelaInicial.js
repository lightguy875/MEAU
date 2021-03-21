import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { Assets } from '@react-navigation/stack';
import React, { useEffect, useState, } from 'react';
import {View, Text, StyleSheet, Touchable, TouchableHighlight, Image, TextInput, Alert, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
//import MeuButton from '../components/MeuButton';
//import styles from '../components/estilo';
//import {COLORS} from '../assets/colors';
import cor from '../estilo/cor';
import app  from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
//import Home from './Home';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import estilo from '../estilo/estilo';
import  botao from '../estilo/botao.style'

//const SignIn = (props) => {
    const SignIn = ({navigation}) => {
    //console.log(auth);
    //console.log('teste email');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    //console.log(AsyncStorage);
    
    //const [text, onChangeText] = React.useState('');
    //const [number, onChangeNumber] = React.useState(null);
   function entrarLogin () {
       if(email !== '' && senha !== '' ) {
        console.log('teste entrarLogin');
        //console.log(email);
        //console.log(senha);
        //alert("logar");
        //console.log(auth);
    auth()
    .signInWithEmailAndPassword(email, senha)
    .then(()=>{
      console.log('logou');
      navigation.navigate('Principal'); 
            //getUser();
        //setEmail('');
        //setSenha('');

    })
    .catch((e) => {
        console.log('SignIn: erro ao entrar no firebase' + e);
        switch (e.code) {
            case 'auth/invalid-email':
                Alert.alert('E-mail inválido');
                //alert('email ou senha inválidos');
                //setEmail('');
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
    } else {
        Alert.alert('Erro: por favor digite E-mail e senha.')
    };    
   };
    const recuperarSenha = () => {
        //alert('abrir modal recuperar Senha.');
        navigation.navigate('ForgotPassword');
    };

    const storeUserCache = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('user', jsonValue)

          navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}],
            }),
        );

        
        } catch (e) {
          // saving error
        }
      }


    const getUser = () => {
      console.log(email);
      console.log(senha);
        firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get()
        .then((doc) => {
            if (doc.exists) {
                //console.log("Document data:", doc.data());
                storeUserCache(doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("O documento não existe na base de dados!");
            }
        }).catch((error) => {
            console.log("SignIn. Get User, error getting document:", error);
        });

    };
    const entrar = () => {
        alert('logar no sistema');
        console.log('Email= ${email} Senha={senha}');
    };
    const cadastrar = () => {
        //alert('Vai para a tela signup');
        navigation.navigate('SignUp');
        //navigation.dispatch(
        //    CommonActions.reset({
        //    index: 0,
         //   routes: [{name: 'SignUp'}],
        //}),
        //);
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
                <TouchableOpacity style={botao.botaoLogin} onPress={() => {entrarLogin()}}>
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
                    <Text style={styles.textCadastrar} >Cadastre-se.</Text>
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
});
//
/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {BotaoPrimario, BotaoImagem, BotaoFacebook, BotaoGoogle} from '../componente/botao'
import Estilo from '../estilo/estilo'

const largura = Dimensions.get("screen").width;
const TelaInicial: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>

              <Text style={styles.sectionDescription}>
                Conheça os <Text style={styles.highlight}>animais</Text> que precisam de ajuda!
              </Text>
              <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Cães e gatos</Text>
              <Text style={styles.sectionDescription}>
                Que necessitam de carinho e um lar.
              </Text>
            </View>
                                                   
            </View>          
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Você pode:</Text>







              <BotaoPrimario name='ADOTAR'/>
              <Text style={styles.sectionTitle}>Ou</Text>
              

              <BotaoPrimario name='CADASTRAR'/>
              <Text style={styles.sectionTitle}>Para adoção.</Text>

              <Image 
                source={require('.././img/3gatos.jpeg')}
                style={styles.imagemBasica}
              />

              <Image 
                source={require('.././img/3caes.jpeg')}
                style={styles.imagemBasica}
              />
              
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
    imagemBasica: {
        width:largura,
        height:largura,
        marginTop: 8,
  },
    botao:{
      width: 300,
      height: 42,
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default TelaInicial;
*/