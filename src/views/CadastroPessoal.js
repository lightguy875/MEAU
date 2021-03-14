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
    return  <BotaoImagem  onPress={ () => navigation.push('Camerapessoa', {nave:'Camerapessoa'})}/>  
    }
    
  }

  async function  Cadastro() {
    if(!auth().currentUser)
    {


    if(senha === confirmação_de_senha)
    {

      
      auth().createUserWithEmailAndPassword(email, senha)
 
      const reference = storage().ref(estado.image.uri)
      await reference.putFile(estado.image.uri)
       await firestore().collection('Users').doc(auth().currentUser.uid).set({
        name: nome_completo,
        idade: idade,
        email: email,
        Estado : estado_moradia,
        cidade: cidade,
        endereço: endereço,
        telefone: telefone,
        imagem: estado.image,

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
    else {
      Alert.alert('Senha', 'Senha e confirmar senha diferem-se')

    }
  } else {
    Alert.alert('Erro', 'Voce precisa estar deslogado para cadastrar')
  }

  }

  const validacao = yup.object().shape({
    nome_completo: yup.string().required(),
    idade: yup.number().required(),
    email: yup.string().email().required(),
    estado_moradia: yup.string().required(),
    cidade: yup.string().required(),
    endereco: yup.string().required(),
    telefone: yup.string().required(),
    nome_de_usuario: yup.string().required(),
    senha: yup.string().min(6, 'Senha muito curta. Min: 6').required("A senha é obrigatória"),
    confirmacao_de_senha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não sao iguais').required()
  })

  const {control, errors, handleSubmit} = useForm({
    resolver: yupResolver(validacao)
  })




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
              name="estado"
       
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
            onPress={handleSubmit(async () => Cadastro())}
            />

            </View>
            

        </ScrollView>
    );
}