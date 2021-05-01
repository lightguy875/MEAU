import React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView} from 'react-native';
import botao from '../estilo/botao.style'
import Icon from 'react-native-vector-icons/Feather'





 export function BotaoPrimario(props) {
  return (


    <TouchableOpacity style={[botao.botaoPrimario,props.style]} onPress={props.onPress}>
        <Text>{props.name}</Text>
    </TouchableOpacity>
    
  );
}

export function BotaoImagem(props) {
  return (

    <TouchableOpacity style={[botao.botaoImagem,props.style]} onPress={props.onPress}>
      <Icon name="plus-circle" size={18}></Icon>
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