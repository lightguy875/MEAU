
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Estilo from './estilo/estilo'
import Login from './views/Login'
import CadastroPessoal from './views/CadastroPessoal'
import Cadastroanimal from './views/Cadastroanimal'
import ErroLogin from './views/ErroLogin'
import TelaInicial from './views/TelaInicial'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Login/>
    </View>
  );
}