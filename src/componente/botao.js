import React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView} from 'react-native';
import botao from './botao.style'


 export function BotaoPrimario(props) {
  return (

    <TouchableOpacity style={botao.botaoPrimario}>
        <Text>{props.name}</Text>
    </TouchableOpacity>
    
  );
}

export function BotaoImagem(props) {
  return (

    <TouchableOpacity style={botao.botaoImagem}>
      <Text>+</Text>
      <Text>adicionar imagem</Text>
    </TouchableOpacity>
    
  );
}

export function BotaoFacebook(){
  return(
    <TouchableOpacity style={botao.botaoFacebook}>
      <Text>Facebook</Text>
    </TouchableOpacity>
  );
}

export function BotaoGoogle(){
  return(
    <TouchableOpacity style={botao.botaoGoogle}>
      <Text>Google</Text>
    </TouchableOpacity>
  )
}