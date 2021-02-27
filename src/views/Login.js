
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'


export default function Login() {
  return (
    <View style={Estilo.container}>

      
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
            style={Estilo.botao}
            
        >
            <Text style={Estilo.botaoText}>Login</Text>
        </TouchableOpacity>
        


    </View>
  );
}


