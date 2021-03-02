
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import {BotaoPrimario, BotaoImagem, BotaoFacebook, BotaoGoogle} from '../componente/botao'
import CadastroPessoal from './CadastroPessoal'


export default function Login({navigation}) {
  return (

    
    

    <KeyboardAvoidingView style={{flex: 1,}}>

        <View style={Estilo.container}>

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
        
        <BotaoPrimario name='LOGIN'/>
        <BotaoFacebook/>
        <BotaoGoogle/>




        </View>
    </KeyboardAvoidingView>
  );
}



