import {
  SET_LOADING,
  SET_ADDRESS_SERVER,
  SET_PORT_SERVER,
  SET_ISCONNECT_SERVER,
  SET_ISPAUSED,
  SET_VOLUME_VALUE
} from './types'

export const setLoadingServerAction = (payload: boolean) => ({ type: SET_LOADING, payload })
export const setAddressServerAction = (payload: string) => ({ type: SET_ADDRESS_SERVER, payload })
export const setPortServerAction = (payload: string) => ({ type: SET_PORT_SERVER, payload })
export const setIsConnectedServerAction = (payload: boolean) => ({ type: SET_ISCONNECT_SERVER, payload })
export const setIsPausedAction = (payload: boolean) => ({ type: SET_ISPAUSED, payload })
export const setVolumeValueAction = (payload: number) => ({ type: SET_VOLUME_VALUE, payload })
