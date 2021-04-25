import React from 'react'
import { Alert } from 'react-native'
import {FlatList, SafeAreaView, Text} from 'react-native'
import {useSelector} from 'react-redux'
import Chatitem from '../componente/Chatitem'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'


export default function Chat({navigation, route}) {

    let chat = useSelector(state => state.chat.chat)

    async function deletar_chat(item) {
        if(item.usersid[0] == auth().currentUser.uid){
            Alert.alert('Deletar', 'Deseja deletar este chat?',[
                {
                    text:'Sim',
                    async onPress() {
                        await firestore().collection('Chat').doc(item.id).collection('messages').get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                doc.ref.delete()
                            })
                        }).then(async() => {
                        await firestore().collection('Chat').doc(item.id).delete().then(() => {
                            Alert.alert('Sucesso', 'O chat foi deletado')
                        })
                    })
                    }

                }, {
                    text: 'Não'
                }
            ])
        
        } else {
            Alert.alert('Erro', 'Você não é o dono do chat')
        }
    } 
        

    return  (
    
    <FlatList
    keyExtractor={item => item.id}
    data={chat}
    renderItem={({ item }) => <Chatitem {...item} onLongPress={() => deletar_chat(item)} onPress={() => navigation.navigate('Conversa', {
        item: item
    })}/>}
    />
    // <Text>Página carregada com Sucesso</Text>
    )

        
    
  
}