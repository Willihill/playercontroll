import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import reducers from './reducer'

const middlewares = [thunk]
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['ServerReducer']
}
const persistedReducer = persistReducer(persistConfig, reducers)

if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middlewares.push(createDebugger({ resolveCyclic: true }))
}

export const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)))
export const persistor = persistStore(store)
