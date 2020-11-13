/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import * as codePush from 'react-native-code-push'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes'
import { store, persistor } from './store'

export default () => {
  useEffect(() => onRefreshApp(), [])

  const waitAlert = (title: string, message? : string, time: number = 2000) => setTimeout(() => Alert.alert(title, message), time)

  const onRefreshApp = async () => {
    const deploymentKey = 'YB-Vh7yI1gr071lIMs-yCFSEliZLEhfAM7-7h'

    await codePush.default.sync(
      { deploymentKey },
      undefined,
      (progress) => waitAlert(`Sync progress: ${progress.receivedBytes}/${progress.totalBytes}`),
      async (binVersion) => {
        waitAlert('Sync finalizada', `appVersion: ${binVersion?.appVersion}\nisPending: ${binVersion?.isPending}\nfailedInstall: ${binVersion?.failedInstall}`, 5000)
        waitAlert('Baixando atualizando...')
        const download = await binVersion.download((progress) => Alert.alert(`Download progress: ${progress.receivedBytes}/${progress.totalBytes}`))
        waitAlert('Baixou a atualização', `appVersion: ${download?.appVersion}\nisPending: ${download?.isPending}\nfailedInstall: ${download?.failedInstall}\ndescription: ${download.description}`, 5000)
        waitAlert('Instalando atualização...')
        await download.install(codePush.default.InstallMode.IMMEDIATE)
        Alert.alert('Atualização instalada...')
        setTimeout(() => codePush.default.restartApp(), 10000)
      }
    )

    // Alert.alert('Checando por update...')
    // const update = await codePush.default.checkForUpdate(deploymentKey)
    // Alert.alert('Check por update finalizada', `appVersion: ${update?.appVersion}\nisPending: ${update?.isPending}\nfailedInstall: ${update?.failedInstall}`)
    // if (update?.isPending) {
    //   Alert.alert('Baixando atualizando...')
    //   const download = await update.download()
    //   Alert.alert('Baixou a atualização', `appVersion: ${download?.appVersion}\nisPending: ${download?.isPending}\nfailedInstall: ${download?.failedInstall}\ndescription: ${download.description}`)
    //   Alert.alert('Instalando atualização...')
    //   await download.install(codePush.default.InstallMode.IMMEDIATE)
    //   Alert.alert('Atualização instalada...')
    //   codePush.default.restartApp()
    // }
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}
