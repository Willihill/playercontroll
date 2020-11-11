import { AppRegistry, LogBox } from 'react-native'

import { name as appName } from './app.json'
import App from './src/App'
if (!__DEV__) LogBox.ignoreLogs([''])

AppRegistry.registerComponent(appName, () => App)
