import { createRef } from 'react'

import { NavigationContainerRef, CommonActions, Route } from '@react-navigation/native'

export const navigationRef = createRef<NavigationContainerRef>()

const navigate = (name: string, params?: any) => {
  // eslint-disable-next-line no-unused-expressions
  navigationRef.current?.navigate(name, params)
}

const reset = (name: string, params?: any) => {
  // eslint-disable-next-line no-unused-expressions
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name, params }]
    })
  )
}

const goBack = () => {
  // eslint-disable-next-line no-unused-expressions
  navigationRef.current?.dispatch((CommonActions.goBack()))
}

const getCurrentRoute = (): Route<string> | undefined => navigationRef.current?.getCurrentRoute()

export default {
  navigate,
  reset,
  goBack,
  getCurrentRoute
}
