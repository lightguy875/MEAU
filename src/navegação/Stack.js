
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import cor from '../estilo/cor'

import Login from '../views/Login'
import ErroLogin from '../views/ErroLogin'

import CadastroPessoal from '../views/CadastroPessoal'
import Cadastroanimal from '../views/Cadastroanimal'

import Principal from '../views/Principal'



import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../views/TelaInicial';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator(); // Criar uma constante para cada Stack

function AbrirMenu({navigation}){ // Implementar essa funcao para economizar linhas de codigo em headerLeft
  return(
    <TouchableOpacity 
    style={{marginLeft:10}} 
    onPress={ () => navigation.openDrawer()}

    >
    <Image source={require('../img/botoes/menu2.png')} style={{width: 20, height: 20, }} resizeMode="contain"/>
  </TouchableOpacity>
  );
  
}

export function LoginStack({navigation}) {
  return ( 
    <Stack.Navigator  initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{
            headerStyle: {
              backgroundColor: '#cfe9e5'
            },
            headerLeft: () => (
              <TouchableOpacity 
    style={{marginLeft:10}} 
    onPress={ () => navigation.openDrawer()}

    >
    <Image source={require('../img/botoes/menu2.png')} style={{width: 20, height: 20, }} resizeMode="contain"/>
  </TouchableOpacity>
            ),
      }}/>

      <Stack.Screen name="ErroLogin" component={ErroLogin} options={{
        headerStyle: {
          backgroundColor: '#cfe9e5'
        },
      }}/>
     </Stack.Navigator>
  );
}



export function CadastroPessoalStack({navigation}) {
  return ( 
    <Stack.Navigator  initialRouteName="CadastroPessoal">
      <Stack.Screen name="Cadastro Pessoal" component={CadastroPessoal} options={{
            headerStyle: {
              backgroundColor: '#cfe9e5'
            },
            headerLeft: () => (
              <TouchableOpacity 
    style={{marginLeft:10}} 
    onPress={ () => navigation.openDrawer()}

    >
    <Image source={require('../img/botoes/menu2.png')} style={{width: 20, height: 20, }} resizeMode="contain"/>
  </TouchableOpacity>
            ),
      }}/>

     </Stack.Navigator>
  );
}


export function CadastroAnimalStack({navigation}) {
  return ( 
    <Stack.Navigator  initialRouteName="Cadastroanimal">
      <Stack.Screen name="Cadastro Animal" component={Cadastroanimal} options={{
            headerLeft: () => (
              <TouchableOpacity 
    style={{marginLeft:10}} 
    onPress={ () => navigation.openDrawer()}

    >
    <Image source={require('../img/botoes/menu2.png')} style={{width: 20, height: 20, }} resizeMode="contain"/>
  </TouchableOpacity>
            ),
      }}/>

     </Stack.Navigator>
  );
}
