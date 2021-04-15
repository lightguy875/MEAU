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
import { user_load_data } from '../store/actions/user'
import { useDispatch, useStore } from 'react-redux'


//props
export default (props) => {

    var imagemc
    const [nomeusuario, setnomeusuario] = useState('')
    const [imagemurl, setimagemurl] = useState('')

    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()

    const dispatch = useDispatch()

    const usuario = useStore().getState().user

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }



    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        carregar()
        return subscriber; // unsubscribe on unmount

    }, [auth().currentUser], []);


    function carregar() {
        if(usuario.loaded) {
            dispatch(user_load_data({id: auth().currentUser.uid}))
        }
    }

    // async function carregar() {

    //     if (user) {

    //         // await firestore().collection('Users').doc(auth().currentUser.uid).get().then(snapshot => {
    //            await firestore().collection('Users').doc(auth().currentUser.uid).onSnapshot(async snapshot => {
    //             setnomeusuario(await snapshot.data().nome_de_usuario)
    //             setimagemurl(await snapshot.data().imagemurl)

    //         })
    //     }
    //     else {
    //         await firestore().terminate()
    //         setnomeusuario('')
    //     }
    // }
    function render() {

        if (usuario.loaded) {

            return (

                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={Estilo.header}>
                        <View style={Estilo.photoProfile}>
                            <Image style={{ flex: 1, borderRadius: 100 }} source={usuario.imagemurl !== '' ? { uri: usuario.user.imagemurl } : undefined} />
                        </View>
                        <Text style={Estilo.txtProfile}>{usuario.user.nome_de_usuario}</Text>
                    </View>
                    <Button title='Teste' onPress={() => props.navigation.navigate('ErroLogin')} />

                    <DrawerItemList {...props} />

                </View>


            )
        } else {

            return (

                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={Estilo.header}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 120, height: 120, backgroundColor: 'white', borderRadius: 100 }}>

                            <Icone name="user" color="#222" style={{ fontSize: 100 }} />
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
