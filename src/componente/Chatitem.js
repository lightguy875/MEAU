import React from 'react'
import {
Image,
Text,
View,
StyleSheet

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

    return (
    
    <View style={styles.container}>

        <Image source={{uri: dado.imagemurl}} style={styles.imagem} />
        <View style={styles.textcontainer}>
        <Text style={styles.textoPrincipal}>{`${dado.name.split(' ').slice(0,2).join(' ')}` + ` | ` + `${dado.Nome_do_animal}`}</Text>
        <Text>Segundo Texto</Text>
        </View>
    </View>
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
    },
    textcontainer:  {
        flexDirection:'column',
        textAlign: 'center',
    },
    imagem: {
        borderRadius: 200,
        height: 84,
        width: 84,
        resizeMode: 'contain',
        marginLeft: 16,
        marginRight: 8,
        marginVertical: 16,
    },
    textoPrincipal:{
        fontSize: 14,
        marginTop:20,
        color: cor.titulo
    },

    
})