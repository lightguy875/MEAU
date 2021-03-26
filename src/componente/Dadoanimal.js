import React, {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView, Text } from 'react-native'
import { Card } from 'react-native-elements'
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'

export default function Dadoanimal(props) {

    const [imagemurl,setimagemurl] = useState()
    const [user, setUser] = useState()
    function onAuthStateChanged(user) {
        setUser(user);
    }


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        carregar_imagem()
        return subscriber; // unsubscribe on unmount

    }, [auth().currentUser],[]);
    
    async function carregar_imagem() {
        
        setimagemurl(await storage().ref(props.imagem ).getDownloadURL())

    }
    

    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Card>
                    <Card.Title>{props.Nome_do_animal}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={{uri: imagemurl}}/>
                </Card>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

//{props.Nome_do_animal}
//source={{uri: props.imagemurl}}
