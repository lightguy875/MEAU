import {useForm, Controller} from 'react-hook-form'
import React, {useState, useEffect, Component} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/Login.estilo'
import  botao from '../estilo/botao.style'
import Cor from '../estilo/cor'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {user_login, user_logout } from '../store/actions/user'
import {useDispatch , useStore} from 'react-redux'


import auth from '@react-native-firebase/auth';
import { min } from 'react-native-reanimated';

export default function Login({navigation, route , props}) {

  const user_dados = useStore().getState().user

  const [user , setUser] = useState(false)

  const [ erro , setErro ] = useState ({
    
    senha1: '-'
   
  });    

  const dispatch = useDispatch()
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
    // const onSubmit = data => alert(data.email + ' ' + data.senha)


     const Entrar = ({email, senha}) => {
      dispatch(user_login({email, senha}))
     }


    function Render(){

      if(!user_dados.loaded){
        return(
          <>



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
  
   const Sair = () => {
      dispatch(user_logout())
      reset()
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

