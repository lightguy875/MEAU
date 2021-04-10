import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, StyleSheet, ScrollView, View, FlatList, Alert } from 'react-native'
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import Estilo from '../estilo/estilo'
import estilo from '../estilo/estilo'
import cor from '../estilo/cor'
import { BotaoPrimario } from '../componente/botao'
export default function Perfilmeupet({ navigation, route }) {

    useEffect(() => {
        navigation.setOptions({
            title: route.params.item.Nome_do_animal,
        });
    }, [route.params]);


    const adotar_animal = async() => {

        if (route.params.item.dono != auth().currentUser.uid) {

        Alert.alert('Adotar', 'Deseja adotar o pet', [
            {
                text: 'Sim',
               async onPress(){

                    await firestore().collection('Animais').doc(route.params.item.id).update({
                        dono: auth().currentUser.uid
                    })
                .then(() => {
                        Alert.alert('Sucesso', 'Você adotou o animal')
                    })
                }
            },
            {
                text: 'Não'
            }
        ])

    } else {
        Alert.alert('Você já é o dono do animal')
    }
}

     const delete_animal = async () => {

        if (route.params.item.dono == auth().currentUser.uid) {

            Alert.alert('Excluir Animal', 'Deseja excluir o pet', [
                {
                    text: 'Sim',
                   async onPress(){
                        await storage().ref(route.params.item.imagem).delete().then(async () => {

                        await firestore().collection('Animais').doc(route.params.item.id).delete()
                    }).then(() => {
                            Alert.alert('Sucesso', 'O pet foi excluído')
                        })
                    }
                },
                {
                    text: 'Não'
                }
            ])
        }
        else {
            Alert.alert('Erro','Você não é o dono do animal')
        }


    }



    return (
        <ScrollView>
            <View style={styles.viewcontainer}>
                <Image source={{ uri: route.params.item.imagemurl }} style={{ width: 360, height: 300, resizeMode: 'contain' }} />
            </View>
            <View style={styles.viewtitulo}>
                <Text style={styles.textotitulo} > {route.params.item.Nome_do_animal}</Text>
            </View>
            <View style={styles.viewtitulo}>
                <Text style={styles.textotitulo}>Sexo </Text>
                <Text style={styles.textotitulo}>Porte</Text>
                <Text style={styles.textotitulo}>Idade</Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}>{route.params.item.Sexo} </Text>
                <Text style={styles.textoPrincipal}>{route.params.item.Porte}</Text>
                <Text style={styles.textoPrincipal}>{route.params.item.Idade}</Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textotitulo}> Castrado </Text>
                <Text style={styles.textotitulo}>Vermifugado</Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}> {route.params.item.Saúde.Castrado ? 'Sim' : 'Não'} </Text>
                <Text style={styles.textoPrincipal}>{route.params.item.Saúde.Vermifugado ? 'Sim' : 'Não'}</Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textotitulo}> Vacinado </Text>
                <Text style={styles.textotitulo}>Doenças</Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}> {route.params.item.Saúde.Vacinado ? 'Sim' : 'Não'} </Text>
                <Text style={styles.textoPrincipal}>{route.params.item.Saúde.Doente ? 'Sim' : 'Não'}</Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textotitulo}> Temperamento </Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}> {(route.params.item.Temperamento.Amoroso ? 'Amoroso, ' : '') + (route.params.item.Temperamento.Brincalhao ? 'Brincalhão, ' : '') + (route.params.item.Temperamento.Calmo ? 'Calmo, ' : '') + (route.params.item.Temperamento.Guarda ? 'Guarda, ' : '') + (route.params.item.Temperamento.Preguiçoso ? 'Preguiçoso, ' : '') + (route.params.item.Temperamento.Timido ? 'Tímido' : '')} </Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textotitulo}> Exigências do Doador </Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}> {(route.params.item.Termo_de_adoção ? 'Termo de adoçao ' : '') + (route.params.item.Fotos_de_casa ? 'Fotos de casa, ' : '') + (route.params.item.Visita_previa_ao_animal ? 'Visita Prévia ao animal , ' : '') + (route.params.item.Acompanhamento_pos_adocao ? 'Acompanhamento de ' + `${route.params.item.Tempo_de_acompanhamento}` : '')} </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'space-between'}}>
                {route.params.item.dono != auth().currentUser.uid ? <BotaoPrimario name="Pretendo Adotar" onPress={() => adotar_animal()}/> : (<>
                <BotaoPrimario name='Ver interessados'/>
                <BotaoPrimario name="Remover Pet" onPress={() => delete_animal()}/>
                </>)
                }

            </View>
        </ScrollView>

//
    )
}

const styles = StyleSheet.create({
    viewcontainer: {
        // alignItems:'flex-start',
        // justifyContent:"flex-start",
        marginLeft: 20,

    },
    viewtitulo: {
        marginLeft: 16,
        marginBottom: 8,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
        // alignItems:'flex-start'
    },
    viewitem: {
        marginLeft: 16,
        marginBottom: 16,
        flex: 1,
        flexDirection: 'row',

        flexWrap: 'wrap',
        // justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    textoPrincipal: {
        flex: 2,
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
        color: '#000',
    },

    textotitulo: {
        flex: 2,
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
        marginTop: 10,
        color: cor.titulo,
    }


})




