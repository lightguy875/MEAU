import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image, SafeAreaView,ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import storage, { firebase } from '@react-native-firebase/storage';
import { FlatList } from 'react-native';
import Dadoanimal from '../componente/Dadoanimal'
import {useDispatch, useSelector} from 'react-redux'




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

    //     navigation.setOptions({
            
    //     });
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
                <>
                <FlatList
                    keyExtractor={item => item.id}
                    data={meus_pets.pets}
                    renderItem={({ item }) => <Dadoanimal {...item} tipo={'meu_pet'} onPress={() => navigation.navigate('Perfil Pet', {
                        item: item,
                    })} />
                    }
                />
                </>
            )
        }
        else {
            return (
                <View style={styles.container}>
                 <ActivityIndicator size='large' color='#000'/> 
                </View>
            )
        }


    }


    return (
        <>

            {renderizar()}
        </>
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },

})

