import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../views/Login'
import ErroLogin from '../views/ErroLogin'
import {LoginStack, CadastroPessoalStack, CadastroAnimalStack, PerfilStack, CachorroStack,PetsStack, ChatStack} from './Stack'
import CadastroPessoal from '../views/CadastroPessoal'
import Cadastroanimal from '../views/Cadastroanimal'
import Principal from '../views/Principal'
import TelaInicial from '../views/TelaInicial';
import CustomDrawer from './CustomDrawer'
import ForgotPassword from '../views/ForgotPassword';




const Drawer = createDrawerNavigator();
// (props) => <CustomDrawer {...props}/>
export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" drawerContent={(props) => <CustomDrawer {...props}/>}>
        <Drawer.Screen name="Login" component={LoginStack} />
        <Drawer.Screen name="Chat" component={ChatStack} />
        <Drawer.Screen name="Meus Pets" component={CachorroStack}/>
        <Drawer.Screen name="Todos os Pets" component={PetsStack}/>
        <Drawer.Screen name="CadastroPessoal" component={CadastroPessoalStack}/>
        <Drawer.Screen name="TelaInicial" component={TelaInicial}/>
        <Drawer.Screen name="Principal" component={Principal}/>
        <Drawer.Screen name="Cadastroanimal" component={CadastroAnimalStack}/>
        <Drawer.Screen name="Perfil" component={PerfilStack}/>
        <Drawer.Screen name="ForgotPassword" component={ForgotPassword}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}