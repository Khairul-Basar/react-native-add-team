import React, { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default function AuthLogin() {
  return (
    <ImageBackground
      style={styles.bgContainer}
      source={require('../../../assets/login.png')}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoBg}>
          <Image
            style={styles.logoStyle}
            source={require('../../../assets/logoSemiWhite.png')}
          />
        </View>
        <View style={styles.titleBg}>
          <Text style={styles.title}>PLAY ALL DAY RAIN OR SHINE</Text>
          <TouchableOpacity
            onPress={() => console.log('play as Rookie')}
            style={styles.btnBg}>
            <Text style={styles.btn}>Play as ROOKIE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  logoBg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: wp('35%'),
    width: wp('35%'),
  },
  titleBg: {
    flex: 2,

    alignItems: 'center',
    paddingHorizontal: wp('10%'),
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    marginTop: wp('30%'),
  },
  btnBg: {
    backgroundColor: 'black',
    paddingHorizontal: wp('15%'),
    borderRadius: wp('9%'),
    paddingVertical: wp('4%'),
    opacity: 0.8,
    marginTop: wp('3%'),
  },
  btn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
})
