import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31363c'
  },

  qrCode: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cameraStyle: {
    height: Dimensions.get('screen').height
  },

  topStyle: {
    flex: 0
  },

  bottomStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flex: 1
  },

  footer: {
    width: Dimensions.get('screen').width,
    backgroundColor: 'rgba(188, 43, 10, 0.85)',
    paddingVertical: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },

  message: {
    fontFamily: 'Muli-Regular',
    color: '#c7cacd',
    fontSize: 22,
    textAlign: 'center'
  }

})
