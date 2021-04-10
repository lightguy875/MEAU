import React , {useEffect, useState} from 'react'
import {
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

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

            await firestore().collection('Users').id.match

        }
        else {
            await firestore().terminate()
            setUsers(null)
            
        }


    }
}