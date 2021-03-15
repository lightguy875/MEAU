import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import {BotaoPrimario, BotaoImagem} from '../componente/botao'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { set } from 'react-native-reanimated';
import storage from '@react-native-firebase/storage';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form'



export default function CadastroPessoal({navigation , route }) {



  React.useEffect(() => {
    if (route.params) {
      setImage(route.params.dado)
    }
  }, [route.params]);



  const [estado, setImage] = useState({
    image: null,
    images: null
  })


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
    return  <BotaoImagem  onPress={ () => navigation.push('Camerapessoa', {nave:'CadastroPessoal'})}/>  
    }
    
  }

  async function  Cadastro(dados) {
  
    if(!auth().currentUser)
    {
      auth().createUserWithEmailAndPassword(dados.email, dados.senha)
 
      const reference = storage().ref(estado.image.uri)
      await reference.putFile(estado.image.uri)
       await firestore().collection('Users').doc(auth().currentUser.uid).set({
        name: dados.nome_completo,
        idade: dados.idade,
        email: dados.email,
        Estado : dados.estado_moradia,
        cidade: dados.cidade,
        endereco: dados.endereço,
        telefone: dados.telefone,
        imagem: estado.image,
        nome_de_usuario: dados.nome_de_usuario


      }).then(() => {
        Alert.alert('Cadastro', 'Novo usuário cadastrado')

      }).then(() => {
        {reset()}
        setImage({
          image: null,
          images: null
        })
      })
  } else {
    Alert.alert('Erro', 'Voce precisa estar deslogado para cadastrar')
    auth()
    .signOut()
    .then(() => {
      Alert.alert('Logout', 'Usuário deslogado')
    })
  }

  }

  const validacao = yup.object().shape({
    nome_completo: yup.string().required("Este campo é obrigatorio"),
    idade: yup.number().required("Este campo é obrigatorio"),
    email: yup.string().required("Este campo é obrigatorio"),
    estado_moradia: yup.string().required("Este campo é obrigatorio"),
    cidade: yup.string().required("Este campo é obrigatorio"),
    endereco: yup.string().required("Este campo é obrigatorio"),
    telefone: yup.number().required("Este campo é obrigatorio"),
    nome_de_usuario: yup.string().required("Este campo é obrigatorio"),
    senha: yup.string().min(3, 'Senha muito curta. Min: 1').required("A senha é obrigatória"),
    confirmacao_de_senha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não sao iguais')
  })

  const {control, errors, handleSubmit, reset} = useForm({
    resolver: yupResolver(validacao)
  })


  const [erro, setErro] = useState('')

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


            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  onBlur={onBlur}
                  style={Estilo.input}
                  placeholder="Nome completo"
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              
              name="nome_completo"
              defaultValue=""
            />

      {errors.senha && alert(errors.senha.message)}  
      {errors.confirmacao_de_senha && alert(errors.confirmacao_de_senha.message)}  

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  onBlur={onBlur}
                  style={Estilo.input}
                  placeholder="Idade"
                  keyboardType='numeric'
                  onChangeText={value => onChange(value)}
                  value={value}
            
                />
              )}
              name="idade"
              defaultValue=""
            />

            

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                onBlur={onBlur}
                style={Estilo.input}
                onChangeText={value => onChange(value)}
                placeholder="E-mail"
                value={value}
            
                />
              )}
              name="email"
       
              defaultValue=""
            />



            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                onBlur={onBlur}
                style={Estilo.input}
                onChangeText={value => onChange(value)}
                placeholder="Estado"
                value={value}
            
                />
              )}
              name="estado_moradia"
       
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                onBlur={onBlur}
                style={Estilo.input}
                onChangeText={value => onChange(value)}
                placeholder="Cidade"
                value={value}
            
                />
              )}
              name="cidade"
       
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                onBlur={onBlur}
                style={Estilo.input}
                onChangeText={value => onChange(value)}
                placeholder="Endereço"
                value={value}
            
                />
              )}
              name="endereco"
       
              defaultValue=""
            />


            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                onBlur={onBlur}
                style={Estilo.input}
                onChangeText={value => onChange(value)}
                placeholder="Telefone"
                keyboardType="phone-pad"
                value={value}
            
                />
              )}
              name="telefone"
       
              defaultValue=""
            />

      
            <Text style={Estilo.titulo}>INFORMAÇÕES DE PERFIL</Text>


            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                onBlur={onBlur}
                style={Estilo.input}
                onChangeText={value => onChange(value)}
                placeholder="Nome de usuário"
                value={value}
            
                />
              )}
              name="nome_de_usuario"
       
              defaultValue=""
            />

            

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
              <TextInput
                onBlur={onBlur}
                style={Estilo.input}
                onChangeText={value => onChange(value)}
                placeholder="Senha"
                value={value}
                secureTextEntry={true}
                
              />
              )}
              
              name="senha"
              defaultValue=""
              
           /> 

           

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  onBlur={onBlur}
                  style={Estilo.input}
                  onChangeText={value => onChange(value)}
                  placeholder="Confirmação de senha"
                  value={value}
                  secureTextEntry={true}
                />
              )}
              name="confirmacao_de_senha"
              defaultValue=""
           /> 

            <Text style={Estilo.titulo}>FOTO DE PERFIL</Text>
            
            
            {fotopessoa(estado)}
                
            <BotaoPrimario name='FAZER CADASTRO'
            onPress={handleSubmit(Cadastro)}
            />

            </View>
            

        </ScrollView>
    );
}