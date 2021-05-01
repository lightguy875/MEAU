import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
Image,
Text,
View,
StyleSheet,
Dimensions,
} from 'react-native'
import {useSelector} from 'react-redux'
import cor from '../estilo/cor'

export default props => {



let usuario = useSelector(state => state.user)



if(usuario.user)
{
    let dado = props.users.filter(elemento => {
        return elemento.name != usuario.user.name && elemento.nome_de_usuario != usuario.user.nome_de_usuario
    })
    dado = dado[0]
    var d = new Date(0)
    d.setUTCMilliseconds(props.momento)
    d = d.toLocaleTimeString('pt-br', {hour: '2-digit', minute:'2-digit'})
    return (
    <TouchableOpacity onPress={props.onPress} onLongPress={props.onLongPress}>
    <View style={styles.container}>

        <View style={styles.imagemview}>

        <Image source={{uri: dado.imagemurl}} style={styles.imagem} />
        </View>
        <View style={styles.containerTempo}>
        <View style={styles.textcontainer}>
        <Text style={styles.textoPrincipal}>{`${dado.name.split(' ').slice(0,2).join(' ')}` + ` | ` + `${dado.Nome_do_animal}`}</Text>
        <Text>{ `${props.ultima_mensagem.substring(0,30)}` + ((props.ultima_mensagem.length > 30) ? ('...') : ('')) }</Text>
        </View> 
        <Text style={styles.textoTempo}>{`${d.split(':').slice(0,2).join(':')}`}</Text>
        </View>
    </View>
    </TouchableOpacity>
    );
} else {
    return (
        <>
        </>
    )
}


}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height: 100,
        borderBottomColor: '#e6e7e8',
        borderBottomWidth: 2,
        marginLeft:16,
        marginRight:16,
    },
    textcontainer:  {
        flexDirection:'column',
        textAlign: 'center',
        flex:13,
    },
    imagem: {
        borderRadius: 100,
        flex: 1,
    },
    imagemview: {
        height: 68,
        width: 68,
        borderRadius: 100,
        resizeMode: 'contain',
        marginLeft: 16,
        marginRight: 8,
        marginVertical: 16,

    },
    textoPrincipal:{
        fontSize: 14,
        marginTop:20,
        color: cor.titulo,
        
    },

    textoTempo:{
        marginTop:20,
        marginRight:16,
        flex:3,
    },

    containerTempo: {
        flexDirection:'row',
        justifyContent:'space-between',
        flex: 1,
    },

    linha: {
        marginTop:16,
        backgroundColor:'#e6e7e8',
        height:2,
    },

    
})