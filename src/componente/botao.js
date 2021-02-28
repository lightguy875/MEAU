import React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView} from 'react-native';
import botao from './botao.style'
import ImagePicker from 'react-native-image-picker'



 export function BotaoPrimario(props) {
  return (

    <TouchableOpacity style={botao.botaoPrimario}>
        <Text>{props.name}</Text>
    </TouchableOpacity>
    
  );
}

export function BotaoImagem(props) {




  const OpenPicker = () => {
    const options = {
      title: 'Cadastre uma foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },

    }
    ImagePicker.showImagePicker(options, (response) => {
      if(response.didCancel) {
        console.log('User cancelled image picker');
      } else if( response.error) {
        console.log('ImagePicker Error:' , response.error);
      } else {
        const source = {uri: response.uri};
      }
    })
  }






  return (

    <TouchableOpacity style={botao.botaoImagem} onPress={OpenPicker}>
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