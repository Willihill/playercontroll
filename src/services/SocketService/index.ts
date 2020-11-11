import { Alert, TextPropTypes } from 'react-native'

import { Dispatch } from 'redux'

import { setAddressServerAction, setIsConnectedServerAction, setLoadingServerAction, setPortServerAction } from '../../store/reducer/ServerReducer/actions'
import NavigationService from '../NavigationService'

var socket: WebSocket

export const openConnectionServer = (dataQrCode: string) => {
  return (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingServerAction(true))

      const address = dataQrCode.substring(0, dataQrCode.indexOf('|'))
      const port = dataQrCode.substring(dataQrCode.indexOf('|') + 1)

      if (address === '') throw new Error('Servidor não informado.')
      if (port === '') throw new Error('Servidor não informado.')

      socket = new WebSocket(`ws://${address}:${port}`)

      socket.onopen = () => {
        console.log('[+] Server connected')

        dispatch(setIsConnectedServerAction(true))
        dispatch(setLoadingServerAction(false))
        dispatch(setAddressServerAction(address))
        dispatch(setPortServerAction(port))
        NavigationService.navigate('Home')
      }

      socket.onerror = (event: WebSocketErrorEvent) => {
        Alert.alert(event.message)
        dispatch(setLoadingServerAction(false))
      }

      socket.onmessage = (event: WebSocketMessageEvent) => {
        console.log('[*] Message Received: ', event.data)
      }

      socket.onclose = () => {
        console.log('[-] Server disconnected')
        dispatch(setIsConnectedServerAction(false))
        dispatch(setAddressServerAction(''))
        dispatch(setPortServerAction(''))
        NavigationService.navigate('ConnectQrCode')
      }
    } catch (error) {
      Alert.alert(error.message)
      console.log('Erro ao abrir conexão: ', error)
      dispatch(setLoadingServerAction(false))
    }
  }
}

export const closeConnectionServer = () => {
  socket.close()
}

export const setVolumeServer = (value: number) => {
  socket.send(JSON.stringify({
    type: 'setVolume',
    value: value.toString()
  }))
}

export const tooglePlayPauseServer = () => {
  socket.send(JSON.stringify({
    type: 'tooglePlayPause',
    value: ''
  }))
}

export const prevTrackServer = () => {
  socket.send(JSON.stringify({
    type: 'prevTrack',
    value: ''
  }))
}

export const nextTrackServer = () => {
  socket.send(JSON.stringify({
    type: 'nextTrack',
    value: ''
  }))
}

export const moveCursorLeftServer = () => {
  socket.send(JSON.stringify({
    type: 'cursorLeft',
    value: '-15'
  }))
}

export const moveCursorRightServer = () => {
  socket.send(JSON.stringify({
    type: 'cursorRight',
    value: '15'
  }))
}

export const moveCursorUpServer = () => {
  socket.send(JSON.stringify({
    type: 'cursorUp',
    value: '-15'
  }))
}

export const moveCursorDownServer = () => {
  socket.send(JSON.stringify({
    type: 'cursorDown',
    value: '15'
  }))
}

export const mouseClickServer = () => {
  socket.send(JSON.stringify({
    type: 'mouseClickLeft',
    value: ''
  }))
}
