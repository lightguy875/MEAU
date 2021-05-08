
import React from 'react';
import Login from '../views/Login'
import ErroLogin from '../views/ErroLogin'
import CadastroPessoal from '../views/CadastroPessoal'
import Cadastroanimal from '../views/Cadastroanimal'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Camera from '../componente/camera'
import Perfil from '../views/Perfil'
import Meus_Pets from '../views/Meus_Pets'
import Todos_Pets from '../views/Todos_Pets'
import Perfilmeupet from '../views/Perfilmeupet'
import Interessados from '../views/Interessados'
import Notificacoes from '../views/Notificacoes'
import Chat from '../views/Chat'
import Conversa from '../views/Conversa'
const Stack = createStackNavigator(); // Criar uma constante para cada Stack

function AbrirMenu({ navigation }) { // Implementar essa funcao para economizar linhas de codigo em headerLeft
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => navigation.openDrawer()}

    >
      <Icon name="menu" color="#000" style={{ fontSize: 30 }} resizeMode="contain" />
    </TouchableOpacity>
  );

}

export function LoginStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{
        title: 'Login',
        headerStyle: {
          backgroundColor: '#cfe9e5'
        },

        headerLeft: () => AbrirMenu({ navigation }),
      }} /> 
{/* 
      <Stack.Screen name="ErroLogin" component={ErroLogin} options={{
        headerStyle: {
          backgroundColor: '#88c9bf'
        },
      }} /> */}

    </Stack.Navigator>
  );
}

export function NotificacoesStack({navigation}) {
  return (
  <Stack.Navigator initialRouteName="Notificacoes">
        <Stack.Screen name="Notificacoes" component={Notificacoes} options={{
        title: 'Notificações',
        headerStyle: {
          backgroundColor: '#88c9bf'
        },
        headerLeft: () => AbrirMenu({ navigation })
      }} />

      </Stack.Navigator>
  )
}


export function CadastroPessoalStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="CadastroPessoal">
      <Stack.Screen name="CadastroPessoal" component={CadastroPessoal} options={{
        title: 'Cadastro Pessoal',
        headerStyle: {
          backgroundColor: '#88c9bf'
        },
        headerLeft: () => AbrirMenu({ navigation }),
      }} />
      <Stack.Screen options={{ title: "Escolha uma imagem" }} name="Camera" component={Camera} />


    </Stack.Navigator>
  );
}


export function CadastroAnimalStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Cadastroanimal">
      <Stack.Screen name="Cadastroanimal" component={Cadastroanimal} options={{
        title: 'Cadastro Animal',
        headerLeft: () => AbrirMenu({ navigation }),
        headerStyle: {
          backgroundColor:'#88c9bf'
        }
      }} />

      <Stack.Screen options={{ title: "Escolha uma imagem" }} name="Camera" component={Camera} />

    </Stack.Navigator>
  );
}


export function PerfilStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Perfil">


      <Stack.Screen name="Perfil" component={Perfil} options={{
        title: 'Meu Perfil',
        headerLeft: () => AbrirMenu({ navigation }),
        headerStyle: {
          backgroundColor:'#cfe9e5'
        }
      }} />

    </Stack.Navigator>
  );
}


export function CachorroStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Meus Pets">

      <Stack.Screen name="Meus Pets" component={Meus_Pets} options={{
        title: 'Meus Pets',
        headerLeft: () => AbrirMenu({ navigation }),
        headerStyle: {
          backgroundColor:'#88c9bf'
        }
      }} />

      <Stack.Screen name="Perfil Pet" component={Perfilmeupet} options={{
        title: 'Perfil pet',
      }} />

      <Stack.Screen name="Interessados" component={Interessados} options={{
        title: 'Interessados',
        headerLeft: () => AbrirMenu({ navigation }),
        headerStyle: {
          backgroundColor:'#cfe9e5'
        }
      }} />
    </Stack.Navigator>
  );
}

export function PetsStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Todos_Pets">

      <Stack.Screen name="Todos os Pets" component={Todos_Pets} options={{
        title: 'Adotar',

        headerLeft: () => AbrirMenu({ navigation }),
        headerStyle: {
          backgroundColor:'#ffd358'
        }
        
      }} />

      <Stack.Screen name="Perfil Pet" component={Perfilmeupet} options={{
        title: 'Perfil pet',
      }} />

    </Stack.Navigator>
  )
}

export function ChatStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Chat">

      <Stack.Screen name="Chat" component={Chat} options={{
        title: 'Chat',
        headerLeft: () => AbrirMenu({ navigation }),
        headerStyle: {
          backgroundColor:'#88c9bf'
        }
      }} />

      <Stack.Screen name="Conversa" component={Conversa} options={{
        title: 'Conversa',
        headerStyle: {
          backgroundColor:'#cfe9e5'
        }
      }} />


    </Stack.Navigator>
  )
}

