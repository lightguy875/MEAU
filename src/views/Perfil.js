import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import { BotaoPrimario, BotaoImagem } from '../componente/botao'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { set } from 'react-native-reanimated';
import {useSelector ,useStore} from 'react-redux'



export default function Perfil({ navigation, route }) {


    let usuario = useSelector(state => state.user)

    function Renderizar() {
        if (usuario.user) {

            

            return (
                <ScrollView>
                {/* <StatusBar backgroundColor='#88c9bf' barStyle="light-content"/>  */}

                    <SafeAreaView style={Estilo.container}>
                        <Text style={Estilo.textoPerfilUsuario}>Informações do Usuário</Text>
                        <Text style={Estilo.textoPerfil}>Nome: {usuario.user.name} </Text>
                        <Text style={Estilo.textoPerfil}>Idade: {usuario.user.idade} </Text>
                        <Text style={Estilo.textoPerfil}>Email: {usuario.user.email} </Text>
                        <Text style={Estilo.textoPerfil}>Endereço: {usuario.user.endereço} </Text>
                        <Text style={Estilo.textoPerfil}>Telefone: {usuario.user.telefone}</Text>
                        <Text style={Estilo.textoPerfil}>Cidade: {usuario.user.cidade} </Text>
                        <Text style={Estilo.textoPerfil}>Estado: {usuario.user.Estado} </Text>
                    </SafeAreaView>


                    <Image
                        style={{ width: 300, height: 300, resizeMode: 'contain' }}
                        source={{uri: usuario.user.imagemurl}}
                    />
                </ScrollView>


            )
        } else {
            return (

                <>
                <Text style={Estilo.textoPerfil}> Você precisa estar logado para ver o perfil</Text>
                </>
            )


        }
    }

    return (
        <>

            {
            
            Renderizar()
            
            }

        </>
    )

}