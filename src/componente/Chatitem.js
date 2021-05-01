import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
    Image,
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native'
import { useSelector } from 'react-redux'
import cor from '../estilo/cor'

export default props => {



    let usuario = useSelector(state => state.user)



    if (usuario.user) {
        let dado = props.users.filter(elemento => {
            return elemento.name != usuario.user.name && elemento.nome_de_usuario != usuario.user.nome_de_usuario
        })
        dado = dado[0]
        var d = new Date(0)
        var k = new Date()
        d.setMilliseconds(props.momento)
        // console.log(`${k.getDate()}/${k.getMonth()}/${k.getFullYear()}`)
        var n = k.getTime() - props.momento

        var days = Math.ceil(n / (1000 * 60 * 60 * 24))
        return (
            <TouchableOpacity onPress={props.onPress} onLongPress={props.onLongPress}>
                <View style={styles.container}>

                    <View style={styles.imagemview}>

                        <Image source={{ uri: dado.imagemurl }} style={styles.imagem} />
                    </View>
                    <View style={styles.containerTempo}>
                        <View style={styles.textcontainer}>
                            <Text style={styles.textoPrincipal}>{`${dado.name.split(' ').slice(0, 2).join(' ')}` + ` | ` + `${dado.Nome_do_animal}`}</Text>
                            <Text>{`${props.ultima_mensagem.substring(0, 30)}` + ((props.ultima_mensagem.length > 30) ? ('...') : (''))}</Text>
                        </View>
                        <View style={{justifyContent:'flex-end'}}>
                        <Text style={styles.textoTempo}>{days <= 1 ? `${d.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' }).split(':').slice(0, 2).join(':')}` : days >= 2 ? `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}` : `Ontem`}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.linha}>

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
        flexDirection: 'row',
        height: 100,
    },
    textcontainer: {
        flexDirection: 'column',
        textAlign: 'center',
        flex: 13,
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
    textoPrincipal: {
        fontSize: 14,
        marginTop: 20,
        color: cor.titulo,

    },

    textoTempo: {
        marginTop: 20,
        marginRight: 16,
        flex: 5,
    },

    containerTempo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    linha: {
        marginLeft: 16,
        marginRight: 16,
        height: 2,
        marginTop: 16,
        backgroundColor: '#e6e7e8',
    },


})