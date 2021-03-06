
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from './Login.estilo'
import Cor from '../estilo/cor'
import { BotaoFacebook, BotaoGoogle} from '../componente/botao'
import Icon from 'react-native-vector-icons/Feather';

export default function Login({navigation}) {
  return (

    
    

    <KeyboardAvoidingView style={Estilo.container}>
      <StatusBar
            backgroundColor={Cor.topo}
            
        />

        

        
        

      <TextInput 
        style={Estilo.input}
        placeholder="Nome de usuário"
      />

      <TextInput
        style={Estilo.input}
        secureTextEntry={true}
        placeholder="Senha"
      />

      <TouchableOpacity style={Estilo.botaoLogin} 
        onPress={() => navigation.navigate('ErroLogin')}
      >
        <Text style={[Estilo.txtBotao, {color: 'black'}]}>LOGIN</Text>
      </TouchableOpacity>
        
        
      <TouchableOpacity style={Estilo.botaoFacebook}>
        <Icon  name="facebook" style={Estilo.txtBotao} resizeMode="contain"/>
        <Text style={[Estilo.txtBotao]}>ENTRAR COM FACEBOOK</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={Estilo.botaoGoogle}>
        <Icon  name="user-plus" style={[Estilo.txtBotao]} resizeMode="contain"/>

        <Text style={[Estilo.txtBotao]}>ENTRAR COM GOOGLE</Text>
      </TouchableOpacity>



       
    </KeyboardAvoidingView>
  );
}



