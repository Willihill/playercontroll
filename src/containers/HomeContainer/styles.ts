import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d54306'
  },

  mouseController: {
    alignItems: 'center',
    paddingVertical: 30
  },

  line: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  playPause: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    padding: 20,
    marginHorizontal: 30
  },

  server: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#fff',
    fontSize: 22
  },

  label: {
    color: '#fff',
    fontSize: 11
  },

  disconect: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
    elevation: 5,
    marginVertical: 10,
    backgroundColor: '#682204'
  }

})
