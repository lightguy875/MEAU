import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image,SafeAreaView} from 'react-native';
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
    var Image_Http_URL
   var imagemv


    const [estado,setestado] = useState('')
    const [cidade,setcidade] = useState('')
    const [email,setemail] = useState('')
    const [endereco,setendereco] = useState('')
    const [idade,setidade] = useState('')
    const [imagem,setimagem] = useState('')
    const [telefone,settelefone] = useState('')
    const [imgurl,setimgurl] = useState('')
    const [name,setname] = useState('')



   async function Carregar_dados() {

        if(auth().currentUser) {


            await firestore().collection('Users').doc(auth().currentUser.uid).get().then(snapshot => {
                setestado(snapshot.data().Estado)
                setcidade(snapshot.data().cidade)
               setemail(snapshot.data().email)
                setendereco(snapshot.data().endereço)
               setidade(snapshot.data().idade)
               imagemv = snapshot.data().imagem
                setimagem(snapshot.data().imagem)
                setname(snapshot.data().name)
                settelefone(snapshot.data().telefone)
            }).then(async () => {
                setimgurl(await storage().ref(imagemv.uri).getDownloadURL())
             }).then( () => {

             })
        }
        else {
            Alert.alert('Erro', 'Você precisa estar logado para ver o perfil')
            setestado('')
            setcidade('')
            setemail('')
            setendereco('')
            setidade('')
            setimagem('')
            settelefone('')
            setimgurl('')
            setname('')
            
        }

    }

    function Renderizar() {
        return (
            <>
            <Text> Estado: {estado} </Text>
            <Text> Cidade: {cidade} </Text>
            <Text> Email: {email} </Text>
            <Text> Endereço: {endereco} </Text>
            <Text> Idade: {idade} </Text>
            <Text>Nome: {name} </Text>
            <Text>Telefone: {telefone}</Text>
            <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={{uri: imgurl}}
            />
            </>

        )
    }

    return (
        <SafeAreaView>

        <Text> Seus dados serão carregados</Text>

      <Button
      title="Carregar dados"
      onPress={async () => {Carregar_dados()}} >


   </Button>
        {Renderizar()}

        </SafeAreaView>
    )

}