
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert ,SafeAreaView, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import {CheckBox} from 'react-native-elements'
import {BotaoPrimario, BotaoImagem, BotaoFacebook, BotaoGoogle} from '../componente/botao'
import Icon from 'react-native-vector-icons/Feather';
import estilo from '../estilo/estilo';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form'



export default function Cadastro_animal({navigation , route}) {
  

  React.useEffect(() => {
    if (route.params) {
      setImage(route.params.elemento)
    }
  }, [route.params]);

  
  const { control, handleSubmit, errors, reset} = useForm();

  const [nome_animal, setnome] = useState('')
  const [doenca_animal, setdoenca] = useState('')
  const [sobre_animal, setsobreanimal] = useState('')

  const [estado, setImage] = useState({
    image: null,
    images: null
  })

  const [isSelected, setSelected] = useState({

      cachorro: false,
      gato: false,
      macho: false,
      femea: false,
      pequeno: false,
      medio: false,
      grande: false,
      filhote: false,
      adulto: false,
      idoso: false,
      brincalhao: false,
      timido: false,
      calmo: false,
      guarda: false,
      amoroso: false,
      preguiçoso: false,
      vacinado: false,
      vermifugado: false,
      castrado: false,
      doente: false,
      Termo_de_adocao: false,
      Fotos_de_casa: false,
      Visita_previa_ao_animal: false,
      Acompanhamento_pos_adocao: false,
      um_mes: false,
      tres_meses: false,
      seis_meses: false,
  })

  // Variáveis

  //funções
  const renderImage = (imagem) => {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={imagem}
      />
    );
  }

   const fotosanimal = (estado) => {

    if(estado.images) {
      return <ScrollView horizontal={true}>
          {estado.image ? renderImage(this.estado.image) : null}
          {estado.images
            ? estado.images.map((i) => (
                <View key={i.uri}>{renderImage(i)}</View>
              ))
            : null}
        </ScrollView>
    }
    else if(!estado.images)
    {
    return  <BotaoImagem  onPress={ () => navigation.push('Camera', {nave:'Cadastroanimal'})}/>  
    }
    
  }

  async function Cadastro_animal() {

    for(const i in estado.images) {
      var reference = storage().ref(estado.images[i].uri)
      await reference.putFile(estado.images[i].uri)
    }
    if(auth().currentUser)
    {
    await firestore().collection('Users').doc(auth().currentUser.uid).collection('Animais').add({
      Nome_do_animal: nome_animal,
      Especie: isSelected.cachorro == true ? 'cachorro' : 'gato',
      Sexo: isSelected.macho == true ? 'macho' : 'fêmea',
      Porte: isSelected.pequeno == true ? 'pequeno' : isSelected.medio == true ? 'medio' : isSelected.grande == true ? 'grade' : '',
      Idade: isSelected.filhote == true ? 'filhote' : isSelected.adulto == true ? 'adulto' : isSelected.idoso == true ? 'idoso' : '',
      Temperamento: {
        Brincalhao: isSelected.brincalhao,
        Timido: isSelected.timido,
        Calmo: isSelected.calmo,
        Guarda: isSelected.guarda,
        Amoroso: isSelected.amoroso,
        Preguiçoso: isSelected.preguiçoso
      },
      Saúde: {
        Vacinado: isSelected.vacinado,
        Vermifugado: isSelected.vermifugado,
        Castrado: isSelected.castrado,
        Doente: isSelected.doente
      },
      Doenças: doenca_animal,
      Termo_de_adoção: isSelected.Termo_de_adocao,
      Fotos_de_casa: isSelected.Fotos_de_casa,
      Acompanhamento_pos_adocao: isSelected.Acompanhamento_pos_adocao,
      um_mes: isSelected.um_mes,
      tres_meses: isSelected.tres_meses,
      seis_meses: isSelected.seis_meses,
      sobre_o_animal: sobre_animal,
      imagens: estado.images,
    }).then(() => {
      Alert.alert('Cadastro', 'Novo animal cadastrado')
    }).then(() => {
      setSelected(false)
      setnome('')
      setdoenca('')
      setsobreanimal('')
      setImage('')
    })
  }
  else {
    Alert.alert('Erro', 'Voce precisa estar cadastrado e logado!!')
  }
  }


  return (

      <ScrollView>

    <SafeAreaView style={Estilo.container}>
                
        <Text style={Estilo.titulo}>Nome do animal</Text>
        <TextInput 
            value={nome_animal}
            style={Estilo.input}
            placeholder="Nome do animal"
            onChangeText={nome_animal => setnome(nome_animal)}
        />
        <Text style={Estilo.titulo}>Fotos do animal </Text>

         {fotosanimal(estado)}

       
        <Text style={Estilo.titulo}>Espécie</Text>
        <View style={Estilo.caixaAnimal}>
        <CheckBox 


            textStyle={{ fontSize:14}}
            title="Cachorro"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checkedColor="green"
            checked={isSelected.cachorro}
            onPress={() => setSelected({...isSelected, cachorro: true , gato: false})}
        />


          <Controller
               control={control}
              render={({ onChange, onBlur, value }) => (
                <CheckBox 


                textStyle={{ fontSize:14}}
                title="Cachorro"
                checkedIcon={<Icon name="check-circle" color="green"/>}
                uncheckedIcon={<Icon name="circle" color="#000"/>}
                checkedColor="green"
                checked={isSelected.cachorro}
                onPress={() => setSelected({...isSelected, cachorro: true , gato: false})}
            />
        )}
        name="senha"
        
        defaultValue=""
        
      /> 




          <CheckBox
            title="Gato"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            //uncheckedIcon="red"
            checked={isSelected.gato}
            onPress={() => setSelected({...isSelected, gato: true, cachorro: false})}
            
        /> 
        
        </View>
      
        <Text style={Estilo.titulo}>Sexo</Text>
        <View style={Estilo.caixaAnimal}>
        <CheckBox
            title="Macho"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.macho}
            onPress={() => setSelected({...isSelected, macho: true, femea : false})}
        /> 
          <CheckBox
            title="Fêmea"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.femea}
            onPress={() => setSelected({...isSelected, femea: true, macho: false})}
        /> 
        </View>
        <Text style={Estilo.titulo}>Porte</Text>
        <View style={Estilo.caixaAnimal}>
        <CheckBox
            title="Pequeno"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.pequeno}
            onPress={() => setSelected({...isSelected, pequeno: true, medio: false, grande: false})}
            
        /> 
          <CheckBox
            title="Médio"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.medio}
            onPress={() => setSelected({...isSelected, pequeno: false, medio: true, grande: false})}
            
        /> 
          <CheckBox
            title="Grande"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.grande}
            onPress={() => setSelected({...isSelected, pequeno: false, medio: false, grande: true})}
            
        /> 
        </View>
        <Text style={Estilo.titulo}>Idade</Text>
        <View style={Estilo.caixaAnimal}>
        <CheckBox
            title="Filhote"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.filhote}
            onPress={() => setSelected({...isSelected, filhote: true, adulto: false, idoso: false})}
            
        /> 
          <CheckBox
            title="Adulto"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.adulto}
            onPress={() => setSelected({...isSelected, filhote: false, adulto: true, idoso: false})}
            
        /> 
          <CheckBox
            title="Idoso"
            checkedIcon={<Icon name="check-circle" color="green"/>}
            uncheckedIcon={<Icon name="circle" color="#000"/>}
            checked={isSelected.idoso}
            onPress={() => setSelected({...isSelected, filhote: false, adulto: false, idoso: true})}
            
        /> 
        </View>

        <Text style={Estilo.titulo}>Temperamento</Text>
        <View style={Estilo.caixaAnimal}>
          <CheckBox
            title="Brincalhão"
            //checkedIcon="check"
            checkedColor="green"
            checked={isSelected.brincalhao}
            onPress={() => setSelected({...isSelected, brincalhao: !isSelected["brincalhao"]})}
        /> 
          <CheckBox
            title="Tímido"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.timido}
            onPress={() => setSelected({...isSelected, timido: !isSelected["timido"]})}
        /> 
          <CheckBox
            title="Calmo"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.calmo}
            onPress={() => setSelected({...isSelected, calmo: !isSelected["calmo"]})}
        />
          <CheckBox
            title="Guarda"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.guarda}
            onPress={() => setSelected({...isSelected, guarda: !isSelected["guarda"]})}
        /> 
          <CheckBox
            title="Amoroso"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.amoroso}
            onPress={() => setSelected({...isSelected, amoroso: !isSelected["amoroso"]})}
        /> 
          <CheckBox
            title="Preguiçoso"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.preguiçoso}
            onPress={() => setSelected({...isSelected, preguiçoso: !isSelected["preguiçoso"]})}
        /> 
        </View>

        <Text style={Estilo.titulo}>Saúde</Text>
        <View style={Estilo.caixaAnimal}> 
        <CheckBox
            title="Vacinado"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.vacinado}
            onPress={() => setSelected({...isSelected, vacinado: !isSelected["vacinado"]})}
        /> 
          <CheckBox
            title="Vermifugado"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.vermifugado}
            onPress={() => setSelected({...isSelected, vermifugado: !isSelected["vermifugado"]})}
        /> 
          <CheckBox
            title="Castrado"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.castrado}
            onPress={() => setSelected({...isSelected, castrado: !isSelected["castrado"]})}
        /> 
          <CheckBox
            title="Doente"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.doente}
            onPress={() => setSelected({...isSelected, doente: !isSelected["doente"]})}
        /> 
        </View>
        <TextInput
            value={doenca_animal}
            style={Estilo.input}
            placeholder="Doenças do animal"
            onChangeText={doenca_animal => setdoenca(doenca_animal)}
        />

        <Text style={Estilo.titulo}>Exigências para Adoção</Text>
        <View style={Estilo.caixaAnimal}>
          <CheckBox
            title="Termo de adoção"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.Termo_de_adocao}
            onPress={() => setSelected({...isSelected, Termo_de_adocao: !isSelected["Termo_de_adocao"]})}
            
        /> 
          <CheckBox
            title="Fotos de casa"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.Fotos_de_casa}
            onPress={() => setSelected({...isSelected, Fotos_de_casa: !isSelected["Fotos_de_casa"]})}
            
        /> 
          <CheckBox
            title="Visita prévia ao animal"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.Visita_previa_ao_animal}
            onPress={() => setSelected({...isSelected, Visita_previa_ao_animal: !isSelected["Visita_previa_ao_animal"]})}
            
        /> 
          <CheckBox
            title="Acompanhamento pós adoção"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.Acompanhamento_pos_adocao}
            onPress={() => isSelected.Acompanhamento_pos_adocao == false ? setSelected({...isSelected, Acompanhamento_pos_adocao: !isSelected["Acompanhamento_pos_adocao"]}) : setSelected({...isSelected, Acompanhamento_pos_adocao: !isSelected["Acompanhamento_pos_adocao"] , um_mes: false, tres_meses: false, seis_meses: false})}
            
        /> 
        </View>
        <View style={{justifyContent:"center",
      flexDirection:'row'}}>
        <CheckBox
            
            title="1 mês"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.um_mes}
            onPress={() => isSelected.Acompanhamento_pos_adocao == true ? setSelected({...isSelected, um_mes: true , tres_meses: false , seis_meses: false}) : setSelected({...isSelected, um_mes: false})}
            
        /> 
      </View>
      <View style={{justifyContent:"center",
      flexDirection:'row'}}>
        <CheckBox
            
            title="3 meses"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.tres_meses}
            onPress={() => isSelected.Acompanhamento_pos_adocao == true ? setSelected({...isSelected, um_mes: false , tres_meses: true , seis_meses: false}) : setSelected({...isSelected, tres_meses: false})}
            
        /> 
        </View>
        <View style={{justifyContent:"center",
      flexDirection:'row'}}>
                <CheckBox
            title="6 meses"
            //checkedIcon="check"
            checkedColor="green"
            //uncheckedIcon="red"
            checked={isSelected.seis_meses}
            onPress={() => isSelected.Acompanhamento_pos_adocao == true ? setSelected({...isSelected, um_mes: false , tres_meses: false , seis_meses: true}) : setSelected({...isSelected, seis_meses: false})}
            
        /> 
        </View>
        <Text style={Estilo.titulo}>Sobre o animal</Text>
        <TextInput
            value={sobre_animal}
            style={Estilo.input}
            placeholder="Compartilhe histórias do animal"
            onChangeText={sobre_animal => setsobreanimal(sobre_animal)}
        />

      <BotaoPrimario name='Cadastrar Animal'
      onPress={() => Cadastro_animal()}
      />


        
      </SafeAreaView>
    </ScrollView>

    
  );
}