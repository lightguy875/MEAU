
import React, {useState, useEffect, Component} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/Login.estilo'
import Cor from '../estilo/cor'
import { BotaoFacebook, BotaoGoogle, BotaoPrimario} from '../componente/botao'
import Icon from 'react-native-vector-icons/Feather';

import auth from '@react-native-firebase/auth';


export default function Login({navigation}) {

  const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [initializing, setInitializing] = useState(true)

    function Render(){
    if(initializing) return null

    if(auth().currentUser){
      return(
        <TouchableOpacity
          onPress={() => Cadastrar().then(() => {
            Component.forceUpdate()


          })}
        >
          <Text>Cadrastrar</Text>

        </TouchableOpacity>
      )
    }else{
      return(
        <TouchableOpacity
          onPress={() => Sair().then(() => {
            Component.forceUpdate()

          })}
        >
          <Text>Sair</Text>

        </TouchableOpacity>
      )
    }
  }



  function Cadastrar(){
    auth().createUserWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }

  function onAuthStateChanged(email, senha) {
    setEmail(email)
    setSenha(senha)
    if (initializing) setInitializing(false);
  }

  useEffect(() => {

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  function Sair(){
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }

  function Entrar(){
    auth().signInWithEmailAndPassword('teste', 'teste')
  }


  return (

    
    

    <KeyboardAvoidingView style={Estilo.container}>
      <StatusBar
            backgroundColor={Cor.topo}
            
        />

        

        
        

      <TextInput 
        value={email}
        onChangeText={email => setEmail(email)}
        style={Estilo.input}
        placeholder="Nome de usuário"
      />

      <TextInput
        value={senha}
        onChangeText={senha => setSenha(senha)}
        style={Estilo.input}
        secureTextEntry={true}
        placeholder="Senha"
      />

      {Render()}

      {/*<TouchableOpacity style={Estilo.botaoLogin} 
        onPress={() => Cadastrar()}
      >
        <Text style={[Estilo.txtBotao, {color: 'black'}]}>LOGIN</Text>
  </TouchableOpacity>*/}
        
        
      <TouchableOpacity style={Estilo.botaoFacebook}>
        <Icon  name="facebook" style={Estilo.txtBotao} resizeMode="contain"/>
        <Text style={[Estilo.txtBotao]}>ENTRAR COM FACEBOOK</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={Estilo.botaoGoogle}>
        <Icon  name="user-plus" style={[Estilo.txtBotao]} resizeMode="contain"/>

        <Text style={[Estilo.txtBotao]}>ENTRAR COM GOOGLE</Text>
      </TouchableOpacity>



       
    </KeyboardAvoidingView>
  );
}



