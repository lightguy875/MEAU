import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, ScrollView, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Estilo from '../estilo/estilo'
import Cor from '../estilo/cor'
import { BotaoPrimario, BotaoImagem } from '../componente/botao'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { set } from 'react-native-reanimated';
import storage from '@react-native-firebase/storage';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form'
import estilo from '../estilo/estilo';



export default function CadastroPessoal({ navigation, route }) {

  var uid

  React.useEffect(() => {
    if (route.params) {
      setImage(route.params.elemento)

    }
  }, [route.params]);



  const [image, setImage] = useState(undefined)


  const renderImage = (imagem) => {
    return (
      <TouchableOpacity style={estilo.BotaoImagem} onPress={() => navigation.push('Camera', { nave: 'CadastroPessoal', imagem: imagem })}>
        <Image
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
          source={{ uri: imagem }}

        />
      </TouchableOpacity>
    )
  }


  const renderbotao = () => {
    return <BotaoImagem onPress={() => navigation.push('Camera', { nave: 'CadastroPessoal' })} />
  }

  async function Cadastro(dados) {
    if (!auth().currentUser) {
      if (image) {

        await auth().createUserWithEmailAndPassword(dados.email, dados.senha).then(async () => {

          const ref = await storage().ref(image)
          await ref.putFile(image).then(async () => {
            await ref.getDownloadURL().then(async (url) => {
              await firestore().collection('Users').doc(auth().currentUser.uid).set({
                name: dados.nome_completo,
                idade: dados.idade,
                email: dados.email,
                Estado: dados.estado_moradia,
                cidade: dados.cidade,
                endereço: dados.endereco,
                telefone: dados.telefone,
                imagem: image,
                imagemurl: url,
                nome_de_usuario: dados.nome_de_usuario,
              })
            })
          }).then(() => {
            Alert.alert('Cadastro', 'Novo usuário cadastrado')
            reset()
            setImage(undefined)
          })})
        } else {
          Alert.alert('Erro', 'Voce precisa cadastrar uma imagem de perfil')
        }
      }
      else {
        Alert.alert('Erro', 'Voce precisa estar deslogado para cadastrar')
      }
    }
    

  const validacao = yup.object().shape({
    nome_completo: yup.string().required("Este campo é obrigatorio"),
    idade: yup.number().required("Este campo é obrigatorio"),
    email: yup.string().email("Formato de e-mail inválido").required("Este campo é obrigatorio"),
    estado_moradia: yup.string().required("Este campo é obrigatorio"),
    cidade: yup.string().required("Este campo é obrigatorio"),
    endereco: yup.string().required("Este campo é obrigatorio"),
    telefone: yup.number().required("Este campo é obrigatorio"),
    nome_de_usuario: yup.string().required("Este campo é obrigatorio"),
    senha: yup.string().min(3, 'Senha muito curta. Min: 1').required("Este campo é obrigatorio"),
    confirmacao_de_senha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não sao iguais').required("Este campo é obrigatorio")
  })

  const { control, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(validacao)
  })


  const [erro, setErro] = useState('')

  return (
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

        {errors?.nome_completo && <Text style={{ color: 'red' }}>{errors?.nome_completo.message}</Text>}


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
        {errors?.idade && <Text style={{ color: 'red' }}>{errors?.idade.message}</Text>}



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

        {errors?.email && <Text style={{ color: 'red' }}>{errors?.email.message}</Text>}




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
        {errors?.estado_moradia && <Text style={{ color: 'red' }}>{errors?.estado_moradia.message}</Text>}


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
        {errors?.cidade && <Text style={{ color: 'red' }}>{errors?.cidade.message}</Text>}


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
        {errors?.endereco && <Text style={{ color: 'red' }}>{errors?.endereco.message}</Text>}



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
        {errors?.telefone && <Text style={{ color: 'red' }}>{errors?.telefone.message}</Text>}


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
        {errors?.nome_de_usuario && <Text style={{ color: 'red' }}>{errors?.nome_de_usuario.message}</Text>}



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
        {errors?.senha && <Text style={{ color: 'red' }}>{errors?.senha.message}</Text>}




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
        {errors?.confirmacao_de_senha && <Text style={{ color: 'red' }}>{errors?.confirmacao_de_senha.message}</Text>}


        <Text style={Estilo.titulo}>FOTO DE PERFIL</Text>


        {image ? renderImage(image) : renderbotao()}
        <View style={estilo.containerbotao}>
          <BotaoPrimario name='FAZER CADASTRO'
            onPress={handleSubmit(Cadastro)}

          />
        </View>

      </View>


    </ScrollView>
  );
}