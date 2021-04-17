import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image, SafeAreaView, SectionList } from 'react-native';
import Estilo from '../estilo/estilo'
import auth from '@react-native-firebase/auth'
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Interesse from '../componente/Interesse'
import Resposta from '../componente/Resposta'


export default function Notificacoes({navigation, route}) {

    let notifications = useSelector(state => state.notificacoes)



    function renderizar() {
        if (auth().currentUser) {

            return(

            <>
                <FlatList
                    keyExtractor={item => item.id}
                    data={notifications.interesse}
                    renderItem={({ item }) => <Interesse {...item}/> } 
                    />
                    




                <FlatList
                    keyExtractor={item => item.id}
                    data={notifications.resposta}
                    renderItem={({ item }) => <Text style={{fontSize: 30}}>{item.tipo}</Text>}
                />

            </>
            )


        }
        else {
            return (
                <Text style={Estilo.textoPerfil}>Voce não está logado no sistema</Text>
            )
        }


    }

    return (
        <SafeAreaView style={{alignItems:'center' , justifyContent: 'center'}}>
            {renderizar()}
        </SafeAreaView>
    )

}