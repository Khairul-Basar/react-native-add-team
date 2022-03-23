import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default function WelcomeScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoBg}>
          <Image
            style={styles.logoStyle}
            source={require('../../../../assets/logoSemiWhite.png')}
          />
        </View>
        <Text style={styles.title}>WELCOME TO BASEMENT SPORTS</Text>
        <Text style={styles.subTitle}>
          A virtual app for real-world game play!
        </Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../../../../assets/help/white-mockup.png')}
          />
          <TouchableOpacity
            onPress={() => navigate('BasementSports')}
            style={styles.btnBg}>
            <Text style={styles.btnText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#262e3b',
    paddingHorizontal: wp('7%'),
  },
  container: {
    flex: 1,
  },
  logoBg: {
    alignItems: 'center',
  },
  logoStyle: {
    height: wp('13%'),
    width: wp('13%'),
    opacity: 0.2,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: wp('4%'),
    width: wp('70%'),
    lineHeight: 36,
    textAlign: 'left',
  },
  subTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: wp('5%'),
  },
  imgContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  btnBg: {
    backgroundColor: 'black',
    width: wp('75%'),
    paddingVertical: wp('4%'),
    position: 'absolute',
    bottom: 0,
    borderRadius: wp('8%'),
    opacity: 0.95,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
  },
})
