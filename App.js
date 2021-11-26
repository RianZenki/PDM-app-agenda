import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import container from './navegacao/AgendaNavigator'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import contatosReducer from './store/contatos-reducer'

const rootReducer = combineReducers({
    contatos: contatosReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
      <Provider store={store}>
          {container}
      </Provider>
      )
}