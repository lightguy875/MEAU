import React, {useEffect, useState} from 'react'
import {
Text,
SafeAreaView,
View,
StyleSheet
} from 'react-native'
import {GiftedChat, Actions} from  'react-native-gifted-chat';
import {useSelector} from 'react-redux'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
export default function Conversa({navigation,route}) {

const [messages, setMessages] = useState([]);
let usuario = useSelector(state => state.user)
let dado = route.params.item.users.filter(elemento => {
    return elemento.name != usuario.user.name && elemento.nome_de_usuario != usuario.user.nome_de_usuario
})
let id = route.params.item.usersid.filter(elemento => {
    return elemento != auth().currentUser.uid
})
id = id[0]
dado = dado[0]
dado = Object.assign(dado, {id: id})

let user = {
    _id: auth().currentUser.uid,
    name: usuario.user.name,
    avatar: '',
}



useEffect( () => {

    navigation.setOptions({
        title: dado.name.split(' ').slice(0,2).join(' ')
    });
    // updateMessages2()
   const unsubscribe = carregar_mensagens()
    
   return () => {
       unsubscribe();
   }
        
    

},[route.params])


 function carregar_mensagens() {
   const unsubscribe = firestore().collection('Chat').doc(route.params.item.id).collection('messages').orderBy('createdAt', 'desc').onSnapshot((querySnapshot) => {
        var mensagens = [];
        querySnapshot.forEach((doc) => {
            mensagens.push(Object.assign(doc.data(), {id: doc.id}))
        })
        setMessages(mensagens)
    })
    return unsubscribe
   
   
}


// updateMessages2((msg) => {
      
//     //console.log
//     ('teste mensagem atual2:', messages);
//           setMessages((prevMsgs) => GiftedChat.append(prevMsgs, msg));
//         });
//         return function cleanup() {
//           updateMessages2();

const sendChatMessage = async(chat) => {

await firestore().collection('Chat').doc(route.params.item.id).update({
    momento: chat.createdAt,
    ultima_mensagem: chat.text,
})

    await firestore()
      .collection('Chat')
      .doc(route.params.item.id)
      .collection('messages')
      .add(chat);
  };

  const onSend = async (msgs) => {
    msgs.forEach((msg) => {

      const { text, user, _id } = msg;
      const message = { _id, text, user, createdAt: new Date().getTime(),};

      sendChatMessage(message);
    });
  };






    return(
        <SafeAreaView style={styles.container}>
        <GiftedChat messages={messages} user={user} onSend={onSend} />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FFF',
        flex: 1,
    }
})