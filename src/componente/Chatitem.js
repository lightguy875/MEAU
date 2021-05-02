import React, {useState} from 'react'
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
// import Moment from 'moment';
// import { extendMoment } from 'moment-range';
export default props => {

    // const moment = extendMoment(Moment);


    let usuario = useSelector(state => state.user)


    if (usuario.user) {
        let dado = props.users.filter(elemento => {
            return elemento.name != usuario.user.name && elemento.nome_de_usuario != usuario.user.nome_de_usuario
        })
        dado = dado[0]
        var d = new Date(props.momento)
        var k = new Date()
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        var daysk = Date.UTC(k.getFullYear(), k.getMonth(), k.getDate());
        var daysd = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
        // var daysd = Math.round(d/8.64e7)
        // var daysk = Math.round(k/8.64e7)
        // var diff = daysk - daysd
        var diff = Math.floor((daysk - daysd) / _MS_PER_DAY);
    //     var range = moment.range(d,k)
    //     // console.log(`${k.getDate()}/${k.getMonth()}/${k.getFullYear()}`)
    //    var diffdias = range.diff('days')


       
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
                        <Text style={styles.textoTempo}>{diff < 1 ? `${d.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' }).split(':').slice(0, 2).join(':')}` : diff > 1  ? `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}` : `Ontem`}</Text>
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