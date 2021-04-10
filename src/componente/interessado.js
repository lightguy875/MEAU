import React, {useEffect, useState} from 'react'
import { TouchableOpacity , Image, Text} from 'react-native'
import { SafeAreaView, Text } from 'react-native'
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'


export default function interessado(props) {


    return (
        <SafeAreaView>
            <TouchableOpacity onPress={props.onPress}>
            <Image source={{uri: props.imagemurl}} />
            <Text>{props.name}</Text>
            <Text>{props.idade}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )


}