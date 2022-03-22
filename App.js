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
import PlayScreen from './src/screens/help/Navigating/PlayScreen'
import FeedScreen from './src/screens/help/Navigating/FeedScreen'
import TeamsScreen from './src/screens/help/Navigating/TeamsScreen'
import PlayersScreen from './src/screens/help/Navigating/PlayersScreen'
import Baseball from './src/screens/help/GamePlay/Baseball'
import Soccer from './src/screens/help/GamePlay/Soccer'

export default function App() {
  return (
    <View style={styles.container}>
      <Soccer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
