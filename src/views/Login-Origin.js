
import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/Login.estilo'
import  botao from '../estilo/botao.style'
import Cor from '../estilo/cor'
import { BotaoFacebook, BotaoGoogle, BotaoPrimario} from '../componente/botao'
import Icon from 'react-native-vector-icons/Feather';

import auth from '@react-native-firebase/auth';


export default function Login({navigation}) {

  const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [initializing, setInitializing] = useState(true)

    function Render(){

    if(!auth().currentUser){
      return(
        <>
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




        <TouchableOpacity
          onPress={() => Entrar()}
          style={botao.botaoLogin}

          
        >
          <Text style={{color: '#000'}}>login</Text>

        </TouchableOpacity>


        <TouchableOpacity style={Estilo.botaoFacebook}>
        <Icon  name="facebook" style={Estilo.txtBotao} resizeMode="contain"/>
        <Text style={[Estilo.txtBotao]}>ENTRAR COM FACEBOOK</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={Estilo.botaoGoogle}>
        <Icon  name="user-plus" style={[Estilo.txtBotao]} resizeMode="contain"/>

        <Text style={[Estilo.txtBotao]}>ENTRAR COM GOOGLE</Text>
      </TouchableOpacity>




        </>
      )
    }else{
      return(
        <TouchableOpacity
        style={botao.botaoLogin}
       
          onPress={() => Sair()}
        >
          <Text style={{color: '#000'}}>Sair</Text>

        </TouchableOpacity>
      )
    }
  }



  function Entrar(){
    auth().signInWithEmailAndPassword(email, senha)
    .then(() => {
      Alert.alert('Login' , 'Usuário está logado');
    })
    .catch(error => {

        if (error.code === 'auth/invalid-email') {
        Alert.alert('Erro', 'email inválido');
      }
       else if(error.code === 'auth/account-exists-with-different-credential')  {
       Alert.alert('Erro', 'Erro de login ou senha')
       }

       else{
         Alert.alert('Erro', 'Erro de login ou senha')
       }

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
    .then(() => {
      Alert.alert('Logout', 'Usuário deslogado')
    })
  }


  return (

    
    

    <KeyboardAvoidingView style={Estilo.container}>
      <StatusBar
            backgroundColor={Cor.topo}
            
        />

        

        
        



      {Render()}
        

               
    </KeyboardAvoidingView>

  );
}



