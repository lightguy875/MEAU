import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../views/Login'
import ErroLogin from '../views/ErroLogin'
import {LoginStack, CadastroPessoalStack, CadastroAnimalStack} from './Stack'
import Perfil from '../views/Perfil'
import CadastroPessoal from '../views/CadastroPessoal'
import Cadastroanimal from '../views/Cadastroanimal'
import Principal from '../views/Principal'
import TelaInicial from '../views/TelaInicial';
import CustomDrawer from './CustomDrawer'




const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" drawerContent={CustomDrawer}>
        <Drawer.Screen name="Login" component={LoginStack} />
        <Drawer.Screen name="CadastroPessoal" component={CadastroPessoalStack}/>
        <Drawer.Screen name="TelaInicial" component={TelaInicial}/>
        <Drawer.Screen name="Principal" component={Principal}/>
        <Drawer.Screen name="Cadastroanimal" component={CadastroAnimalStack}/>
        <Drawer.Screen name="Perfil" component={Perfil}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}