// import React, { useState, useEffect } from 'react';
// import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image, SafeAreaView } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import Estilo from '../estilo/estilo'
// import Cor from '../estilo/cor'
// import { BotaoPrimario, BotaoImagem } from '../componente/botao'
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth'
// import { set } from 'react-native-reanimated';
// import storage from '@react-native-firebase/storage';



// export default function Animal({navigation, route}) {



//     var size
//     var Image_Http_URL
//     var imagemv
//     const [initializing, setInitializing] = useState(true)
//     const [user, setUser] = useState()
//     const [cachorros,setcachorros] = useState()

//     function onAuthStateChanged(user) {
//         setUser(user);
//         if (initializing) setInitializing(false);
//     }


//     useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         const valor = carregar_animal()
//         return subscriber; // unsubscribe on unmount

//     }, [auth().currentUser]);




//     async function carregar_animal() {

//         if (user) {


//             await firestore().collection('Users').doc(auth().currentUser.uid).collection('Animais').get()
//             .then(querySnapshot => {

//                 size = querySnapshot.size

//             })
           


//     }
// }





// }