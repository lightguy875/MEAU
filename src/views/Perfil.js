import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import {BotaoPrimario, BotaoImagem} from '../componente/botao'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { set } from 'react-native-reanimated';
import storage from '@react-native-firebase/storage';




export default function Perfil({navigation, route}) {


    // Variaveis




   async function Carregar_dados() {

        if(auth().currentUser) {


            var usuario = await firestore().collection('Users').doc(auth().currentUser.uid).get()


        }
        else {

            Alert.alert('Erro', 'Você precisa estar logado para ver o perfil')
        }

    }

}