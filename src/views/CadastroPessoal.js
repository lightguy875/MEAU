import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import {BotaoPrimario, BotaoImagem} from '../componente/botao'

export default function CadastroPessoal({navigation}) {

    return(
        <ScrollView>
            <StatusBar
            backgroundColor={Cor.topo}
            
            />

            <View style={Estilo.container}>

            <Text style={Estilo.text_inf_cadastroPessoal}>
                As informações preenchidas serão divulgadas apenas para a pessoa com a qual você realizar o processo de adoção. após a formalização do processo.
            </Text>

            <Text style={Estilo.titulo}>INFORMAÇÕES PESSOAIS</Text>

            <TextInput 
                style={Estilo.input}
                placeholder="Nome completo"
            />

            <TextInput 
                style={Estilo.input}
                placeholder="Idade"
                keyboardType='numeric'
            />

            <TextInput 
                style={Estilo.input}
                placeholder="E-mail"
                keyboardType="email-address"
            />

            <TextInput 
                style={Estilo.input}
                placeholder="Estado"
            />

            <TextInput 
                style={Estilo.input}
                placeholder="Cidade"
            />

            <TextInput 
                style={Estilo.input}
                placeholder="Endereço"
            />

            <TextInput 
                style={Estilo.input}
                placeholder="Telefone"
                keyboardType="phone-pad"
            />

            <Text style={Estilo.titulo}>INFORMAÇÕES DE PERFIL</Text>

            <TextInput 
                style={Estilo.input}
                placeholder="Nome de usuário"
            />

            <TextInput
                style={Estilo.input}
                secureTextEntry={true}
                placeholder="Senha"
            />

            <TextInput
                style={Estilo.input}
                secureTextEntry={true}
                placeholder="Confirmação de senha"
            />

            <Text style={Estilo.titulo}>FOTO DE PERFIL</Text>
            
            
            <BotaoImagem onPress={() => navigation.navigate('Camera')}/>
                
            <BotaoPrimario name='FAZER CADASTRO'/>

            </View>
            

        </ScrollView>
    );
}