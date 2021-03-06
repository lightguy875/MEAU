import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';

export default StyleSheet.create({

    nav: {
        flexDirection: 'row',
        height: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 1,        
    },

    botoes: {
        flex: 1,
        
        paddingLeft: 15,
        justifyContent: 'center'

    },

    titulo: {
        flex: 1.5,
        
        justifyContent: 'center',
        alignItems: 'center',
    },

    menu: {
        width: 30,
        height: 30,
    }



});