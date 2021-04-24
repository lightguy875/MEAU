import React, {useEffect} from 'react'
import {
Text,
SafeAreaView,
View,
StyleSheet
} from 'react-native'
import {useSelector} from 'react-redux'
import auth from '@react-native-firebase/auth'
export default function Conversa({navigation,route}) {

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

useEffect( () => {

    navigation.setOptions({
        title: dado.name.split(' ').slice(0,2).join(' ')
    });
},[route.params])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto}>Chegamos até a página de conversa</Text>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        fontSize:30,
    }
})