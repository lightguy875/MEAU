import React, {useEffect, useState} from 'react'
import { Image, SafeAreaView, Text , StyleSheet,ScrollView, View, FlatList} from 'react-native'
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'
import Estilo from '../estilo/estilo'
import estilo from '../estilo/estilo'
import cor from '../estilo/cor'
import { BotaoPrimario } from '../componente/botao'
export default function Perfilmeupet({navigation,route}) {

    const [imagemurl,setimagemurl] = useState(undefined)

    useEffect(() => {
        navigation.setOptions({
          title: route.params.item.Nome_do_animal,
        });
      }, [route.params.item, navigation]);


      useEffect(() => {
        carregar_imagem()
    },[auth().currentUser],[]);

      async function carregar_imagem() {
          if(auth().currentUser)
          {
            setimagemurl(await storage().ref(route.params.item.imagem).getDownloadURL())
          }
          else {
              setimagemurl(undefined)
          }
    }

    

    return (
        <ScrollView>
        <View style={styles.viewcontainer}>
            <Image source={{uri: imagemurl}} style={{ width: 360, height: 300, resizeMode: 'contain' }}/>
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
            <Text style={styles.textoPrincipal}> {(route.params.item.Termo_de_adoção ? 'Termo de adoçao ' : '') + (route.params.item.Fotos_de_casa ? 'Fotos de casa, ' : '') + (route.params.item.Visita_previa_ao_animal ? 'Visita Prévia ao animal , ' : '') + (route.params.item.Acompanhamento_pos_adocao ? 'Acompanhamento de ' + (route.params.item.um_mes ? 'um mês' : route.params.item.tres_meses ? 'três meses' : route.params.item.seis_meses ? 'seis meses' : '') : '')} </Text>
            </View>
            <View style={{alignItems:'center'}}>
            <BotaoPrimario name="Remover Pet"/>
            </View>
            </ScrollView>


    )
}

const styles = StyleSheet.create({
    viewcontainer: {
        // alignItems:'flex-start',
        // justifyContent:"flex-start",
        marginLeft: 20,
    
    },
    viewtitulo: {
        marginLeft:16,
        marginBottom:8,
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'space-around'
        // alignItems:'flex-start'
    },
    viewitem: {
        marginLeft:16,
        marginBottom:16,
        flex:1,
        flexDirection: 'row',

        flexWrap: 'wrap',
        // justifyContent: 'flex-start',
        alignItems:'flex-start'

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




