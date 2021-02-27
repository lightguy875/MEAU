
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        borderBottomColor: 'black',
        width: 300,
        borderBottomWidth: 1,
        padding: 8,
      
    },

    botao: {
        backgroundColor: 'blue',
        width: 232,
        height: 40,
        marginTop: 52,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#88c9bf',
        justifyContent: 'center',
        alignItems: 'center',

    },

    botaoText: {
        color: '#434343',
    },







});
