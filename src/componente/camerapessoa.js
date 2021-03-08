
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
import ImagePicker from 'react-native-image-crop-picker'
import botao from '../estilo/botao.style'
import estilo from '../estilo/estilo'

export default function camera({navigation , route}) {



      const [state , setState] = useState({
        image: null,
        images: null
      })
    

      const pickSingle = (cropit, circular = false, mediaType) => {
        ImagePicker.openPicker({
          width: 500,
          height: 500,
          cropping: cropit,
          cropperCircleOverlay: circular,
          sortOrder: 'none',
          compressImageMaxWidth: 1000,
          compressImageMaxHeight: 1000,
          compressImageQuality: 1,
          compressVideoPreset: 'MediumQuality',
          includeExif: true,
          cropperStatusBarColor: 'white',
          cropperToolbarColor: 'white',
          cropperActiveWidgetColor: 'white',
          cropperToolbarWidgetColor: '#3498DB',
        })
          .then((image) => {
            console.log('received image', image);
            setState({
              image: {
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
              },
              images: null,
            });
          })
          .catch((e) => {
            console.log(e);
            Alert.alert(e.message ? e.message : e);
          });
      }
    
        const renderImage = (image) => {
            return (
              <Image
                style={{ width: 300, height: 300, resizeMode: 'contain' }}
                source={image}
              />
            );
          }
        
          const renderAsset = (image) => {
            if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
              return renderVideo(image);
            }
        
            return renderImage(image);
          }

        return (
          <SafeAreaView style={estilo.container}>
          <ScrollView>
          {state.image ? renderAsset(state.image) : null}
          {state.images
            ? state.images.map((i) => (
                <View key={i.uri}>{renderAsset(i)}</View>
              ))
            : null}
        </ScrollView>

        <TouchableOpacity style={botao.botaoPrimario}
          onPress={() => pickSingle(false)}
        >
          <Text>Selecionar Imagem</Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={botao.botaoPrimario}
        onPress={ () => navigation.navigate( "CadastroPessoal" , {
          dado: state
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

            