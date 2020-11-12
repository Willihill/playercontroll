import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import * as codePush from 'react-native-code-push'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes'
import { store, persistor } from './store'

export default () => {
  useEffect(() => onRefreshApp(), [])

  const onRefreshApp = async () => {
    const deploymentKey = 'YB-Vh7yI1gr071lIMs-yCFSEliZLEhfAM7-7h'

    // await codePush.default.sync({ deploymentKey })
    Alert.alert('Checando por update...')
    const update = await codePush.default.checkForUpdate(deploymentKey)
    Alert.alert('Check por update finalizada', `appVersion: ${update?.appVersion}\nisPending: ${update?.isPending}\nfailedInstall: ${update?.failedInstall}`)
    if (update?.isPending) {
      Alert.alert('Baixando atualizando...')
      const download = await update.download()
      Alert.alert('Baixou a atualização', `appVersion: ${download?.appVersion}\nisPending: ${download?.isPending}\nfailedInstall: ${download?.failedInstall}\ndescription: ${download.description}`)
      Alert.alert('Instalando atualização...')
      await download.install(codePush.default.InstallMode.IMMEDIATE)
      Alert.alert('Atualização instalada...')
      codePush.default.restartApp()
    }
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}
