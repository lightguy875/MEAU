
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import cor from '../estilo/cor'

import Login from '../views/Login'
import CadastroPessoal from '../views/CadastroPessoal'
import Cadastroanimal from '../views/Cadastroanimal'
 import Camera from '../componente/camera'

import Principal from '../views/Principal'



import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../views/TelaInicial';

const Stack = createStackNavigator();

export default function Pilha() {
  return (
    <Stack.Navigator  initialRouteName="Principal">
      <Stack.Screen name="Login" options={{
        title: 'Login',
        headerStyle: {
          backgroundColor: cor.fundoNavLogin,
          height: 56,
        }
        }} component={Login}/>

        <Stack.Screen options={{title: "Cadastro de Conta"}} name="CadastroPessoal" component={CadastroPessoal}/>

        <Stack.Screen options={{title: "Tela Inicial"}} name="Tela Inicial" component={TelaInicial}/>

        <Stack.Screen name="Principal" component={Principal} options={{
          headerShown: false,
        }}/>

      <Stack.Screen options={{title: "Cadastro de Animal"}}name="Cadastroanimal" component={Cadastroanimal}/>

       <Stack.Screen options={{title: "Escolha uma imagem"}} name="Camera" component={Camera}/> 

     </Stack.Navigator>
  );
}