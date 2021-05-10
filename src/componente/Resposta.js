import React, {useEffect, useState} from 'react'
import { SafeAreaView, Text , View , TouchableOpacity, StyleSheet, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import firestore from '@react-native-firebase/firestore'
export default function Resposta(props) {



    async function deletar_mensagem() {
        Alert.alert('Deletar', 'Deseja deletar essa mensagem ?', [
            {
                text: 'Sim',
                async onPress(){
                    await firestore().collection('Notifications').doc(props.id).delete().then(()=> {
                        Alert.alert('Sucesso', 'A mensagem foi deletada')
                    })
                }

            }, {
                text: 'Não'

            }

        ])

    }


    if(props.resposta == 'recusar') {

        return(

            <View style={styles.containerrecusou}>
                <Text style={styles.text}>{props.nome} recusou seu pedido para o pet {props.nome_pet}</Text>
                <View style={{
                flex: 3,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'flex-end',
                width: 70,
                
            }}>
                <TouchableOpacity onPress={() => deletar_mensagem()}>
                <Icon name='times-circle-o' size={30} color='#000'/>
                </TouchableOpacity>
                </View>
    
            </View>
        )

    } else {
        return (
            <View style={styles.containeraceitou}>
                <Text style={styles.text}>{props.nome} aceitou seu pedido para o pet {props.nome_pet}</Text>
                <View style={{
                flex: 3,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'flex-end',
                width: 70,
                
            }}>
                <TouchableOpacity onPress={() => deletar_mensagem()}>
                <Icon name='times-circle-o' size={30} color='#000'/>
                </TouchableOpacity>
                </View>
    
            </View>

        )

    }


   


}


const styles = StyleSheet.create({
    containeraceitou: {
        textAlign:'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
        marginTop:10,
        height:80,
        paddingLeft:15,
        backgroundColor: '#CEF7A9',
        borderRadius:10,
        padding:10,
        elevation:10,
        marginLeft:5,
        marginRight:5,
        marginBottom:8,
    },

    containerrecusou: {
        textAlign:'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
        marginTop:10,
        height:80,
        paddingLeft:15,
        backgroundColor: '#FCC1C0',
        borderRadius:10,
        padding:10,
        elevation:10,
        marginLeft:5,
        marginRight:5,
        marginBottom:8
    },

    text: {
        flex: 13,
        fontSize:13,

    }

//  #F95252 #85F952



})