import React, { useEffect, useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Alert,
    Text,
    LogBox
} from 'react-native'

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import Interessado from '../componente/Interessado'
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux'


export default function Interessados({ navigation, route }) {


    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()
    const [users, setUsers] = useState()
    let usuario = useSelector(state => state.user.user)
    let chats = useSelector(state => state.chat.chat)
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

  


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        Carregar_users()
        return subscriber; // unsubscribe on unmount

    }, [auth().currentUser], []);




    async function Carregar_users() {

        if (auth().currentUser) {

            await firestore().collection('Users').onSnapshot((querySnapshot) => {
                var pessoas = [];
                querySnapshot.forEach((doc) => {
                    if (route.params.item.interessados.includes(doc.id)) {
                        pessoas.push(Object.assign(doc.data(), { id: doc.id }))
                    }
                })
                setUsers(pessoas)
            })

        }
        else {
            await firestore().terminate()
            setUsers(null)

        }
    }

    async function criar_chat(item) {
        if(auth().currentUser) {
            Alert.alert('Chat', `Deseja fazer um chat com ${item.name.split(' ').slice(0,2).join(' ')} ?` , [{
                text: 'Sim',
                async onPress(){
                    let element = chats.map(chat => {
                        if(chat.usersid.includes(item.id))
                        return chat
                    })
                    element = element.filter((elemento) =>{
                        return elemento != undefined
                        })
        
                    if(element.length) {
                        Alert.alert('Erro', 'O chat já existe')
                    }else {
                        
        
                    let usersids = [auth().currentUser.uid,item.id]
                    let users = [{
                        nome_de_usuario: usuario.nome_de_usuario,
                        name: usuario.name, 
                        imagemurl: usuario.imagemurl,
                        Nome_do_animal: route.params.item.Nome_do_animal
                    },{
                        nome_de_usuario: item.nome_de_usuario,
                        name: item.name,
                        imagemurl: item.imagemurl,
                        Nome_do_animal: route.params.item.Nome_do_animal
                    }]
                    let momento = new Date().getTime()
                    await firestore().collection('Chat').add({
                        momento: momento,
                        users: users,
                        usersid: usersids,
                        ultima_mensagem: '',
                    }).then(() => {
                        Alert.alert('Sucesso', 'Chat cadastrado com sucesso')
                    })
                    
                }
            }
        },{
                text: 'Não'
            }

            ])
                
            } else{
            // console.log("Nome: " + item.name)
            // console.log('Imgaemurl: ' + item.imagemurl)
            // console.log('Pet nome: ' + route.params.item.Nome_do_animal)
            // console.log('id do usuario:' + item.id)
            // console.log('Nome do usuario logado: ' + usuario.name)
            // console.log('Imagem url do usuario logado: ' + usuario.imagemurl)
            
            // console.log('ids dos dois usuarios: ' + usersids)
            // console.log('Dados dos usuarios : ' + users[0].name + '\n' + users[0].imagemurl + '\n' + users[0].Nome_do_animal + '\n' + users[1].name + '\n' + users[1].imagemurl + '\n' + users[1].Nome_do_animal)
            // console.log('Momento atual : ' + momento)


        
            Alert.alert('Erro', 'Você precisa estar logado')
        }
    }

    // async function mudar_dono_pet(item) {

    //     if (auth().currentUser) {
    //         Alert.alert('Adoção', 'Deseja confirmar a adoção', [
    //             {
    //                 text: 'Sim',
    //                 async onPress() {
                            
    //                     var array = route.params.item.interessados
    //                     var index = array.indexOf(item.id);
    //                     array.splice(index, 1)
    //                     await firestore().collection('Animais').doc(route.params.item.id).update({
    //                         dono: item.id,
    //                         interessados: array
    //                     }).then(() => {
    //                         Alert.alert(`Adoção`, `O dono do animal foi modificado com sucesso`)
    //                     })

    //                 }
    //             }, {
    //                 text: 'Não'
    //             }
    //         ])

    //     }
    // }

    function renderizar() {
        if (auth().currentUser) {
            return (
                <FlatList 
                    numColumns={2}
                    contentContainerStyle={styles.container}
                    keyExtractor={item => item.id}
                    data={users}
                    renderItem={({ item }) => <Interessado {...item} onPress={() => criar_chat(item)}/>}
                />
            )

        } else {
            return (
                <Text>Você precisa estar logado</Text>
            )
        }
    }


    return (
        <SafeAreaView>
            {renderizar()}
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // width: Dimensions.get('window').width
    }
})