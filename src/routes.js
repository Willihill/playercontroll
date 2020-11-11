import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BootContainer from './containers/BootContainer'
import ConnectQrCodeContainer from './containers/ConnectQrCodeContainer'
import HomeContainer from './containers/HomeContainer'
import { navigationRef } from './services/NavigationService'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='Boot' headerMode='none'>
        <Stack.Screen name='Boot' component={BootContainer} />
        <Stack.Screen name='ConnectQrCode' component={ConnectQrCodeContainer} />
        <Stack.Screen name='Home' component={HomeContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
