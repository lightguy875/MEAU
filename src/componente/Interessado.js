import React, {useEffect, useState} from 'react'
import { TouchableOpacity , Image, Text , SafeAreaView , StyleSheet, View} from 'react-native'
import auth from '@react-native-firebase/auth'
import { ListItem , Avatar} from 'react-native-elements'


export default props => {


            return (

                // <ListItem bottomDivider >
                // <Avatar rounded source={{uri: props.imagemurl}}/>
                // <ListItem.Content>
                // <ListItem.Title>{props.name}</ListItem.Title>
                // <ListItem.Subtitle>Idade:{props.idade}</ListItem.Subtitle>
    
                // </ListItem.Content>
                // </ListItem>
                <SafeAreaView style={styles.containermax}>
                <TouchableOpacity onPress={props.onPress}>
                <View style={styles.container}>
                <View style={styles.imagemview}>
                    <Image style={{flex: 1, borderRadius: 100}} source={{uri: props.imagemurl} } />
                </View>
                <Text style={styles.Texto}>{props.name.split(' ').slice(0,2).join(' ')}</Text>
                <Text style={styles.Texto}>{props.idade} anos</Text>
                </View>
                </TouchableOpacity>
                </SafeAreaView>
            )
        }

const styles = StyleSheet.create({

    containermax: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft:60,
        marginTop: 24,
    },
    Texto: {
        fontSize: 14,
    },
    imagem: {
        flex: 1, 
        borderRadius: 100
    },
    imagemview: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'contain'
    },
   container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})