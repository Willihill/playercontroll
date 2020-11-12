import React, { useRef, useEffect } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { RNCamera } from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles'

import ModalLoading from '../../components/widget/ModalLoading'
import { openConnectionServer } from '../../services/SocketService'
import { ApplicationState } from '../../store/reducer'
import { QRCodeRefProps } from './types'

export default ({ navigation }: any) => {
  const dispatch = useDispatch()
  const { ServerReducer } = useSelector((state: ApplicationState) => state)
  const QRCodeRef = useRef<QRCodeRefProps>(null)

  useEffect(() => {
    if (ServerReducer.address !== '' && ServerReducer.port !== '') onReadQrCode({ data: `${ServerReducer.address}|${ServerReducer.port}` })

    const unSubscribeFocus = navigation.addListener('focus', () => {
      setTimeout(() => QRCodeRef.current?.reactivate?.(), 1000)
    })

    return () => {
      unSubscribeFocus()
    }
  }, [navigation])

  useEffect(() => {
    if (!ServerReducer.loading && !ServerReducer.isConnected) setTimeout(() => QRCodeRef.current?.reactivate?.(), 1000)
  }, [ServerReducer.loading])

  const onReadQrCode = (e: any) => {
    dispatch(openConnectionServer(e.data))
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#d54306' barStyle='light-content' />
      <ModalLoading
        loading={ServerReducer.loading}
        label='Conectando com servidor'
      />
      <View style={styles.qrCode}>
        <QRCodeScanner
          ref={QRCodeRef}
          onRead={onReadQrCode}
          flashMode={RNCamera.Constants.FlashMode.off}
          topViewStyle={styles.topStyle}
          bottomViewStyle={styles.bottomStyle}
          checkAndroid6Permissions
          cameraStyle={styles.cameraStyle}
          bottomContent={
            <View style={styles.footer}>
              <Text style={styles.message}>Leia o qr-code do servidor para conectar ou aguarde a atualização.</Text>
            </View>
          }
        />
      </View>
    </View>
  )
}
