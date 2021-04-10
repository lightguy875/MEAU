import React , {useEffect, useState} from 'react'
import {
    FlatList,
    SafeAreaView,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import Interessado from '../componente/Interessado'

export default function Interessados({navigation , route}) {


    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()
    const [users,setUsers] = useState()


    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }



    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        Carregar_users()
        return subscriber; // unsubscribe on unmount

    }, [auth().currentUser],[]);




    async function Carregar_users() {

        if(auth().currentUser) {

            await firestore().collection('Users').onSnapshot((querySnapshot) => {
                var pessoas = [];
                querySnapshot.forEach((doc) => {
                    if(route.params.item.interessados.includes(doc.id)){
                        pessoas.push(Object.assign(doc.data(), {id: doc.id}))
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

    async function mudar_dono_pet() {

    }

    function renderizar() {
        if(auth().currentUser) {
            return (
            <FlatList
            contentContainerStyle={styles.container}
            keyExtractor={item => item.id}
            data={users}
            renderItem={({ item }) => <Interessado {...item} onPress={() => {}}/>}
            />
            )

        }else {
            return(
                <Text>Você precisa estar logado</Text>
            )
        }
    }


    return(
            <>
            {renderizar()}
            </>
       
    )
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flexWrap: 'wrap',
    }
})