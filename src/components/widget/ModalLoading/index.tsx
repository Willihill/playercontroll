import React from 'react'
import {
  View,
  Modal,
  ActivityIndicator,
  Text
} from 'react-native'

import styles from './styles'

import { Props } from './types'

export default ({
  loading = false,
  label = ''
}: Props) => (
  <Modal
    visible={loading}
    transparent
  >
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator color='#d54306' />
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  </Modal>
)
