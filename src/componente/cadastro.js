import React, {useState, useEffect, Component} from 'react';
import { Button, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/Login.estilo'

import auth from '@react-native-firebase/auth'; 
 
 
export default function Cadastro(){

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
}