
import React from 'react';
import Login from '../views/Login'
import ErroLogin from '../views/ErroLogin'
import CadastroPessoal from '../views/CadastroPessoal'
import Cadastroanimal from '../views/Cadastroanimal'
<<<<<<< HEAD
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
=======
import Camera from '../componente/camera'
import Camerapessoa from '../componente/camerapessoa'

import Principal from '../views/Principal'
>>>>>>> 1193b6df619b488cd295aeb7645d1d2f97bdfae2


const Stack = createStackNavigator(); // Criar uma constante para cada Stack

function AbrirMenu({navigation}){ // Implementar essa funcao para economizar linhas de codigo em headerLeft
  return(
    <TouchableOpacity 
    style={{marginLeft:10}} 
    onPress={ () => navigation.openDrawer()}

    >
      <Icon name="menu" color="#000" style={{fontSize: 30}} resizeMode="contain"/>
  </TouchableOpacity>
  );
  
}

export function LoginStack({navigation}) {
  return ( 
    <Stack.Navigator  initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{
        title: 'Login',
        headerStyle: {
          backgroundColor: '#cfe9e5'
        },

        headerLeft: () => AbrirMenu({navigation}),
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
      <Stack.Screen name="CadastroPessoal" component={CadastroPessoal} options={{
        title: 'Cadastro Pessoal',
            headerStyle: {
              backgroundColor: '#cfe9e5'
            },
            headerLeft: () => AbrirMenu({navigation}),
      }}/>

     </Stack.Navigator>
  );
}


export function CadastroAnimalStack({navigation}) {
  return ( 
    <Stack.Navigator  initialRouteName="Cadastroanimal">
      <Stack.Screen name="Cadastro Animal" component={Cadastroanimal} options={{
        title: 'Cadastro Animal',
        headerLeft: () => AbrirMenu({navigation}),
      }}/>

       <Stack.Screen options={{title: "Escolha uma imagem"}} name="Camerapessoa" component={Camerapessoa}/> 

     </Stack.Navigator>
  );
}
