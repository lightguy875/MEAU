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
            {notifications.interesse.length ? <Text style={styles.textotitulo}>Interesse</Text> : <Text></Text>}
             {notifications.interesse.length ?  <FlatList
                    style={{flex:1}}
                    keyExtractor={item => item.id}
                    data={notifications.interesse}
                    renderItem={({ item }) => <Interesse {...item}/> } 
                    /> : <Text></Text>
                    
            }

            { notifications.resposta.length ? <Text style={styles.textotitulo}>Resposta</Text> : <Text></Text>}    
            { notifications.resposta.length ?   <FlatList
                    style={{flex:1}}
                    keyExtractor={item => item.id}
                    data={notifications.resposta}
                    renderItem={({ item }) => <Resposta {...item} />}
                /> : <Text></Text>
            }

            </>
            )


        }
        else {
            return (
                <Text></Text>
            )
        }


    }

    return (
        <SafeAreaView style={styles.container}>
            {renderizar()}
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
       // alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },

    textotitulo: {
        alignSelf:'center',
        fontSize:16,
        color: '#589b9b',
        marginBottom:8,
        
    }
    

})
