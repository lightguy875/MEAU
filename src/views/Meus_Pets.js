import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image, SafeAreaView, SectionList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import storage, { firebase } from '@react-native-firebase/storage';
import { FlatList } from 'react-native';
import Dadoanimal from '../componente/Dadoanimal'
import {useDispatch, useSelector} from 'react-redux'
import { pet_load, pet_load_success } from '../store/actions/pet';




export default function Meus_Pets({ navigation, route }) {

    var animaisaux = []
    var mudança
    var size
    var Image_Http_URL
    var imagemv
    const [animais, setanimais] = useState()
    const [imagemurl, setimagemurl] = useState(undefined)
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()

    let meus_pets = useSelector(state => state.petsuser)
    // const dispatch = useDispatch()

    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }





    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     carregar_animais()
    //     return subscriber; // unsubscribe on unmount

    // }, [auth().currentUser], []);


    // async function carregar_animais() {

    //     if (auth().currentUser) {

    //         dispatch(pet_load({id: auth().currentUser.uid}))
         
    //     } else {
    //         await firestore().terminate()
    //         setanimais(null)
            
    //     }
    // }


    // async function carregar_animais() {

    //     if (auth().currentUser) {
    //         await firestore().collection('Animais').where('dono', '==', auth().currentUser.uid).onSnapshot((querySnapshot) => {
    //             var animaisaux = [];
    //             querySnapshot.forEach((doc) => {


    //                 animaisaux.push(Object.assign(doc.data(), { id: doc.id }))

    //             })
    //             dispatch(pet_load_success(animaisaux))
    //         })
    //     } else {
    //         await firestore().terminate()
            
    //     }
    // }

    function renderizar() {
        if (auth().currentUser && meus_pets.pets) {
            return (

                <FlatList
                    keyExtractor={item => item.id}
                    data={meus_pets.pets}
                    renderItem={({ item }) => <Dadoanimal {...item} onPress={() => navigation.navigate('Perfil Pet', {
                        item: item,
                    })} />
                    }
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





