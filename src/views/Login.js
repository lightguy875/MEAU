import { useForm, Controller } from 'react-hook-form'
import React, { useState, useEffect, Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Estilo from '../estilo/Login.estilo'
import botao from '../estilo/botao.style'
import Cor from '../estilo/cor'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { user_login, user_logout } from '../store/actions/user'
import { useDispatch, useStore, useSelector } from 'react-redux'


import auth from '@react-native-firebase/auth';
import { min } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native';

export default function Login({ navigation, route, props }) {

  let user_dados = useSelector(state => state.user)
  let notifications = useSelector(state => state.notificacoes)

  const [user, setUser] = useState(false)

  const [erro, setErro] = useState({

    senha1: '-'

  });

  const dispatch = useDispatch()
  function ver() {
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

  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(validacao)
  });
  // const onSubmit = data => alert(data.email + ' ' + data.senha)


  const Entrar = ({ email, senha }) => {
    dispatch(user_login({ email, senha }))
    reset()
    navigation.navigate('Todos os Pets')
  }


  function Render() {

    if (!user_dados.loaded) {
      return (
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
            <Text style={[Estilo.txtBotao, { color: 'black' }]}>ENTRAR</Text>
          </TouchableOpacity>
        </>
      )
    } else {
      
      return (
        <View>
          {/* <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')}>
          <Image
              style={Estilo.imageIcon}
              source={require('../img/icon_notification1.png')}
              accessibilityLabel='Imagem para notificação.'
            />
            <Text style={{ alignSelf:'center'}}>{notifications.interesse ? notifications.resposta ?  notifications.resposta.length + notifications.interesse.length : notifications.interesse.length : '0'}</Text> 
            </TouchableOpacity>
            </View> */}

          {/*           
          <TouchableOpacity
          style={botao.botaoLogin}
         
            onPress={() => Sair()}
          >
            <Text style={{color: '#000'}}>Sair</Text>
  
          </TouchableOpacity> */}
        

        </View>
        
      )
      
    }
  }

  const Sair = () => {
    dispatch(user_logout())

  }





  return (
    <KeyboardAvoidingView style={Estilo.container}>
      {/* <StatusBar backgroundColor='#000' /> */}




      {Render()}

    </KeyboardAvoidingView>

  );

}

