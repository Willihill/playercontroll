import {
  SET_LOADING,
  SET_ADDRESS_SERVER,
  SET_PORT_SERVER,
  SET_ISCONNECT_SERVER,
  SET_ISPAUSED,
  SET_VOLUME_VALUE,
  ServerState,
  ActionType
} from './types'

const initialState: ServerState = {
  loading: false,
  address: '',
  port: '',
  isConnected: false,
  isPaused: true,
  lastConnections: [],
  volumeValue: 50
}

export default (state: ServerState = initialState, { type, payload }: ActionType): ServerState => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_ADDRESS_SERVER:
      return { ...state, address: payload }
    case SET_PORT_SERVER:
      return { ...state, port: payload }
    case SET_ISCONNECT_SERVER:
      return { ...state, isConnected: payload }
    case SET_ISPAUSED:
      return { ...state, isPaused: payload }
    case SET_VOLUME_VALUE:
      return { ...state, volumeValue: payload }
    default:
      return state
  }
}
