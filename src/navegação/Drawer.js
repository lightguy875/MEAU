import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../views/Login'
import ErroLogin from '../views/ErroLogin'

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="ErroLogin" component={ErroLogin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}