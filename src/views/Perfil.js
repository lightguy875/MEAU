import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import { BotaoPrimario, BotaoImagem } from '../componente/botao'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { set } from 'react-native-reanimated';
import {useSelector ,useStore} from 'react-redux'



export default function Perfil({ navigation, route }) {


    let usuario = useSelector(state => state.user)

    function Renderizar() {
        if (usuario.user) {

            

            return (
                <ScrollView style={{backgroundColor:'#fafafa'}}>
                {/* <StatusBar backgroundColor='#88c9bf' barStyle="light-content"/>  */}

                    <SafeAreaView style={styles.container}>
                    <View style={styles.imagemview}>
                    <Image
                        style={styles.imagem}
                        source={{uri: usuario.user.imagemurl}}
                    />
                    </View>
                        <Text style={styles.TextoNome}>{usuario.user.name.split(' ').slice(0,2).join(' ')}</Text>
                        <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                        <Text style={styles.textodado}>{usuario.user.name}</Text>
                        <Text style={styles.textoTitulo}>IDADE</Text>
                        <Text style={styles.textodado}>{usuario.user.idade}</Text>
                        <Text style={styles.textoTitulo}>EMAIL</Text>
                        <Text style={styles.textodado}>{usuario.user.email}</Text>
                        <Text style={styles.textoTitulo}>LOCALIZAÇÃO</Text>
                        <Text style={styles.textodado}>{`${usuario.user.cidade} - ${usuario.user.Estado}`}</Text>
                        <Text style={styles.textoTitulo}>ENDEREÇO</Text>
                        <Text style={styles.textodado}>{usuario.user.endereço}</Text>
                        <Text style={styles.textoTitulo}>TELEFONE</Text>
                        <Text style={styles.textodado}>{usuario.user.telefone}</Text>
                        <Text style={styles.textoTitulo}>NOME DE USUÁRIO</Text>
                        <Text style={styles.textodado}>{usuario.user.nome_de_usuario}</Text>
                    </SafeAreaView>


                    
                </ScrollView>


            )
        } else {
            return (

                <>
                <Text style={Estilo.textoPerfil}> Você precisa estar logado para ver o perfil</Text>
                </>
            )


        }
    }

    return (
        <>

            {
            
            Renderizar()
            
            }

        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    imagemview: {
        height: 112,
        width: 112,
        borderRadius:112,
        resizeMode: 'contain',
        marginTop:16,
    },

    imagem: {
        width: 112, 
        height: 112, 
        borderRadius:112 
    },
    TextoNome: {
        marginTop: 12,
        color: '#434343',
        fontSize:16,
    },
    textoTitulo: {
        marginTop:36,
        fontSize:12,
        color:'#589b9b',
    },
    textodado:{
        marginTop:8,
        fontSize:14,
        color: '#757575',
    }
})