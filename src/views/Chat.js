import React from 'react'
import {FlatList, SafeAreaView, Text} from 'react-native'
import {useSelector} from 'react-redux'
import Chatitem from '../componente/Chatitem'


export default function Chat({navigation, route}) {

    let chat = useSelector(state => state.chat.chat)
    

    return  (
    
    <FlatList
    keyExtractor={item => item.id}
    data={chat}
    renderItem={({ item }) => <Chatitem {...item} />}
    />
    // <Text>Página carregada com Sucesso</Text>
    )

        
    
  
}