import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'

import AddTeam from './src/screens/AddTeam/AddTeam'
import BickTeam from './src/screens/BickTeam/BickTeam'
import BasketBall from './src/screens/BasketBall/BasketBall'
import AuthLogin from './src/screens/authLogin/AuthLogin'
import { BackgroundImage } from 'react-native-elements/dist/config'
import WelcomeScreen from './src/screens/help/Welcome/WelcomeScreen'
import BasementSports from './src/screens/help/BasementSports/BasementSports'
import GettingStart from './src/screens/help/GettingStart/GettingStart'
import GettingStartedSec from './src/screens/help/GettingStart/GettingStartedSec'

export default function App() {
  return (
    <View style={styles.container}>
      <GettingStartedSec />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
