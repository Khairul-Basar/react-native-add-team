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

export default function FeedScreen() {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Navigating the menu</Text>
        </View>
        <Text style={styles.title}>"Feed" Screen</Text>

        <View style={styles.textPara}>
          <Text style={styles.text}>
            View recent game results, and see what your fellow players have be
            up to.
          </Text>
        </View>

        <View style={styles.imgContainer}>
          <Image source={require('../../../../assets/help/feed-mockup.png')} />
        </View>

        <TouchableOpacity
          onPress={() => console.log('Clicked Button')}
          style={styles.btn}>
          <Text style={styles.btnText}>NEXT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#191E26',
    paddingHorizontal: wp('7%'),
  },
  container: {
    flex: 1,
  },
  menu: {
    marginVertical: wp('3%'),
  },
  menuText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  title: {
    marginVertical: wp('2%'),
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  textPara: {
    backgroundColor: '#313A4E',
    marginVertical: wp('2%'),
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('2%'),
  },
  text: {
    color: 'white',
    fontWeight: '300',
    textAlign: 'justify',
  },
  imgContainer: {
    alignItems: 'center',
  },

  btn: {
    marginHorizontal: wp('5%'),
    backgroundColor: 'black',
    marginTop: wp('5%'),
    paddingVertical: wp('4%'),
    borderRadius: wp('8%'),
    opacity: 0.7,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
})
