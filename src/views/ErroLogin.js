import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import {BotaoPrimario, BotaoImagem, BotaoFacebook, BotaoGoogle} from '../componente/botao'


export default function ErroLogin(){
    return(
        <View style={Estilo.container}>

            <Text>Opp's</Text>
            <Text>Você não pode realizar esta ação sem possuir um cadastro.</Text>

            <BotaoPrimario name='FAZER CADASTRO'/>
            <Text>Já possui cadastro?</Text>
            <BotaoPrimario name='FAZER LOGIN'/>



        </View>
    );
}