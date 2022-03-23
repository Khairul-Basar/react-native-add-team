import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

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
import Hockey from './src/screens/help/GamePlay/Hockey'
import TournamentFirstPage from './src/screens/help/TournamentSetup/TournamentFirstPage'
import TournamentSecondPage from './src/screens/help/TournamentSetup/TournamentSecondPage'
import StarterKits from './src/screens/help/StarterKits/StarterKits'
import Updates from './src/screens/help/Updates/Updates'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AhmadOne from './src/screens/Faq/AhmadOne'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <AhmadOne />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93DB3C',
  },
})
