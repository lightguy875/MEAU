import React, {useEffect, useState} from 'react'
import { SafeAreaView, Text , View , TouchableOpacity} from 'react-native'


export default function Interesse(props) {


    return(
        <View>
            <Text>{props.nome} quer adotar o animal {props.nome_pet}</Text>
        </View>
    )


}
