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

export default function Interessados({ navigation, route }) {


    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()
    const [users, setUsers] = useState()


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
                    renderItem={({ item }) => <Interessado {...item}/>}
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