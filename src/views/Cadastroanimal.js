
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert  } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import {CheckBox} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'


export default function Cadastro_animal() {

  //State variables

  const [isSelected, setSelected] = useState({
      checkbox: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkbox17: false,
      checkbox18: false,
      checkbox19: false,
      checkbox20: false,
      checkbox21: false,
      checkbox22: false,
      checkbox23: false,
      checkbox24: false,
      checkbox25: false,
      checkbox26: false,
      checkbox27: false,
  })
  // Variáveis


  //funções

  const OpenPicker = () => {
    const options = {
      title: 'Cadastre uma foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },

    }
    ImagePicker.showImagePicker(options, (response) => {
      if(response.didCancel) {
        console.log('User cancelled image picker');
      } else if( response.error) {
        console.log('ImagePicker Error:' , response.error);
      } else {
        const source = {uri: response.uri};
      }
    })
  }
  return (
      <ScrollView>
    <View style={Estilo.container}>

        <Text>Cadastro de animal</Text>
        <Text>Nome do animal</Text>
        <TextInput 
            style={Estilo.input}
            placeholder="Nome do animal"
        />
        <Text>Fotos do animal</Text>

        <Button title="Imagens" style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress = {OpenPicker}>

        </Button>

        <Text>Espécie</Text>
        <CheckBox 
            title="Cachorro"
            //checkedIcon="check"
            checkedColor="green"
            checked={isSelected.checkbox1}
            onPress={() => setSelected({...isSelected, checkbox1: !isSelected["checkbox1"]})}
        />
          <CheckBox
            title="Gato"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox2}
            onPress={() => setSelected({...isSelected, checkbox2: !isSelected["checkbox2"]})}
            
        /> 
        

        <Text>Sexo</Text>
        <CheckBox
            title="Macho"
            //checkedIcon="check"
            checkedColor="green"
            checked={isSelected.checkbox3}
            onPress={() => setSelected({...isSelected, checkbox3: !isSelected["checkbox3"]})}
        /> 
          <CheckBox
            title="Fêma"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox4}
            onPress={() => setSelected({...isSelected, checkbox4: !isSelected["checkbox4"]})}
        /> 
        <Text>Porte</Text>
        <CheckBox
            title="Pequeno"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox5}
            onPress={() => setSelected({...isSelected, checkbox5: !isSelected["checkbox5"]})}
            
        /> 
          <CheckBox
            title="Médio"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox6}
            onPress={() => setSelected({...isSelected, checkbox6: !isSelected["checkbox6"]})}
            
        /> 
          <CheckBox
            title="Grande"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox7}
            onPress={() => setSelected({...isSelected, checkbox7: !isSelected["checkbox7"]})}
            
        /> 

        <Text>Idade</Text>
        <CheckBox
            title="Filhote"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox8}
            onPress={() => setSelected({...isSelected, checkbox8: !isSelected["checkbox8"]})}
            
        /> 
          <CheckBox
            title="Adulto"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox9}
            onPress={() => setSelected({...isSelected, checkbox9: !isSelected["checkbox9"]})}
            
        /> 
          <CheckBox
            title="Idoso"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox10}
            onPress={() => setSelected({...isSelected, checkbox10: !isSelected["checkbox10"]})}
            
        /> 

        <Text>Temperamento</Text>

          <CheckBox
            title="Brincalhão"
            //checkedIcon="check"
            checkedColor="green"
            checked={isSelected.checkbox11}
            onPress={() => setSelected({...isSelected, checkbox11: !isSelected["checkbox11"]})}
        /> 
          <CheckBox
            title="Tímido"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox12}
            onPress={() => setSelected({...isSelected, checkbox12: !isSelected["checkbox12"]})}
        /> 
          <CheckBox
            title="Calmo"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox13}
            onPress={() => setSelected({...isSelected, checkbox13: !isSelected["checkbox13"]})}
        />
          <CheckBox
            title="Guarda"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox14}
            onPress={() => setSelected({...isSelected, checkbox14: !isSelected["checkbox14"]})}
        /> 
          <CheckBox
            title="Amoroso"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox15}
            onPress={() => setSelected({...isSelected, checkbox15: !isSelected["checkbox15"]})}
        /> 
          <CheckBox
            title="Preguiçoso"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox16}
            onPress={() => setSelected({...isSelected, checkbox16: !isSelected["checkbox16"]})}
        /> 
        

        <Text>Saúde</Text>
        <CheckBox
            title="Vacinado"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox17}
            onPress={() => setSelected({...isSelected, checkbox17: !isSelected["checkbox17"]})}
        /> 
          <CheckBox
            title="Vermifugado"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox18}
            onPress={() => setSelected({...isSelected, checkbox18: !isSelected["checkbox18"]})}
        /> 
          <CheckBox
            title="Castrado"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox19}
            onPress={() => setSelected({...isSelected, checkbox19: !isSelected["checkbox19"]})}
        /> 
          <CheckBox
            title="Doente"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox20}
            onPress={() => setSelected({...isSelected, checkbox20: !isSelected["checkbox20"]})}
        /> 
        
        <TextInput
            style={Estilo.input}
            placeholder="Doenças do animal"
        />

        <Text>Exigências para Adoção</Text>
          <CheckBox
            title="Termo de adoção"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox21}
            onPress={() => setSelected({...isSelected, checkbox21: !isSelected["checkbox21"]})}
            
        /> 
          <CheckBox
            title="Fotos de casa"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox22}
            onPress={() => setSelected({...isSelected, checkbox22: !isSelected["checkbox22"]})}
            
        /> 
          <CheckBox
            title="Visita prévia ao animal"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox23}
            onPress={() => setSelected({...isSelected, checkbox23: !isSelected["checkbox23"]})}
            
        /> 
          <CheckBox
            title="Acompanhamento pós adoção"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox24}
            onPress={() => setSelected({...isSelected, checkbox24: !isSelected["checkbox24"]})}
            
        /> 

        <Text>Sobre o animal</Text>

                
        <TextInput
            style={Estilo.input}
            placeholder="Compartilhe histórias do animal"
        />

        <TouchableOpacity
            style={Estilo.botao}
            
        >
            <Text style={Estilo.botaoText}>Cadastrar animal</Text>
        </TouchableOpacity>
        


    </View>
    </ScrollView>
  );
}