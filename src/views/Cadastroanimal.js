
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert ,SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import {CheckBox} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import {BotaoPrimario, BotaoImagem, BotaoFacebook, BotaoGoogle} from '../componente/botao'
import Icon from 'react-native-vector-icons/Feather';
import estilo from '../estilo/estilo';

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

    <SafeAreaView style={estilo.container}>

        <Text style={Estilo.titulo}>Nome do animal</Text>
        <TextInput 
            style={Estilo.input}
            placeholder="Nome do animal"
        />
        <Text style={Estilo.titulo}>Fotos do animal</Text>

        <BotaoImagem onClick = {OpenPicker}/>

        <Text style={Estilo.titulo}>Espécie</Text>
        <View style={Estilo.caixaAnimal}>
        <CheckBox 


            textStyle={{ fontSize:14}}
            title="Cachorro"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checkedColor="green"
            checked={isSelected.checkbox1}
            onPress={() => setSelected({...isSelected, checkbox1: true , checkbox2: false})}
        />
          <CheckBox
            title="Gato"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            //uncheckedIcon="red"
            checked={isSelected.checkbox2}
            onPress={() => setSelected({...isSelected, checkbox2: true, checkbox1: false})}
            
        /> 
        
        </View>
      
        <Text style={Estilo.titulo}>Sexo</Text>
        <View style={Estilo.caixaAnimal}>
        <CheckBox
            title="Macho"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.checkbox3}
            onPress={() => setSelected({...isSelected, checkbox3: true, checkbox4 : false})}
        /> 
          <CheckBox
            title="Fêmea"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.checkbox4}
            onPress={() => setSelected({...isSelected, checkbox4: true, checkbox3: false})}
        /> 
        </View>
        <Text style={Estilo.titulo}>Porte</Text>
        <View style={Estilo.caixaAnimal}>
        <CheckBox
            title="Pequeno"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.checkbox5}
            onPress={() => setSelected({...isSelected, checkbox5: true, checkbox6: false, checkbox7: false})}
            
        /> 
          <CheckBox
            title="Médio"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.checkbox6}
            onPress={() => setSelected({...isSelected, checkbox5: false, checkbox6: true, checkbox7: false})}
            
        /> 
          <CheckBox
            title="Grande"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.checkbox7}
            onPress={() => setSelected({...isSelected, checkbox5: false, checkbox6: false, checkbox7: true})}
            
        /> 
        </View>
        <Text style={Estilo.titulo}>Idade</Text>
        <View style={Estilo.caixaAnimal}>
        <CheckBox
            title="Filhote"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.checkbox8}
            onPress={() => setSelected({...isSelected, checkbox8: true, checkbox9: false, checkbox10: false})}
            
        /> 
          <CheckBox
            title="Adulto"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.checkbox9}
            onPress={() => setSelected({...isSelected, checkbox8: false, checkbox9: true, checkbox10: false})}
            
        /> 
          <CheckBox
            title="Idoso"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.checkbox10}
            onPress={() => setSelected({...isSelected, checkbox8: false, checkbox9: false, checkbox10: true})}
            
        /> 
        </View>

        <Text style={Estilo.titulo}>Temperamento</Text>
        <View style={Estilo.caixaAnimal}>
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
        </View>

        <Text style={Estilo.titulo}>Saúde</Text>
        <View style={Estilo.caixaAnimal}> 
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
        </View>
        <TextInput
            style={Estilo.input}
            placeholder="Doenças do animal"
        />

        <Text style={Estilo.titulo}>Exigências para Adoção</Text>
        <View style={Estilo.caixaAnimal}>
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
            onPress={() => isSelected.checkbox24 == false ? setSelected({...isSelected, checkbox24: !isSelected["checkbox24"]}) : setSelected({...isSelected, checkbox24: !isSelected["checkbox24"] , checkbox25: false, checkbox26: false, checkbox27: false})}
            
        /> 
        </View>
        <View style={{justifyContent:"center",
      flexDirection:'row'}}>
        <CheckBox
            
            title="1 mês"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox25}
            onPress={() => isSelected.checkbox24 == true ? setSelected({...isSelected, checkbox25: true , checkbox26: false , checkbox27: false}) : setSelected({...isSelected, checkbox25: false})}
            
        /> 
      </View>
      <View style={{justifyContent:"center",
      flexDirection:'row'}}>
        <CheckBox
            
            title="3 meses"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox26}
            onPress={() => isSelected.checkbox24 == true ? setSelected({...isSelected, checkbox25: false , checkbox26: true , checkbox27: false}) : setSelected({...isSelected, checkbox25: false})}
            
        /> 
        </View>
        <View style={{justifyContent:"center",
      flexDirection:'row'}}>
                <CheckBox
            title="6 meses"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.checkbox27}
            onPress={() => isSelected.checkbox24 == true ? setSelected({...isSelected, checkbox25: false , checkbox26: false , checkbox27: true}) : setSelected({...isSelected, checkbox25: false})}
            
        /> 
        </View>
        <Text style={Estilo.titulo}>Sobre o animal</Text>
        <SafeAreaView style={Estilo.container}>
        <TextInput
            style={Estilo.input}
            placeholder="Compartilhe histórias do animal"
        />

      <BotaoPrimario name='Cadastrar Animal'/>
      </SafeAreaView>


        
      </SafeAreaView>
    </ScrollView>

    
  );
}