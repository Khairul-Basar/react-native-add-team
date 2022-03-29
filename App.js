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
import BasketBall from './src/screens/basketball/basketBallGame.screen'
import AuthLogin from './src/screens/authLogin/AuthLogin'
import { BackgroundImage } from 'react-native-elements/dist/config'
import WelcomeScreen from './src/screens/Faq/WelcomeScreen'
import BasementSports from './src/screens/Faq/BasementSports'
import GettingStart from './src/screens/Faq/GettingStart'
import GettingStartedSec from './src/screens/Faq/GettingStartedSec'
import PlayScreen from './src/screens/Faq/PlayScreen'
import FeedScreen from './src/screens/Faq/FeedScreen'
import TeamsScreen from './src/screens/Faq/TeamsScreen'
import PlayersScreen from './src/screens/Faq/PlayersScreen'
import Baseball from './src/screens/Faq/Baseball'
import Soccer from './src/screens/Faq/Soccer'
import Hockey from './src/screens/Faq/Hockey'
import TournamentFirstPage from './src/screens/Faq/TournamentFirstPage'
import TournamentSecondPage from './src/screens/Faq/TournamentSecondPage'
import StarterKits from './src/screens/Faq/StarterKits'
import Updates from './src/screens/Faq/Updates'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BasketBallSplashScreen from './src/screens/basketball/basketBallSplash.screen'

const Stack = createNativeStackNavigator()

export default function App() {
  return <BasketBallSplashScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
