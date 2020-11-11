import { Action } from 'redux'

export const SET_LOADING = 'ServerReducer/SET_LOADING'
export const SET_ADDRESS_SERVER = 'ServerReducer/SET_ADDRESS_SERVER'
export const SET_PORT_SERVER = 'ServerReducer/SET_PORT_SERVER'
export const SET_ISCONNECT_SERVER = 'ServerReducer/SET_ISCONNECT_SERVER'
export const SET_ISPAUSED = 'ServerReducer/SET_ISPAUSED'
export const SET_VOLUME_VALUE = 'ServerReducer/SET_VOLUME_VALUE'

export interface ConnectionProps {
  address: string
  port: string
  connectionAt: string
}

export interface ServerState {
  loading: boolean
  address: string
  port: string
  isConnected: boolean
  lastConnections: ConnectionProps[]
  isPaused: boolean
  volumeValue: number
}

export interface ActionType extends Action {
  type: string
  payload: any
}
