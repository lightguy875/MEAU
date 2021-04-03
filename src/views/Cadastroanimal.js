import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Estilo from '../estilo/estilo'
import { BotaoPrimario, BotaoImagem, BotaoFacebook, BotaoGoogle } from '../componente/botao'
import Icon from 'react-native-vector-icons/Feather';
import estilo from '../estilo/estilo';
import cor from '../estilo/cor'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller} from 'react-hook-form'
import { Checkbox, RadioButton } from 'react-native-paper'
import { color } from 'react-native-reanimated';



export default function Cadastro_animal({ navigation, route }) {


  React.useEffect(() => {
    if (route.params) {
      setImage(route.params.elemento)
    }
  }, [route.params]);

  const validacao = yup.object().shape({
    Nome_do_animal: yup.string().required("Este campo é obrigatorio"),
    Espécie: yup.string().required("Este campo é obrigatorio"),
    Sexo: yup.string().required("Este campo é obrigatorio"),
    Porte: yup.string().required("Este campo é obrigatorio"),
    Idade : yup.string().required("Este campo é obrigatorio"),
  })

  const { control, handleSubmit, errors, reset, register } = useForm({
      resolver: yupResolver(validacao)
    });


  
  const [nome_animal, setnome] = useState('')
  const [doenca_animal, setdoenca] = useState('')
  const [sobre_animal, setsobreanimal] = useState('')
  const [image, setImage] = useState(undefined)
  const [isSelected, setSelected] = useState({

    Acompanhamento_pos_adocao: false,
    um_mes: false,
    tres_meses: false,
    seis_meses: false,
  })

  // Variáveis


  //funções
  const renderImage = (imagem) => {
    return (
      <TouchableOpacity onPress={() => navigation.push('Camera', { nave: 'Cadastroanimal', imagem: imagem })}>
        <Image
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
          source={{ uri: imagem }}
        />
      </TouchableOpacity>
    );
  }

  const renderbotao = () => {
    return <BotaoImagem onPress={() => navigation.push('Camera', { nave: 'Cadastroanimal' })} />
  }

  async function Cadastro_animal(dados) {
    if (auth().currentUser) {

      if(image)
      {


      var reference = storage().ref(image)
      await reference.putFile(image)

      await firestore().collection('Animais').add({
        Nome_do_animal: dados.Nome_do_animal,
        Especie: dados.Espécie,
        Sexo: dados.Sexo,
        Porte: dados.Porte,
        Idade: dados.Idade,
        Temperamento: {
          Brincalhao: dados.Brincalhão,
          Timido: dados.Tímido,
          Calmo: dados.Calmo,
          Guarda: dados.Guarda,
          Amoroso: dados.Amoroso,
          Preguiçoso: dados.Preguiçoso,
        },
        Saúde: {
          Vacinado: dados.Vacinado,
          Vermifugado: dados.Vermifugado,
          Castrado: dados.Castrado,
          Doente: dados.Doente,
        },
        Doenças: dados.Doenças,
        Termo_de_adoção: dados.Termo_de_adoção,
        Fotos_de_casa: dados.Foto_da_casa,
        Acompanhamento_pos_adocao: isSelected.Acompanhamento_pos_adocao,
        Visita_previa_ao_animal:dados.Visita_prévia_ao_animal,
        um_mes: isSelected.um_mes,
        tres_meses: isSelected.tres_meses,
        seis_meses: isSelected.seis_meses,
        sobre_o_animal: dados.sobre_animal,
        imagem: image,
        dono: auth().currentUser.uid
      }).then(() => {
        Alert.alert('Cadastro', 'Novo animal cadastrado')
      }).then(() => {
        setSelected(false)
        reset()
        setImage('')
      })
      } else {
        Alert.alert('Erro', 'Voce precisa adicionar a imagem do animal!')
      }
    }
    else {
      Alert.alert('Erro', 'Voce precisa estar cadastrado e logado!!')
    }
  }


  const onSubmit = data => setData(data);

  return (

    <ScrollView>

      <SafeAreaView style={Estilo.containeranimal}>


        <Text style={Estilo.titulo}>Nome do animal</Text>
                  
        <Controller
          render={({ onChange, value}) => (
        <TextInput
          // onBlur={onBlur}
          value={value}
          style={Estilo.input}
          placeholder="Nome do animal"
          onChangeText={value =>onChange(value)}
        />
        
        )}
        defaultValue=''
        control={control}
        name="Nome_do_animal"
        />
      {errors?.Nome_do_animal && <Text>{errors?.Nome_do_animal.message}</Text>}
        
        <Text style={Estilo.titulo}>Foto do animal </Text>

        {image ? renderImage(image) : renderbotao()}


        <Text style={Estilo.titulo}>Espécie</Text>
        <View style={Estilo.caixaAnimal}>

          
          <Controller
          render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={value =>
           onChange(value)} value={value}>
            <View style={Estilo.caixaAnimal}>
              <RadioButton value='Cachorro' color={cor.checkbox}/>
              <Text>Cachorro</Text>
              <RadioButton value='Gato' color={cor.checkbox} />
              <Text>Gato</Text>
            </View>
          </RadioButton.Group>
          )}
          defaultValue=''
          control={control}
          name="Espécie"
          />
        </View>
        {errors?.Espécie && <Text>{errors?.Espécie.message}</Text>}


        <Text style={Estilo.titulo}>Sexo</Text>
        <View style={Estilo.caixaAnimal}>
        <Controller
          render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={value => onChange(value)} value={value}>
            <View style={Estilo.caixaAnimal}>
              <RadioButton value='Macho' color={cor.checkbox} />
              <Text>Macho</Text>
              <RadioButton value='Fêmea' color={cor.checkbox}/>
              <Text>Fêmea</Text>
            </View>
          </RadioButton.Group>
     )}
     defaultValue=''
     control={control}
     name="Sexo"
     />
      {errors?.Sexo && <Text>{errors?.Sexo.message}</Text>}
        </View>
        <Text style={Estilo.titulo}>Porte</Text>
        <View style={Estilo.caixaAnimal}>

        <Controller
          render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={value =>
            onChange(value)} value={value}>
            <View style={Estilo.caixaAnimal}>
              <RadioButton value='Pequeno' color={cor.checkbox}/>
              <Text>Pequeno</Text>
              <RadioButton value='Médio' color={cor.checkbox}/>
              <Text>Médio</Text>
              <RadioButton value='Grande' color={cor.checkbox}/>
              <Text>Grande</Text>

            </View>
          </RadioButton.Group>
           )}
           defaultValue=''
           control={control}
           name="Porte"
           />
            {errors?.Porte && <Text>{errors?.Porte.message}</Text>}

        </View>
        <Text style={Estilo.titulo}>Idade</Text>
        <View style={Estilo.caixaAnimal}>
        <Controller
          render={({ onChange, value }) => (
          <RadioButton.Group onValueChange={value =>
            onChange(value)} value={value}>
            <View style={Estilo.caixaAnimal}>

              <RadioButton value='Filhote' color={cor.checkbox}/>
              <Text>Filhote</Text>
              <RadioButton value='Adulto' color={cor.checkbox} />
              <Text>Adulto</Text>
              <RadioButton value='Idoso' color={cor.checkbox} />
              <Text>Idoso</Text>

            </View>
          </RadioButton.Group>
           )}
           defaultValue=''
           control={control}
           name="Idade"
           />
        </View>
        {errors?.Idade && <Text>{errors?.Idade.message}</Text>}


        <Text style={Estilo.titulo}>Temperamento</Text>
        <View style={Estilo.caixaAnimal}>
        <Controller
          render={({ onChange, value}) => (
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() =>  onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Brincalhão"
          />
          <Text>Brincalhão</Text>
          <Controller
          render={({ onChange, value}) => (
          <Checkbox
           color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Tímido"
          />
          
          <Text>Tímido</Text>

          <Controller
          render={({ onChange, value}) => (
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Calmo"
          />
          <Text>Calmo</Text>
          </View>
          <View style={estilo.caixaAnimal}>
          <Controller
          render={({ onChange, value}) => (
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Guarda"
          />          
          <Text>Guarda</Text>

          <Controller
          render={({ onChange, value}) => (
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Amoroso"
          />
          <Text>Amoroso</Text>
          <Controller
          render={({ onChange, value}) => (
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Preguiçoso"
          />
          <Text>Preguiçoso</Text>
        </View>

        <Text style={Estilo.titulo}>Saúde</Text>
        <View style={Estilo.caixaAnimal}>
        <Controller
          render={({ onChange, value}) => (          
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Vacinado"
          />
          <Text>Vacinado</Text>
          <Controller
          render={({ onChange, value}) => (       
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Vermifugado"
          />
          <Text>Vermifugado</Text>
          </View>
          <View style={estilo.caixaAnimal}>
          <Controller
          render={({ onChange, value}) => (    
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Castrado"
          />
          <Text>Castrado</Text>
          <Controller
          render={({ onChange, value}) => (    
          <Checkbox         
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Doente"
          />
          <Text>Doente</Text>
        </View>
        <Controller
          render={({ onChange, value}) => (    
        <TextInput
          value={value}
          style={Estilo.input}
          placeholder="Doenças do animal"
          onChangeText={value => onChange(value)}
        />
        )}
        defaultValue=''
        control={control}
        name="Doenças"
        />
        <Text style={Estilo.titulo}>Exigências para Adoção</Text>
        <View style={{
          justifyContent: "center",
          flexDirection: 'row',
          alignItems:'center',
        }}>
          <Controller
          render={({ onChange, value}) => (    
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Termo_de_adoção"
          />
          <Text>Termo de adoção</Text>
          </View>
          <View style={{
          justifyContent: "center",
          flexDirection: 'row',
          alignItems:'center',
        }}>
          <Controller
          render={({ onChange, value}) => (    
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Foto_da_casa"
          />
          <Text>Foto da casa</Text>
          </View>  
          <View style={{
          justifyContent: "center",
          flexDirection: 'row',
          alignItems:'center',
        }}>
          <Controller
          render={({ onChange, value}) => (    
          <Checkbox
            color={cor.checkbox}
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(value = value ? false : true)}
          />
          )}
          defaultValue={false}
          control={control}
          name="Visita_prévia_ao_animal"
          />
          <Text>Visita prévia ao animal</Text>
          </View>
          <View style={{
          justifyContent: "center",
          flexDirection: 'row',
          alignItems:'center',
        }}>
          <Checkbox
            color={cor.checkbox}
            status={isSelected.Acompanhamento_pos_adocao  ? 'checked' : 'unchecked'}
            onPress={() => isSelected.Acompanhamento_pos_adocao == false ? setSelected({ ...isSelected, Acompanhamento_pos_adocao: !isSelected["Acompanhamento_pos_adocao"] }) : setSelected({ ...isSelected, Acompanhamento_pos_adocao: !isSelected["Acompanhamento_pos_adocao"], um_mes: false, tres_meses: false, seis_meses: false })}

          />
          <Text>Acompanhamento pós adoção</Text>
          </View>
        <View style={{
          justifyContent: "center",
          flexDirection: 'row',
          alignItems:'center',
          paddingLeft: 30,
        }}>
          <Checkbox
            disabled={!isSelected.Acompanhamento_pos_adocao}
            color={cor.checkbox}
            status={isSelected.um_mes ? 'checked' : 'unchecked'}
            onPress={() => isSelected.Acompanhamento_pos_adocao == true ? setSelected({ ...isSelected, um_mes: true, tres_meses: false, seis_meses: false }) : setSelected({ ...isSelected, um_mes: false })}

          />
          <Text>1 mês</Text>
        </View>
        <View style={{
          justifyContent: "center",
          flexDirection: 'row',
          alignItems:'center',
          paddingLeft: 30,
        }}>
          <Checkbox
            disabled={!isSelected.Acompanhamento_pos_adocao}
           
            color={cor.checkbox}
            status={isSelected.tres_meses ? 'checked' : 'unchecked'}
            onPress={() => isSelected.Acompanhamento_pos_adocao == true ? setSelected({ ...isSelected, um_mes: false, tres_meses: true, seis_meses: false }) : setSelected({ ...isSelected, tres_meses: false })}

          />
          <Text>3 meses</Text>
        </View>
        <View style={{
          justifyContent: "center",
          flexDirection: 'row',
          alignItems:'center',
          paddingLeft: 30,
        }}>
          <Checkbox
            disabled={!isSelected.Acompanhamento_pos_adocao}
            color={cor.checkbox}
            status={isSelected.seis_meses ? 'checked' : 'unchecked'}
            onPress={() => isSelected.Acompanhamento_pos_adocao == true ? setSelected({ ...isSelected, um_mes: false, tres_meses: false, seis_meses: true }) : setSelected({ ...isSelected, seis_meses: false })}
          />
          <Text>6 meses</Text>
        </View>
        <Controller
          render={({ onChange, value}) => (    
        <TextInput
            value={value}
            style={Estilo.input}
            placeholder="Compartilhe histórias do animal"
            onChangeText={value => onChange(value)}
        />
          )}
          defaultValue=''
          control={control}
          name="sobre_animal"
          />

        <View style={estilo.containerbotao}>
        <BotaoPrimario name='Cadastrar Animal'
          onPress={handleSubmit(Cadastro_animal)}
        />
        </View>


      </SafeAreaView>
    </ScrollView>


  );
}