import React, {Component , useState}  from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimension,
    Platform,
    ScrollView,
    Alert,
    Dimensions,
    SafeAreaView
} from 'react-native'
import * as ImagePicker from 'react-native-image-picker';
import botao from '../estilo/botao.style'
import estilo from '../estilo/estilo'

export default function camera({navigation , route}) {



      const [image , setImage] = useState(undefined)

      const options = {
        title: 'Load Photo',
        customButtons: [
          { name: 'button_id_1', title: 'CustomButton 1' },
          { name: 'button_id_2', title: 'CustomButton 2' }
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

      function showCamera() {
        ImagePicker.launchCamera(options , (response) => {
          if (response.error) {
            console.log('LaunchCamera Error: ', response.error);
          }
          else {
            setImage(response.uri);
          }
        });
      };

      function showCameraRoll() {
        ImagePicker.launchImageLibrary(options, (response) => {
          if (response.error) {
            console.log('LaunchImageLibrary Error: ', response.error);
          }
          else {
            setImage(response.uri);
          }
        });
      };


        const renderImage = (image) => {
            return (
              <Image
                style={{ width: 300, height: 300, resizeMode: 'contain' }}
                source={{uri:image}}
              />
            );
          }
        
    
        return (
          <SafeAreaView style={estilo.container}>
          <ScrollView>
          {image ? renderImage(image) : null}
        </ScrollView>
        <TouchableOpacity style={botao.botaoPrimario}
          onPress={() => showCamera()}
        >
          <Text>Tirar foto com a camera</Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={botao.botaoPrimario}
          onPress={() => showCameraRoll()}
        >
          <Text>Selecionar Imagem</Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={botao.botaoPrimario}
        onPress={() => navigation.navigate(route.params.nave , {
          elemento: image
        })

      }
        >
          <Text> Salvar </Text>

        </TouchableOpacity>

        </SafeAreaView>

        
        )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer:{
        width:'90%',
        height: Dimensions.get('window').width /2,
        backgroundColor: '#EEE',
        marginTop: 10

    },
    Image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width /2,
        resizeMode: 'center'
    },

    button: {
            marginTop:30,
            padding: 10,
            backgroundColor: '#4286f4'
    },

    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },

    input: {
        marginTop: 20,
        width: '90%'
    }
    


})

            