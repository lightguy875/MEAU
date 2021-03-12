import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import {BotaoPrimario, BotaoImagem} from '../componente/botao'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { set } from 'react-native-reanimated';


export default function CadastroPessoal({navigation , route }) {

  const usersCollection = firestore().collection('Users');


  React.useEffect(() => {
    if (route.params) {
      setImage(route.params.dado)
    }
  }, [route.params]);



  const [estado, setImage] = useState({
    image: null,
    images: null
  })

  const[nome_completo, setnome_completo] = useState('')
  const[idade, setidade] = useState('')
  const[email,setemail] = useState('')
  const[estado_moradia, setestado] = useState('')
  const[cidade, setcidade] = useState('')
  const[endereço, setendereço] = useState('')
  const[telefone, settelefone] = useState('')
  const[nome_de_usuario, setnome_de_usuario] = useState('')
  const[senha, setsenha] = useState('')
  const[confirmação_de_senha,setconfirmação_de_senha] = useState('')


  const renderImage = (imagem) => {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={imagem}
      />
    )
  }

  const fotopessoa = (estado) => {

    if(estado.image) {
      return <ScrollView horizontal={true}>
          {estado.image ? renderImage(estado.image) : null}
        </ScrollView>
    }
    else if(!estado.image)
    {
    return  <BotaoImagem  onPress={ () => navigation.push('Camerapessoa')}/>  
    }
    
  }

  const Cadastro = () => {

    if(senha === confirmação_de_senha)
    {
      firestore().collection('Users').add({
        name: nome_completo,
        idade: idade,
        email: email,
        Estado : estado_moradia,
        cidade: cidade,
        endereço: endereço,
        telefone: telefone,
        imagem: estado.image
      }).then(() => {
        Alert.alert('Cadastro', 'Novo usuário cadastrado')
      }).then(() => {
        setnome_completo('')
        setidade('')
        setemail('')
        setestado('')
        setcidade('')
        setendereço('')
        settelefone('')
        setnome_de_usuario('')
        setsenha('')
        setconfirmação_de_senha('')
        setImage('')
      })
    }

  }




    return(
        <ScrollView>
            <StatusBar
            backgroundColor={Cor.topo}
            
            />

            <View style={Estilo.container}>

            <Text style={Estilo.text_inf_cadastroPessoal}>
                As informações preenchidas serão divulgadas apenas para a pessoa com a qual você realizar o processo de adoção, após a formalização do processo.
            </Text>

            <Text style={Estilo.titulo}>INFORMAÇÕES PESSOAIS</Text>

            <TextInput 
                value={nome_completo}
                style={Estilo.input}
                placeholder="Nome completo"
                onChangeText={nome_completo => setnome_completo(nome_completo)}
            />

            <TextInput 
                value={idade}
                style={Estilo.input}
                placeholder="Idade"
                keyboardType='numeric'
                onChangeText={idade => setidade(idade)}

            />

            <TextInput 
                value={email}
                style={Estilo.input}
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={email => setemail(email)}
            />

            <TextInput 
                value={estado_moradia}
                style={Estilo.input}
                placeholder="Estado"
                onChangeText={estado_moradia => setestado(estado_moradia)}
            />

            <TextInput 
                value={cidade}
                style={Estilo.input}
                placeholder="Cidade"
                onChangeText={cidade => setcidade(cidade)}
            />

            <TextInput 
                value={endereço}
                style={Estilo.input}
                placeholder="Endereço"
                onChangeText={endereço => setendereço(endereço) }
            />

            <TextInput 
                value={telefone}
                style={Estilo.input}
                placeholder="Telefone"
                keyboardType="phone-pad"
                onChangeText={telefone => settelefone(telefone)}
            />

            <Text style={Estilo.titulo}>INFORMAÇÕES DE PERFIL</Text>

            <TextInput 
                value={nome_de_usuario}
                style={Estilo.input}
                placeholder="Nome de usuário"
                onChangeText={nome_de_usuario => setnome_de_usuario(nome_de_usuario)}
            />

            <TextInput
                value={senha}
                style={Estilo.input}
                secureTextEntry={true}
                placeholder="Senha"
                onChangeText={senha => setsenha(senha)}
            />

            <TextInput
                value={confirmação_de_senha}
                style={Estilo.input}
                secureTextEntry={true}
                placeholder="Confirmação de senha"
                onChangeText={confirmação_de_senha => setconfirmação_de_senha(confirmação_de_senha)}
            />

            <Text style={Estilo.titulo}>FOTO DE PERFIL</Text>
            
            
            {fotopessoa(estado)}
                
            <BotaoPrimario name='FAZER CADASTRO'
            onPress={() => Cadastro()}
            />

            </View>
            

        </ScrollView>
    );
}