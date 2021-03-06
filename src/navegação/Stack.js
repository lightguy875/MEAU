
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import cor from '../estilo/cor'

import Login from '../views/Login'
import ErroLogin from '../views/ErroLogin'

import CadastroPessoal from '../views/CadastroPessoal'
import Cadastroanimal from '../views/Cadastroanimal'

import Principal from '../views/Principal'



import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../views/TelaInicial';


const Stack = createStackNavigator();

export default function LoginStack(props) {
  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ErroLogin"component={ErroLogin}/>
     </Stack.Navigator>
    </NavigationContainer>

  );
}