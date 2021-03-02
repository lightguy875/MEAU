
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import cor from '../estilo/cor'

import Login from '../views/Login'
import CadastroPessoal from '../views/CadastroPessoal'
import Cadastroanimal from '../views/Cadastroanimal'

import Principal from '../views/Principal'



import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../views/TelaInicial';

const Stack = createStackNavigator();

export default function Pilha() {
  return (
    <Stack.Navigator  initialRouteName="Principal">
      <Stack.Screen name="Login" options={{
        title: 'Tela Login',
        headerStyle: {
          backgroundColor: cor.fundoNavLogin,
          height: 56,
        }
        }} component={Login}/>

        <Stack.Screen name="CadastroPessoal" component={CadastroPessoal}/>

        <Stack.Screen name="TelaInicial" component={TelaInicial}/>

        <Stack.Screen name="Principal" component={Principal} options={{
          headerShown: false,
        }}/>

      <Stack.Screen name="Cadastroanimal" component={Cadastroanimal}/>



     </Stack.Navigator>
  );
}