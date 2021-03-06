
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from './Login.estilo'
import Cor from '../estilo/cor'
import {BotaoPrimario, BotaoImagem, BotaoFacebook, BotaoGoogle} from '../componente/botao'
import CadastroPessoal from './CadastroPessoal'
import Pilha from '../navegação/Stack';
import Cabecalho from '../componente/HeaderCustom'


export default function Login({navigation}) {
  return (

    
    

    <KeyboardAvoidingView style={{ flex: 1}}>
      <StatusBar
            backgroundColor={Cor.topo}
            
        />

        <Cabecalho titulo="Login"/>

        <View style={{ flex: 1}}>

        
        

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
          <Text>LOGIN</Text>
        </TouchableOpacity>
        
        
        <BotaoFacebook />
        <BotaoGoogle/>




        </View>
    </KeyboardAvoidingView>
  );
}



