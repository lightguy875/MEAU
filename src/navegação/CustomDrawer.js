import React, { Component, useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import ErroLogin from '../views/ErroLogin'
import storage from '@react-native-firebase/storage';
import Icone from 'react-native-vector-icons/Feather';
import { user_load_data, user_logout } from '../store/actions/user'
import { pet_load_success, pet_load_todos_success } from '../store/actions/pet'
import { notifications_load_interesses_success, notifications_load_respostas_success } from '../store/actions/notificacoes'
import { chat_get_success } from '../store/actions/chat'
import { useDispatch, useStore, useSelector } from 'react-redux'
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// import  botao from '../estilo/botao.style'


//props
export default (props) => {


    var imagemc
    const [nomeusuario, setnomeusuario] = useState('')
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()

    const [atalho, setatalho] = useState(false)
    const [meuatalho, setmeuatalho] = useState(false)
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
                chataux.push(Object.assign(doc.data(), { id: doc.id }))
            })
            dispatch(chat_get_success(chataux))
        })
    }

    const Sair = () => {
        dispatch(user_logout())
        props.navigation.navigate('Login')
      }
  



    function render() {
        if (usuario.user) {
            return (
                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={Estilo.header}>
                        <View style={Estilo.perfilview}>
                            <View style={Estilo.imagemView}>
                                <Image style={{ flex: 1, borderRadius: 100 }} source={{ uri: usuario.user.imagemurl }} />
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 60, marginRight: 16 }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Notificações')}>
                                    <Image
                                        style={Estilo.imageIcon}
                                        source={require('../img/icon_notification1.png')}
                                        accessibilityLabel='Imagem para notificação.'
                                    />
                                    <Text style={{ alignSelf: 'center' }}>{notifications.interesse ? notifications.resposta ? notifications.resposta.length + notifications.interesse.length : notifications.interesse.length : '0'}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <TouchableWithoutFeedback onPress={() => setmeuatalho(!meuatalho)}>
                            <View style={Estilo.perfilview}>

                                <Text style={Estilo.txtProfile}>{usuario.user ? usuario.user.nome_de_usuario : 'carregando'}</Text>
                                {meuatalho ? <Icon name="caret-down" size={24} color='#757575' style={Estilo.Icon} /> : <Icon name="caret-up" size={24} color='#757575' style={Estilo.Icon} />}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    { meuatalho ? <>
                        {/* <DrawerItem label="Login" onPress={() => props.navigation.navigate('Login')} /> */}
                        <DrawerItem label="Chat" onPress={() => props.navigation.navigate('Chat')} />
                        <DrawerItem label='Meu Perfil' onPress={() => props.navigation.navigate('Perfil')} />
                        <DrawerItem label='Meus Pets' onPress={() => props.navigation.navigate('Meus Pets')} />
                    </> : undefined}
                    {/* <DrawerItemList {...props} /> */}
                    <TouchableWithoutFeedback onPress={() => setatalho(!atalho)}>
                        <View style={Estilo.Atalhos}>
                            <View style={Estilo.Itens}>
                                <View style={Estilo.textoimagem}>
                                    <Icon name="paw" size={24} color='#757575' style={Estilo.IconStyle} />

                                    <Text style={Estilo.texto}>
                                        Atalhos
                    </Text>
                                </View>
                                {atalho ? <Icon name="caret-down" size={24} color='#757575' style={Estilo.Icon} /> : <Icon name="caret-up" size={24} color='#757575' style={Estilo.Icon} />}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    { atalho ? <>
                        <DrawerItem label="Adotar um pet" onPress={() => props.navigation.navigate('Todos os Pets')} />
                        <DrawerItem label="Cadastrar um pet" onPress={() => props.navigation.navigate('Cadastroanimal')} />
                    </> : undefined}
                    <TouchableOpacity
                        style={Estilo.botaosair}

                        onPress={() => Sair()}
                    >
                        <Text style={{ color: '#000' }}>Sair</Text>

                    </TouchableOpacity>


                    {/* <Button title='Teste' onPress={() => props.navigation.navigate('ErroLogin')} /> */}

                    {/* <DrawerItemList {...props} /> */}

                </View>



            )

        } else {





            return (

                <View style={{ flex: 1, backgroundColor: 'white', }}>
                    <View style={Estilo.header}>
                        <View style={Estilo.imagemView}>

                            <Icone name="user" color="#222" style={{ fontSize: 64, flex: 1, borderRadius: 64, }} />
                        </View>
                        <TouchableWithoutFeedback onPress={() => setmeuatalho(!meuatalho)}>
                            <View style={Estilo.perfilview}>

                                <Text style={Estilo.txtProfile}>Usuário</Text>
                                {meuatalho ? <Icon name="caret-down" size={24} color='#757575' style={Estilo.Icon} /> : <Icon name="caret-up" size={24} color='#757575' style={Estilo.Icon} />}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    { meuatalho ? <>
                        <DrawerItem label="Login" onPress={() => props.navigation.navigate('Login')} />
                        {/* <DrawerItem label="Chat" onPress={() => props.navigation.navigate('Chat')} />
                        <DrawerItem label='Meu Perfil' onPress={() => props.navigation.navigate('Perfil')} />
                        <DrawerItem label='Meus Pets' onPress={() => props.navigation.navigate('Meus Pets')} /> */}
                    </> : undefined}
                    {/* <DrawerItemList {...props} /> */}
                    <TouchableWithoutFeedback onPress={() => setatalho(!atalho)}>
                        <View style={Estilo.Atalhos}>
                            <View style={Estilo.Itens}>
                                <View style={Estilo.textoimagem}>
                                    <Icon name="paw" size={24} color='#757575' style={Estilo.IconStyle} />

                                    <Text style={Estilo.texto}>
                                        Atalhos
                    </Text>
                                </View>
                                {atalho ? <Icon name="caret-down" size={24} color='#757575' style={Estilo.Icon} /> : <Icon name="caret-up" size={24} color='#757575' style={Estilo.Icon} />}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    { atalho ? <>
                        {/* <DrawerItem label="Adotar um pet" onPress={() => props.navigation.navigate('Todos os Pets')} />
                        <DrawerItem label="Cadastrar um pet" onPress={() => props.navigation.navigate('Cadastroanimal')} /> */}
                        <DrawerItem label="Cadastro Pessoal" onPress={() => props.navigation.navigate('CadastroPessoal')} />
                    </> : undefined}

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
        height: 172,
        justifyContent: 'space-between',
        backgroundColor: '#88c9bf',
    },

    photoProfile: {
        width: 64,
        height: 64,
        borderRadius: 64,
        resizeMode: 'contain',


    },

    txtProfile: {
        fontSize: 16,
        color: '#434343',
        marginBottom: 12,
        marginLeft: 16,
        marginTop: 16,

    },

    Atalhos: {
        height: 48,
        // width: 304,
        backgroundColor: '#fee29b',
    },
    IconStyle: {
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 12,
    },
    Itens: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // Itens_embeded: {
    //     flexDirection: 'row',
    //     justifyContent: 'flex-end',
    // },
    texto: {
        marginTop: 16,
        fontSize: 14,
        color: '#434343',
        paddingLeft: 32,
        // paddingRight:72,
    },
    Icon: {
        marginTop: 16,
        marginBottom: 12,
        marginRight: 16,
        alignSelf: 'flex-end',
    },
    textoimagem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    imagemView: {
        width: 64,
        height: 64,
        backgroundColor: 'white',
        borderRadius: 64,
        resizeMode: 'contain',
        marginTop: 40,
        marginLeft: 16,
    },
    perfilview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        margin: 5,
    },
    botaosair: {
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#88c9bf',
        marginBottom: 60,
        elevation: 5,
        // marginTop: 50,
    }

})
