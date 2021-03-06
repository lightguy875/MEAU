/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Navegacao from './src/navegação/Drawer';

AppRegistry.registerComponent(appName, () => Navegacao);
