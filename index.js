/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux'
import App from './src/App';
import {name as appName} from './app.json';
import Navegacao from './src/navegação/Drawer';


AppRegistry.registerComponent(appName, () => App);
