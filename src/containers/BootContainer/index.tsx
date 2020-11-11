import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default () => {
  const navigation = useNavigation()

  useEffect(() => {
    // Verifica se ta com Ip do server informado
    navigation.navigate('ConnectQrCode')
    // navigation.navigate('Home')
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color='#000' />
    </View>
  )
}
