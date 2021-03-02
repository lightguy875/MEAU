/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {BotaoPrimario, BotaoImagem, BotaoFacebook, BotaoGoogle} from '../componente/botao'
import Estilo from '../estilo/estilo'

const largura = Dimensions.get("screen").width;
const TelaInicial: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>

              <Text style={styles.sectionDescription}>
                Conheça os <Text style={styles.highlight}>animais</Text> que precisam de ajuda.
              </Text>
              <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Cães e gatos</Text>
              <Text style={styles.sectionDescription}>
                Que necessitam de carinho e um lar.
              </Text>
            </View>
                                                   
            </View>          
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Você pode:</Text>







              <BotaoPrimario name='ADOTAR'/>
              <Text style={styles.sectionTitle}>Ou</Text>
              

              <BotaoPrimario name='CADASTRAR'/>
              <Text style={styles.sectionTitle}>Para adoção.</Text>

              <Image 
                source={require('.././img/3gatos.jpeg')}
                style={styles.imagemBasica}
              />

              <Image 
                source={require('.././img/3caes.jpeg')}
                style={styles.imagemBasica}
              />
              
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
    imagemBasica: {
        width:largura,
        height:largura,
        marginTop: 8,
  },
    botao:{
      width: 300,
      height: 42,
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default TelaInicial;