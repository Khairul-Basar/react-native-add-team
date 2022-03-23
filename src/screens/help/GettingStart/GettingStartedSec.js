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

export default function GettingStartedSec({ navigation: { navigate } }) {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => navigate('GettingStart')}
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
        <Text style={styles.title}>Getting Started</Text>
        <View style={styles.textPara}>
          <Text style={styles.text}>
            Step 3: Create your Baseball, Soccer and Hockey team.
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            resizeMode="contain"
            style={{ zIndex: 1 }}
            source={require('../../../../assets/help/team1-mockup.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../../../assets/help/team2-mockup.png')}
          />
          <Image
            resizeMode="contain"
            style={[
              styles.image,
              {
                left: wp('-40%'),
                zIndex: -1,
                marginTop: wp('42%'),
              },
            ]}
            source={require('../../../../assets/help/team3-mockup.png')}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigate('PlayScreen')}
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
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginVertical: wp('2%'),
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
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
    flexDirection: 'row',
    width: wp('100%'),
    overflow: 'hidden',
    marginTop: wp('5%'),
  },
  image: {
    left: wp('-22%'),
    marginTop: wp('20%'),
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
