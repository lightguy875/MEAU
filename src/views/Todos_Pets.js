import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage';
import { FlatList } from 'react-native';
import Dadoanimal from '../componente/Dadoanimal'




export default function Todos_Pets({ navigation, route }) {



    var size
    var Image_Http_URL
    var imagemv
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()
    const [animais, setanimais] = useState()
    const [imagemurl,setimagemurl] = useState(undefined)
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        carregar_animais()
        return subscriber; // unsubscribe on unmount

    }, [auth().currentUser, []]);




    async function carregar_animais() {

        if (user) {


            await firestore().collection('Animais').where('dono', '!=', auth().currentUser.uid).onSnapshot((querySnapshot) => {
                var animaisaux = [];
                querySnapshot.forEach(async (doc) => {


                    animaisaux.push(Object.assign(doc.data(), { id: doc.id }))
                    
                })         
                setanimais(animaisaux)
                
            })
        } else {
            setanimais(null)
        }
    }

    function renderizar() {
        if (user) {
            return (
                
            <FlatList
                keyExtractor={item => item.id}
                data={animais}
                renderItem={({item}) => <Dadoanimal {...item} onPress={() => navigation.navigate('Perfil Pet', {item: item})} />}
            />
            )
        }
        else {
            return (
            <Text style={Estilo.textoPerfil}>Voce não está logado no sistema</Text>
            )
        }


    }


    return (
        <SafeAreaView>
            {renderizar()}
        </SafeAreaView>
    )
}




