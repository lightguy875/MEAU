import React, { Component, useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { DrawerItemList } from '@react-navigation/drawer';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import ErroLogin from '../views/ErroLogin'
import storage from '@react-native-firebase/storage';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Icone from 'react-native-vector-icons/Feather';



//props
export default (props) => {

    var imagemc
    const [nomeusuario, setnomeusuario] = useState('')
    const [imagemurl, setimagemurl] = useState('')

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

    async function carregar() {

        if (user) {

            await firestore().collection('Users').doc(auth().currentUser.uid).get().then(snapshot => {
                setnomeusuario(snapshot.data().nome_de_usuario)
                imagemc = snapshot.data().imagem

            }).then(async () => {
                setimagemurl(await storage().ref(imagemc.uri).getDownloadURL())
            })
        }
    }
    function render() {
        carregar()

        if (user) {

            return (

                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={Estilo.header}>
                        <View style={Estilo.photoProfile}>
                            <Image style={{flex: 1, borderRadius: 100}} source={{ uri: imagemurl }} />
                        </View>
                        <Text style={Estilo.txtProfile}>{nomeusuario}</Text>
                    </View>
                    <Button title='Teste' onPress={() => props.navigation.navigate('ErroLogin')} />

                    <DrawerItemList {...props} />

                </View>


            )
        } else {

            return (

                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={Estilo.header}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: 'white', borderRadius: 100}}>
                        
                        <Icone name="user" color="#222" style={{fontSize: 100}}/>
                        </View>
                        <Text style={Estilo.txtProfile}>{nomeusuario}</Text>
                    </View>
                    <Button title='Teste' onPress={() => props.navigation.navigate('ErroLogin')} />

                    <DrawerItemList {...props} />

                </View>

            )


        }



    }


    return (
        <>
            {
                render()

            }
        </>
    )

}
const Estilo = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        backgroundColor: '#cfe9e5',
        padding: 20,
        justifyContent: 'center',
    },

    photoProfile: {
        width: 120,
        height: 120,
        borderRadius: 100,
        resizeMode: 'contain'
    },

    txtProfile: {
        fontSize: 20,
        marginTop: 20,
    },
})
