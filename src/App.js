import React from 'react';
import {store} from './store/storeConfig';
import {Provider} from 'react-redux';
import Navegacao from './navegação/Drawer'
const Root = () => {
  return (
   <Provider store={store}>
       <Navegacao />
   </Provider>
  )
}
export default Root