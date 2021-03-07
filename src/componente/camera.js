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

export default function camera({navigation}) {

    
      const [state , setState] = useState({
        image: null,
        images: null
      })
    

    const pickMultiple =() => {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            sortOrder: 'desc',
            includeExif: true,
            forceJpg: true,
          })
            .then((images) => {
              setState({
                image: null,
                images: images.map((i) => {
                  console.log('received image', i);
                  return {
                    uri: i.path,
                    width: i.width,
                    height: i.height,
                    mime: i.mime,
                  };
                }),
              });
            })
            .catch((e) => alert(e));
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
          {state.image ? renderAsset(this.state.image) : null}
          {state.images
            ? state.images.map((i) => (
                <View key={i.uri}>{renderAsset(i)}</View>
              ))
            : null}
        </ScrollView>

        <TouchableOpacity style={botao.botaoPrimario}
          onPress={pickMultiple.bind(this)}
        >
          <Text>Selecionar Imagem</Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={botao.botaoPrimario}
        onPress={() => navigation.navigate('Cadastroanimal')}
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

            