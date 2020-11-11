import React, { useEffect } from 'react'
import { View, Text, StatusBar, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles'

import Slider from '@react-native-community/slider'

import { closeConnectionServer, mouseClickServer, moveCursorDownServer, moveCursorLeftServer, moveCursorRightServer, moveCursorUpServer, nextTrackServer, pauseServer, playServer, prevTrackServer, setVolumeServer, tooglePlayPauseServer } from '../../services/SocketService'
import { ApplicationState } from '../../store/reducer'
import { setIsPausedAction, setVolumeValueAction } from '../../store/reducer/ServerReducer/actions'

export default () => {
  const dispatch = useDispatch()
  const { ServerReducer } = useSelector((state: ApplicationState) => state)

  useEffect(() => {
    dispatch(setVolumeValueAction(50))
    return () => {
      closeConnectionServer()
    }
  }, [])

  const onPressArrowLeft = () => {
    moveCursorLeftServer()
  }

  const onPressArrowRight = () => {
    moveCursorRightServer()
  }

  const onPressArrowUp = () => {
    moveCursorUpServer()
  }

  const onPressArrowDown = () => {
    moveCursorDownServer()
  }

  const onPressClickMouse = () => {
    mouseClickServer()
  }

  const onPressPrevTrack = () => {
    prevTrackServer()
  }

  const onPressPausePlay = () => {
    dispatch(setIsPausedAction(!ServerReducer.isPaused))
    tooglePlayPauseServer()
  }

  const onPressNextTrack = () => {
    nextTrackServer()
  }

  const onPressVolumePlus = () => {
    const newVolume = ServerReducer.volumeValue > 98 ? 100 : ServerReducer.volumeValue + 2
    dispatch(setVolumeValueAction(newVolume))
    setVolumeServer(newVolume)
  }

  const onPressVolumeMinus = () => {
    const newVolume = ServerReducer.volumeValue <= 2 ? 0 : ServerReducer.volumeValue - 2
    dispatch(setVolumeValueAction(newVolume))
    setVolumeServer(newVolume)
  }

  const onChangeVolume = (value: number) => {
    dispatch(setVolumeValueAction(value))
    setVolumeServer(value)
  }

  const onPressCloseConnection = () => {
    closeConnectionServer()
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#d54306' barStyle='light-content' />
      <ScrollView horizontal={false}>

        <View style={styles.mouseController}>
          <View style={styles.line}>
            <TouchableOpacity onPress={onPressArrowUp}>
              <SimpleLineIcons name='arrow-up' color='#fff' size={50} />
            </TouchableOpacity>
          </View>

          <View style={styles.line}>
            <TouchableOpacity onPress={onPressArrowLeft}>
              <SimpleLineIcons name='arrow-left' color='#fff' size={50} />
            </TouchableOpacity>

            <View>
              <TouchableOpacity onPress={onPressClickMouse}>
                <MaterialCommunityIcons name='cursor-default-click-outline' color='#fff' size={50} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={onPressArrowRight}>
              <SimpleLineIcons name='arrow-right' color='#fff' size={50} />
            </TouchableOpacity>
          </View>

          <View style={styles.line}>
            <TouchableOpacity onPress={onPressArrowDown}>
              <SimpleLineIcons name='arrow-down' color='#fff' size={50} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line}>
          <TouchableOpacity onPress={onPressPrevTrack}>
            <Ionicons name='play-skip-back-outline' color='#fff' size={50} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressPausePlay}>
            <View style={styles.playPause}>
              <Ionicons name={(ServerReducer.isPaused === true ? 'ios-pause-outline' : 'ios-play-outline')} color='#fff' size={30} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressNextTrack}>
            <Ionicons name='play-skip-forward-outline' color='#fff' size={50} />
          </TouchableOpacity>
        </View>

        <View style={[styles.line, { marginHorizontal: 20, marginTop: 30 }]}>
          <TouchableOpacity onPress={onPressVolumeMinus}>
            <AntDesign name='minus' color='#fff' size={30} />
          </TouchableOpacity>

          <Slider
            minimumValue={0}
            maximumValue={100}
            value={ServerReducer.volumeValue}
            style={{ flex: 1 }}
            thumbTintColor='#fff'
            minimumTrackTintColor='#fff'
            maximumTrackTintColor='#682204'
            onSlidingComplete={onChangeVolume}
          />

          <TouchableOpacity onPress={onPressVolumePlus}>
            <AntDesign name='plus' color='#fff' size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.server}>
          <Text style={styles.title}>Server</Text>
          <View style={styles.line}>
            <Text style={[styles.label, { marginRight: 15 }]}>Address</Text>
            <Text style={styles.title}>{ServerReducer.address}:{ServerReducer.port}</Text>
          </View>

          <TouchableOpacity onPress={onPressCloseConnection} style={styles.disconect}>
            <Text style={styles.label}>Desconectar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
