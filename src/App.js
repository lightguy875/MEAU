
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Estilo from './estilo/estilo'
import Login from './views/Login'
import CadastroPessoal from './views/CadastroPessoal'
import Cadastroanimal from './views/Cadastroanimal'

export default function App() {
  return (
    <View style={Estilo.container}>
      
      <Login/>
      
    </View>
  );
}