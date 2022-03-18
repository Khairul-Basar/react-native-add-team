import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'

import AddTeam from './src/screens/AddTeam/AddTeam'
import BickTeam from './src/screens/BickTeam/BickTeam'
import BasketBall from './src/screens/BasketBall/BasketBall'

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/backgroundSoccer.png')}
      style={styles.container}>
      <BasketBall />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
