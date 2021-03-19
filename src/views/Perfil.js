import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import { BotaoPrimario, BotaoImagem } from '../componente/botao'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { set } from 'react-native-reanimated';
import storage from '@react-native-firebase/storage';




export default function Perfil({ navigation, route }) {


    // Variaveis
    var Image_Http_URL
    var imagemv
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()


    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }



    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount

    }, [auth().currentUser]);


    const [estado, setestado] = useState('')
    const [cidade, setcidade] = useState('')
    const [email, setemail] = useState('')
    const [endereco, setendereco] = useState('')
    const [idade, setidade] = useState('')
    const [imagem, setimagem] = useState('')
    const [telefone, settelefone] = useState('')
    const [imgurl, setimgurl] = useState('')
    const [name, setname] = useState('')



    async function Carregar_dados() {

        if (user) {


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
            }).then(() => {

            })
        }



    }

    function Renderizar() {

        if (user) {
            Carregar_dados()
            return (

                <ScrollView>
                    <SafeAreaView style={Estilo.container}>
                        <Text style={Estilo.textoPerfilUsuario}>Informações do Usuário</Text>
                        <Text style={Estilo.textoPerfil}>Nome: {name} </Text>
                        <Text style={Estilo.textoPerfil}>Idade: {idade} </Text>
                        <Text style={Estilo.textoPerfil}>Email: {email} </Text>
                        <Text style={Estilo.textoPerfil}>Endereço: {endereco} </Text>
                        <Text style={Estilo.textoPerfil}>Telefone: {telefone}</Text>
                        <Text style={Estilo.textoPerfil}>Cidade: {cidade} </Text>
                        <Text style={Estilo.textoPerfil}>Estado: {estado} </Text>
                    </SafeAreaView>


                    <Image
                        style={{ width: 300, height: 300, resizeMode: 'contain' }}
                        source={{ uri: imgurl }}
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
        <SafeAreaView>

            {/* <Text style={Estilo.textoPerfil}> Seus dados serão carregados</Text> */}

            {Renderizar()}

        </SafeAreaView>
    )

}