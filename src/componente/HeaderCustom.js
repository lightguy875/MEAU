import React from 'react';
import { Button, StyleSheet, Text, Image, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Estilo from './HeaderCustom.style'

export default ({titulo}) => {
    return(
        <View style={Estilo.nav}>
            <View style={Estilo.botoes}>
                <Image style={Estilo.menu} source={require('../img/botoes/menu2.png')}/>
            </View>
            <View style={Estilo.titulo}>
                <Text>{titulo}</Text>
            </View>
            <View style={Estilo.botoes}></View>

        </View>
    );
}