
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import cor from '../estilo/cor'
import {BotaoPrimario, BotaoImagem, BotaoFacebook, BotaoGoogle} from '../componente/botao'
import CadastroPessoal from './CadastroPessoal'
import { SafeAreaView } from 'react-native-safe-area-context';
import botao from '../componente/botao.style'



export default function Principal({navigation}) {
  return (

      <View >
         <View style={{
          
          backgroundColor: cor.fundoPadrao,
          position: 'absolute',
          right: 0,
          left: 0,
          height: 250,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'baseline'
        }}>
          <Text style={{fontSize:32, fontWeight: '700'}}>Bem vindo(a)!</Text>
          <Text style={{textAlign: 'center', width: 240}}>Com o MEAU, você pode adotar, doar e ajudar cães e gatos com felicidade</Text>
          <Text>Qual seu interesse?</Text>

        </View>

        <SafeAreaView style={{ alignItems: 'center', marginTop: 100,marginTop: 400,}}>

        <StatusBar
            backgroundColor={cor.topo}
            
        />
        


        <TouchableOpacity style={botao.botaoPrimario} onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={botao.botaoPrimario} onPress={() => navigation.navigate('CadastroPessoal')}>
          <Text>Cadastro Pessoal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={botao.botaoPrimario} onPress={() => navigation.navigate('Cadastroanimal')}>
          <Text>Cadastro Animal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={botao.botaoPrimario} onPress={() => navigation.navigate('TelaInicial')}>
          <Text>Tela inicial do Miguel</Text>
        </TouchableOpacity>






        </SafeAreaView>
      </View>
  );
}



