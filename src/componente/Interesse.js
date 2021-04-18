import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'


export default function Interesse(props) {

    let usuario = useSelector(state => state.user)

    let pet = useSelector(state => state.petsuser)
    pet = pet.pets.find(element => element.Nome_do_animal == props.nome_pet)

 

    function mudar_dono_pet() {
        Alert.alert('Adoção', 'Deseja confirmar a adoção ?', [
            {
                text: 'Sim',
                async onPress() {
                    var array = pet.interessados.map(interesse => {
                        if(interesse != props.interessado)
                        return interesse
                    })
                    array = array.filter((elemento) =>{
                     return elemento != undefined
                     })
                    await firestore().collection('Notifications').add({
                        interessado: props.interessado,
                        pet: props.pet,
                        dono: auth().currentUser.uid,
                        nome: usuario.user.nome_de_usuario,
                        nome_pet : props.nome_pet,
                        visto: false,
                        tipo: 'resposta',
                        resposta: 'aceitar',
                        createdAt: new Date().getTime()
                     }).then(async() => {
                        await firestore().collection('Animais').doc(props.pet).update({
                            dono: props.interessado,
                            interessados: array,
                        }).then(async() => {
                            await firestore().collection('Notifications').doc(props.id).delete()
                        }).then(() => {
                            Alert.alert('Sucesso', 'Você doou o seu animal')
                        })
                     })
                }
            }, {
                text: 'Não'
            }
        ])
    }

    function recusar_proposta() {
        Alert.alert('Recusar', 'Deseja recusar a proposta ?', [
            {
                text: 'Sim',
                async onPress() {
                    var array = pet.interessados.map(interesse => {
                        if(interesse != props.interessado)
                        return interesse
                    })
                    array = array.filter((elemento) =>{
                     return elemento != undefined
                     })
                     console.log(array)
                    await firestore().collection('Notifications').add({
                        interessado: props.interessado,
                        pet: props.pet,
                        dono: auth().currentUser.uid,
                        nome: usuario.user.nome_de_usuario,
                        nome_pet: props.nome_pet,
                        visto: false,
                        tipo: 'resposta',
                        resposta: 'recusar',
                        createdAt: new Date().getTime()
                    }).then(async () => {
                        await firestore().collection('Animais').doc(props.pet).update({
                            interessados: array
                        })
                    }).then(async () => {
                        await firestore().collection('Notifications').doc(props.id).delete()
                    }).then(() => {
                        Alert.alert('Sucesso', 'Você recusou o pedido de adoção')
                    })

                }
            }, {
                text: 'Não'
            }

        ])

    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.nome} quer adotar o animal {props.nome_pet}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 70,


            }}>
                <TouchableOpacity onPress={() => mudar_dono_pet()}>
                    <Icon name='check-circle-o' size={30} color='#090' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => recusar_proposta()}>
                    <Icon name='times-circle-o' size={30} color='#900' />
                </TouchableOpacity>
            </View>

        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        height: 80,
        paddingLeft: 15,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        padding: 10,
    },

    text: {
        fontSize: 13,

    }



})