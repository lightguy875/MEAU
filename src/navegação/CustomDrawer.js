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
import { pet_load_success, pet_load_todos_success } from '../store/actions/pet'
import { notifications_load_interesses_success, notifications_load_respostas_success } from '../store/actions/notificacoes'
import {chat_get_success} from '../store/actions/chat'
import { useDispatch, useStore, useSelector } from 'react-redux'


//props
export default (props) => {

    var imagemc
    const [nomeusuario, setnomeusuario] = useState('')
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()

    const dispatch = useDispatch()
    // let usuario = useStore().getState().user
    let usuario = useSelector(state => state.user)
    let notifications = useSelector(state => state.notificacoes)


    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }



    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        if (auth().currentUser) {
            carregar()
            carregar_animais()
            carregar_animais_todos()
            carregar_notificacao_interesse()
            carregar_notificacao_resposta()
            carregar_chat()
        } else {
            firestore().terminate()
        }
        return subscriber; // unsubscribe on unmount

    }, [auth().currentUser]);


    carregar = async () => {
        dispatch(user_load_data({ id: auth().currentUser.uid }))
    }


    async function carregar_notificacao_interesse() {

        await firestore().collection('Notifications').where('tipo', '==', 'interesse').where('dono', '==', auth().currentUser.uid).onSnapshot((querySnapshot) => {
            var nofications = [];
            querySnapshot.forEach((doc) => {
                nofications.push(Object.assign(doc.data(), { id: doc.id }))
            })
            dispatch(notifications_load_interesses_success(nofications))
        })
    }

    async function carregar_notificacao_resposta() {
        await firestore().collection('Notifications').where('tipo', '==', 'resposta').where('interessado', '==', auth().currentUser.uid).onSnapshot((querySnapshot) => {
            var nofications_resposta = [];
            querySnapshot.forEach((doc) => {
                nofications_resposta.push(Object.assign(doc.data(), { id: doc.id }))
            })
            dispatch(notifications_load_respostas_success(nofications_resposta))
        })
    }



    async function carregar_animais() {

        await firestore().collection('Animais').where('dono', '==', auth().currentUser.uid).onSnapshot((querySnapshot) => {
            var animaisaux = [];
            querySnapshot.forEach((doc) => {


                animaisaux.push(Object.assign(doc.data(), { id: doc.id }))

            })
            dispatch(pet_load_success(animaisaux))
        })
    }


    async function carregar_animais_todos() {

        await firestore().collection('Animais').where('dono', '!=', auth().currentUser.uid).onSnapshot((querySnapshot) => {
            var animaistodosaux = [];
            querySnapshot.forEach((doc) => {


                animaistodosaux.push(Object.assign(doc.data(), { id: doc.id }))

            })
            dispatch(pet_load_todos_success(animaistodosaux))
        })
    }



    async function carregar_animais_todos() {

        await firestore().collection('Animais').where('dono', '!=', auth().currentUser.uid).onSnapshot((querySnapshot) => {
            var animaisaux = [];
            querySnapshot.forEach((doc) => {


                animaisaux.push(Object.assign(doc.data(), { id: doc.id }))

            })
            dispatch(pet_load_todos_success(animaisaux))
        })
    }

    async function carregar_chat() {
        await firestore().collection('Chat').where('usersid', 'array-contains', auth().currentUser.uid).onSnapshot((querySnapshot) => {
            var chataux = [];
            querySnapshot.forEach((doc) => {
                chataux.push(Object.assign(doc.data(), {id: doc.id}))
            })
            dispatch(chat_get_success(chataux))
        })
    }



    function render() {
        if (usuario.user) {
            return (
                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={Estilo.header}>
                        <View style={Estilo.photoProfile}>
                            <Image style={{ flex: 1, borderRadius: 100 }} source={{ uri: usuario.user.imagemurl }} />
                        </View>
                        <Text style={Estilo.txtProfile}>{usuario.user ? usuario.user.nome_de_usuario : 'carregando'}</Text>
                        {/*  */}
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
