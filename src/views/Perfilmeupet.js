import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, StyleSheet, ScrollView, View, FlatList, Alert , Dimensions} from 'react-native'
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import Estilo from '../estilo/estilo'
import estilo from '../estilo/estilo'
import cor from '../estilo/cor'
import { BotaoPrimario } from '../componente/botao'
import {useDispatch, useSelector} from 'react-redux'



export default function Perfilmeupet({ navigation, route }) {

    let usuario = useSelector(state => state.user)
    const [dono,setdono] = useState(false)
    const [avaliador,setavaliador] = useState()

    useEffect(() => {
        setdono(route.params.item.dono == auth().currentUser.uid)
        setavaliador(route.params.item.interessados.includes(auth().currentUser.uid))
        navigation.setOptions({
            title: route.params.item.Nome_do_animal,
            headerStyle: {
                backgroundColor: route.params.item.dono == auth().currentUser.uid ? '#cfe9e5' : '#fee29b'
              } 
        });

    }, [route.params]);


    const desmarcar_interesse = async() => {

        if(route.params.item.dono != auth().currentUser.uid) {

            Alert.alert('Desmarcar interesse', 'Deseja tirar seu interesse pelo pet?', [
                {

                    text: 'Sim',
                   async onPress(){
                    var array = route.params.item.interessados
                    var index = array.indexOf(auth().currentUser.uid);
                    if( index > -1) {
                        array.splice(index, 1)
                        await firestore().collection('Animais').doc(route.params.item.id).update({
                            interessados: array
                        }).then(() => {
                            Alert.alert('Sucesso', 'Você desmarcou o seu interesse')
                            setavaliador(false)
                        })
                       
                    }
                    let docid = [];
            
                    await firestore().collection('Notifications').where('pet','==',route.params.item.id).where('interessado','==',auth().currentUser.uid).get().then(collection => {
                        collection.forEach(doc => {
                            docid = doc.id
                        })
                    }).then(async() => {
                        await firestore().collection('Notifications').doc(docid).delete()
                    })

                }
                },
                {
                    text: 'Não',
                }
            ])

        } else {
            Alert.alert('Você já é o dono do animal')
        }

    }
    


    const marcar_interesse = async() => {

        if (route.params.item.dono != auth().currentUser.uid) {

        Alert.alert('Interesse', 'Se interessa em adotar o pet?', [
            {
                text: 'Sim',
               async onPress(){
                    route.params.item.interessados.push(auth().currentUser.uid)
                    await firestore().collection('Animais').doc(route.params.item.id).update({
                        interessados: route.params.item.interessados
                    }).then(() => {
                         Alert.alert('Sucesso', 'Você marcou o seu interesse')
                         setavaliador(true)
                 })

                 await firestore().collection('Notifications').add({
                    interessado: auth().currentUser.uid,
                    pet: route.params.item.id,
                    dono: route.params.item.dono,
                    nome: usuario.user.nome_de_usuario,
                    nome_pet : route.params.item.Nome_do_animal,
                    visto: false,
                    tipo: 'interesse',
                    createdAt: new Date().getTime()
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
        }else {
            Alert.alert('Erro','Você não é o dono do animal')
        }



    }

    if(usuario.user) {
// #f7a800
// #589b9b
    return (
        
        <ScrollView>
            <View style={styles.viewcontainer}>
                <Image source={{ uri: route.params.item.imagemurl }} style={{ width: 360, height: 300, resizeMode: 'contain' }} />
            
            <View style={styles.viewtitulo}>
                <Text style={styles.textoPet} > {route.params.item.Nome_do_animal}</Text>
            </View>
            <View style={styles.viewtitulo}>
                <Text style={[styles.textotitulo, {color: dono ? '#589b9b' : '#f7a800'}]}>Sexo </Text>
                <Text style={[styles.textotitulo, {color: dono ? '#589b9b' : '#f7a800'}]}>Porte</Text>
                <Text style={[styles.textotitulo, {color: dono ? '#589b9b' : '#f7a800'}]}>Idade</Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}>{route.params.item.Sexo} </Text>
                <Text style={styles.textoPrincipal}>{route.params.item.Porte}</Text>
                <Text style={styles.textoPrincipal}>{route.params.item.Idade}</Text>
            </View>
            <View style={styles.viewtitulo}>
                <Text style={[styles.textotitulo, {color: dono ? '#589b9b' : '#f7a800'}]}> Castrado </Text>
                <Text style={[styles.textotitulo, {color: dono ? '#589b9b' : '#f7a800'}]}>Vermifugado</Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}> {route.params.item.Saúde.Castrado ? 'Sim' : 'Não'} </Text>
                <Text style={styles.textoPrincipal}>{route.params.item.Saúde.Vermifugado ? 'Sim' : 'Não'}</Text>
            </View>
            <View style={styles.viewtitulo}>
                <Text style={[styles.textotitulo, {color: dono ? '#589b9b' : '#f7a800'}]}> Vacinado </Text>
                <Text style={[styles.textotitulo, {color: dono ? '#589b9b' : '#f7a800'}]}>Doenças</Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}> {route.params.item.Saúde.Vacinado ? 'Sim' : 'Não'} </Text>
                <Text style={styles.textoPrincipal}>{route.params.item.Saúde.Doente ? 'Sim' : 'Não'}</Text>
            </View>
            <View style={styles.viewtitulo}>
                <Text style={[styles.textotitulo, {color: dono ? '#589b9b' : '#f7a800'}]}> Temperamento </Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}> {(route.params.item.Temperamento.Amoroso ? 'Amoroso, ' : '') + (route.params.item.Temperamento.Brincalhao ? 'Brincalhão, ' : '') + (route.params.item.Temperamento.Calmo ? 'Calmo, ' : '') + (route.params.item.Temperamento.Guarda ? 'Guarda, ' : '') + (route.params.item.Temperamento.Preguiçoso ? 'Preguiçoso, ' : '') + (route.params.item.Temperamento.Timido ? 'Tímido' : '')} </Text>
            </View>
            <View style={styles.viewtitulo}>
                <Text style={[styles.textotitulo, {color: dono ? '#589b9b' : '#f7a800'}]}> Exigências do Doador </Text>
            </View>
            <View style={styles.viewitem}>
                <Text style={styles.textoPrincipal}> {(route.params.item.Termo_de_adoção ? 'Termo de adoçao ' : '') + (route.params.item.Fotos_de_casa ? 'Fotos de casa, ' : '') + (route.params.item.Visita_previa_ao_animal ? 'Visita Prévia ao animal , ' : '') + (route.params.item.Acompanhamento_pos_adocao ? 'Acompanhamento de ' + `${route.params.item.Tempo_de_acompanhamento}` : '')} </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'space-between'}}>
                {route.params.item.dono != auth().currentUser.uid ? avaliador ?  <BotaoPrimario name="Remover pretensão"  style={{backgroundColor:'#fdcf58',elevation:0}} onPress={() => desmarcar_interesse()}/> : <BotaoPrimario name="Pretendo Adotar" style={{backgroundColor:'#fdcf58', elevation:0}} onPress={() => marcar_interesse()}/> : (<View style={styles.Viewbotoes}>
                <BotaoPrimario name='Ver interessados' style={{width: 148,height:40, marginRight:8, elevation:0}}onPress={() => navigation.navigate('Interessados', {item: route.params.item})}/>
                <BotaoPrimario name="Remover Pet" style={{width:148,height:40, marginLeft:8, elevation:0}} onPress={() => delete_animal()}/>
                </View>)
                }

            </View>
            </View>
        </ScrollView>

//
    )
            }
            else{
                return (
                    <>
                    </>
                )
            }
}

const styles = StyleSheet.create({
    viewcontainer: {
        // alignItems:'flex-start',
        // justifyContent:"flex-start",
        // marginLeft: 20,
        alignItems:'center',
        

    },
    viewtitulo: {
        marginLeft: 16,
        marginBottom: 8,
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
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
        color: '#757575',
    },

    textotitulo: {
        flex: 2,
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
        marginTop: 10,
        color:  cor.titulo,
    },
    textoPet: {
        flex: 1,
        fontSize: 16,
        color:'#434343',
        marginTop: 16,
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
        // justifyContent: 'flex-start',
        // alignSelf: 'flex-start',

    },
    Viewbotoes:{
        flexDirection:'row',
        justifyContent:'center',

    }


})




