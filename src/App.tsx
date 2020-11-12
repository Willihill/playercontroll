import React, { useEffect } from 'react'
import * as codePush from 'react-native-code-push'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes'
import { store, persistor } from './store'

export default () => {
  useEffect(() => {
    codePush.default.sync({ deploymentKey: 'YB-Vh7yI1gr071lIMs-yCFSEliZLEhfAM7-7h' })
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}
