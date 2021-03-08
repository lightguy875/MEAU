import React from 'react'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {  DrawerItemList} from '@react-navigation/drawer';

import ErroLogin from '../views/ErroLogin'


export default (props) => {
    return(
        <View style={{flex:1, backgroundColor: 'white',}}>
            <View style={Estilo.header}>
                <Image style={Estilo.photoProfile} source={require('../img/gato1.jpeg')}/>
                <Text style= {Estilo.txtProfile}>Nome do usuário</Text>
            </View>

            <Button title='Teste' onPress={() => props.navigation.navigate('ErroLogin')}/>

            <DrawerItemList {...props}/>

        </View>
    );
}

const Estilo = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        backgroundColor: '#cfe9e5',
        padding: 20,
        justifyContent: 'center',
    },

    photoProfile: {
        width: 90,
        height: 90,
        borderRadius: 100,
    },

    txtProfile: {
        fontSize: 20,
        marginTop: 20,
    },
});
