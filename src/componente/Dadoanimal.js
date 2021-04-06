import React, {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView, Text } from 'react-native'
import { Card } from 'react-native-elements'
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'

export default function Dadoanimal(props) {


    
    

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={props.onPress}>
                <Card>
                    <Card.Title>{props.Nome_do_animal}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={{uri: props.imagemurl}}/>
                </Card>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

//{props.Nome_do_animal}
//source={{uri: props.imagemurl}}
