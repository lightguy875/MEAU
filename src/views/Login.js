import {useForm, Controller} from 'react-hook-form'
import React, {useState, useEffect, Component} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/Login.estilo'
import  botao from '../estilo/botao.style'
import Cor from '../estilo/cor'
import Icon from 'react-native-vector-icons/Feather';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';



import auth from '@react-native-firebase/auth';
import { min } from 'react-native-reanimated';


export default function Login({navigation}) {

  const [ erro , setErro ] = useState ({
    
    senha1: '-'
   
  });    

  function ver(){
    if (errors?.senha) {
      alert('Há erro')
    } else {
      alert('Não ha errro')


    }

    true ? true : false;
  }



    const validacao = yup.object().shape({
      email: yup.string().email().required('O e-mail é obrigatório'),
      senha: yup.string().min(6, "Senha curta demais").required()
    })

    const { control, handleSubmit, errors, reset} = useForm({
      resolver: yupResolver(validacao)
    });
    const onSubmit = data => alert(data.email + ' ' + data.senha)






    function Entrar({email,senha}){
      auth().signInWithEmailAndPassword(email, senha)
      .then(() => {
        Alert.alert('Login' , 'Usuário está logado');
        {reset}
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


    function Render(){

      if(!auth().currentUser){
        return(
          <>
            <TouchableOpacity style={Estilo.botaoLogin} 
            onPress={(handleSubmit(Entrar))}
            >
              <Text style={[Estilo.txtBotao, {color: 'black'}]}>LOGIN</Text>
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
       <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
          onBlur={onBlur}
            style={Estilo.input}
            onChangeText={value => onChange(value)}
            placeholder="E-mail de usuário"
            value={value}
            

            
            
          />
        )}
        name="email"
       
        defaultValue=""
        
      />

      {errors?.email && <Text>{errors?.email.message}</Text>}

      

      

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
          onBlur={onBlur}
            style={Estilo.input}
            onChangeText={value => onChange(value)}
            placeholder="Senha"
            value={value}
            secureTextEntry={true}
            


            
          />
        )}
        name="senha"
        
        defaultValue=""
        
      /> 
      
      {errors?.senha && <Text>{errors?.senha.message}</Text>}

      


      {Render()}
        
    </KeyboardAvoidingView>

  );
}



