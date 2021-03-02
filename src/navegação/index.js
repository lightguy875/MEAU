
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../views/Login'
import CadastroPessoal from '../views/CadastroPessoal'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Pilha from './Stack'


export default props => (
    <SafeAreaView style={{flex: 1,}}>

        <NavigationContainer>
            <Pilha/>
        </NavigationContainer>
    </SafeAreaView>
)