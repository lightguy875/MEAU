import React, {useEffect, useState} from 'react'
import {TouchableOpacity, SafeAreaView, Text, Image,StyleSheet, View , Dimensions} from 'react-native'
import { Card } from 'react-native-elements'
import { fonts } from 'react-native-elements/dist/config'


export default function Dadoanimal(props) {


    

    return (
        <SafeAreaView style={{marginLeft:8,marginRight:8,marginTop:8}}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.Card}>
                    <View style={[styles.CardHeader,{backgroundColor: props.tipo == 'meu_pet' ? '#cfe9e5' : '#fee29b'}]}>
                        <Text style={styles.textoCard}>{props.Nome_do_animal}</Text>
                    </View> 
                        <Image style={styles.imagemView} source={{uri: props.imagemurl}} />
                   <View style={styles.ViewTexto}>
                       {
                           props.tipo == 'meu_pet' ? <Text style={styles.textoCard}>{props.interessados.length > 1 ? `${props.interessados.length} Interessados`: props.interessados.length == 1 ? `${props.interessados.length} Interessado` : 'Nenhum Interessado'}</Text> :
                        <>
                        <Text style={styles.textoCard}>{props.Sexo}</Text>
                        <Text style={styles.textoCard}>{props.Idade}</Text> 
                        <Text style={styles.textoCard}>{props.Porte}</Text>   
                        </>
                       }
                   </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

{/* <Card>
                    <Card.Title>{props.Nome_do_animal}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={{uri: props.imagemurl}}/>
                </Card> */}

//{props.Nome_do_animal}
//source={{uri: props.imagemurl}}
const styles = StyleSheet.create({
    Card: {
        height:264,
        borderRadius:10,
        backgroundColor:'#FFF',
        elevation:20,
    
    },
    CardHeader:{
        flexDirection:'row',
        height:32,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor: '#cfe9e5',
    },

    textoCard:{
        marginLeft:16,
        fontSize: 16,
        color: '#434343'
    },
    imagemView:{
        height:183,

    },
    ViewTexto:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    TextoDado: {
        fontSize:12,
        color:'#434343'
    }

})