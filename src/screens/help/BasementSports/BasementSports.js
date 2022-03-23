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

export default function BasementSports({ navigation: { navigate } }) {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => navigate('WelcomeScreen')}
            style={styles.navBtn}>
            <Text style={styles.navBtnText}>Back</Text>
          </TouchableOpacity>
          <Image
            style={styles.navLogo}
            source={require('../../../../assets/logoSemiWhite.png')}
          />
          <TouchableOpacity style={styles.navBtn}>
            <Text style={styles.navBtnText}>close</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          With the Basement Sports app you can . . .
        </Text>
        <View style={styles.imgsContainer}>
          <View style={styles.imageBg}>
            <Image
              resizeMode={'contain'}
              source={require('../../../../assets/help/soccer-mockup.png')}
            />
          </View>

          <Image
            style={[styles.image, { width: wp('37%') }]}
            resizeMode={'contain'}
            source={require('../../../../assets/help/baseball-mockup.png')}
          />

          <View style={[styles.imageBg, { alignItems: 'flex-start' }]}>
            <Image
              style={[styles.image, { marginRight: wp('10%') }]}
              resizeMode={'contain'}
              source={require('../../../../assets/help/hockey-mockup.png')}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Bring a virtula component to real-world game play.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Keep score, organize tournaments, and manage teams and standing.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Play your choice of Baseball, Soccer, or Hockey, with more sports
            coming soon!
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Utilize sound effects to create an immersive game-playing
            environment.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Use the app on its own, or in combination with our Starter Kits.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigate('GettingStart')}
          style={styles.btnContainer}>
          <Text style={styles.btnText}>NEXT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#262e3b',
  },
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('7%'),
  },
  navBtn: {
    backgroundColor: 'black',
    paddingVertical: wp('1%'),
    paddingHorizontal: wp('3%'),
    borderRadius: wp('1%'),
    opacity: 0.7,
  },
  navBtnText: {
    color: 'white',
  },
  navLogo: {
    height: wp('13%'),
    width: wp('13%'),
    opacity: 0.2,
  },
  title: {
    width: wp('70%'),
    marginTop: wp('3%'),
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: wp('7%'),
  },

  imgsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBg: {
    width: wp('31%'),
    alignItems: 'flex-end',
    marginTop: wp('10%'),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: wp('15%'),
    marginVertical: wp('1%'),
  },
  textPoint: {
    borderColor: 'white',
    width: wp('1%'),
    height: wp('1%'),
    borderWidth: wp('1%'),
    borderRadius: wp('1%'),
    marginRight: wp('5%'),
    marginTop: wp('1%'),
  },
  text: {
    color: 'white',
    textAlign: 'justify',
  },
  btnContainer: {
    marginTop: wp('7%'),
    marginHorizontal: wp('10%'),
    backgroundColor: 'black',
    width: wp('80%'),
    paddingVertical: wp('5%'),
    borderRadius: wp('9%'),
    opacity: 0.8,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
