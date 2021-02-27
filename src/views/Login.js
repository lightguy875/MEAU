import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>

      
        <TextInput 
            style={styles.input}
            placeholder="Nome de usuário"
        />

        <TextInput
            style={styles.input}
            placeholder="Senha"
            defaultValue=''
        />

        


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      borderBottomColor: 'black',
      width: 300,
      borderBottomWidth: 1,
      
  }


});
