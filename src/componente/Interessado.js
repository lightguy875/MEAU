import React, {useEffect, useState} from 'react'
import { TouchableOpacity , Image, Text , SafeAreaView , StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import { ListItem , Avatar} from 'react-native-elements'


export default props => {


            return (

                <ListItem bottomDivider >
                <Avatar rounded source={{uri: props.imagemurl}}/>
                <ListItem.Content>
                <ListItem.Title>{props.name}</ListItem.Title>
                <ListItem.Subtitle>Idade:{props.idade}</ListItem.Subtitle>
    
                </ListItem.Content>
                </ListItem>
                // <SafeAreaView style={styles.container}>
                // <TouchableOpacity onPress={props.onPress}>
                // <Image style={styles.imagem} source={{uri: props.imagemurl}} />
                // <Text style={styles.Texto}>{props.name}</Text>
                // <Text style={styles.Texto}>{props.idade}</Text>
                // </TouchableOpacity>
                // </SafeAreaView>
            )
        }

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Texto: {
        fontSize: 20,
    },
    imagem: {
        flex: 1, 
        borderRadius: 100
    }
})