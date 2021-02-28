
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'


export default function Login() {
  return (

    
    

    <KeyboardAvoidingView>

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

        <TouchableOpacity
            style={Estilo.botaoPadrao}
            
        >
            <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={Estilo.botaoFacebook} 
        >
            <Text style={Estilo.textoBranco}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={Estilo.botaoGoogle} 
        >
            <Text style={Estilo.textoBranco}>Google</Text>
        </TouchableOpacity>







        </View>
    </KeyboardAvoidingView>
  );
}



