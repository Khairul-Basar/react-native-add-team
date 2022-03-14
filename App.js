import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'

import AddTeam from './src/screens/AddTeam/AddTeam'
import BickTeam from './src/screens/BickTeam/BickTeam'

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/backgroundSoccer.png')}
      style={styles.container}
    >
      <TouchableOpacity onPress={() => console.log('a')}>
        <Icon name="heart" type="font-awesome" color="white" size={54} />
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
