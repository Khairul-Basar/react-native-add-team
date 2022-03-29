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
import { Icon } from 'react-native-elements'
export default function WelcomeScreen({ navigation: { navigate } }) {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigate('Profile')}>
          <Icon
            reverse
            name={'arrow-left'}
            type={'entypo'}
            size={15}
            color={'#191E26'}
          />
        </TouchableOpacity>
        <Image
          style={styles.navLogo}
          source={require('../../assets/logoSemiWhite.png')}
        />
        <TouchableOpacity onPress={() => navigate('Profile')}>
          <Icon
            reverse
            name={'cross'}
            type={'entypo'}
            size={15}
            color={'#191E26'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.basicCol}>
        <Text style={styles.title}>WELCOME TO SPORTS</Text>
        <Text style={styles.title}>BASEMENT</Text>
        <Text style={styles.title}>SPORTS</Text>
      </View>
      <Text style={styles.subTitle}>
        A virtual app for real-world game play!
      </Text>
      <Image
        style={styles.imgStyle}
        source={require('../../assets/faq/white-mockup.png')}
        resizeMode={'contain'}
      />
      <TouchableOpacity
        onPress={() => navigate('FaqBasementSports')}
        style={styles.btnBg}>
        <Text style={styles.btnText}>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#262E3B',
    paddingVertical: hp('2%'),
    alignItems: 'center',
  },
  nav: {
    width: wp('90%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navLogo: {
    height: wp('13%'),
    width: wp('13%'),
    opacity: 0.2,
  },
  basicCol: {
    marginTop: wp('3%'),
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  subTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: wp('3%'),
  },
  btnBg: {
    backgroundColor: 'black',
    width: wp('75%'),
    paddingVertical: wp('4%'),
    position: 'absolute',
    bottom: 10,
    borderRadius: wp('8%'),
    opacity: 0.95,
  },
  imgStyle: {
    height: hp('53%'),
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})
