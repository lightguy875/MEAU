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


export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('ERRO')
    

    const validacao = yup.object().shape({
      nome: yup.string().required('O nome é obrigatório'),
      senha: yup.string().min(6, 'Senha muito curta. Min: 6').required("A senha é obrigatória")
    })

    const { control, handleSubmit, errors } = useForm({
      resolver: yupResolver(validacao)
    });
    const onSubmit = data => alert(data.nome + ' ' + data.senha)


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
            placeholder="Nome de usuário"
            value={value}
            
          />
        )}
        name="nome"
       
        defaultValue=""
        
      />
      {errors.nome && alert(errors.nome.message)}


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

      {errors.senha && alert(errors.senha.message)}  

      <TouchableOpacity style={Estilo.botaoLogin} 
        onPress={(handleSubmit(onSubmit))}
      >
        <Text style={[Estilo.txtBotao, {color: 'black'}]}>LOGIN</Text>
    </TouchableOpacity>
        
    </KeyboardAvoidingView>

  );
}



