import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { Icon } from 'react-native-elements'

export default function BasketBallSplashScreen() {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/backgroundBasketBall.png')}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img1}
          resizeMode="contain"
          source={require('../../../assets/logoBaseBall.png')}
        />
        <Image
          style={styles.img2}
          resizeMode="contain"
          source={require('../../../assets/basketball.png')}
        />
      </View>

      <Text style={styles.launchDateText}>Launch: Mar 2022</Text>

      <View style={styles.cardContainer}>
        <View style={styles.leftCard}>
          <Text style={styles.leftCardText}>
            BASEMENT {'\n'}SPORTS {'\n'}BASKETBALL
          </Text>
        </View>
        <View style={styles.rightCard}>
          <Text style={styles.rightCardText}>
            MIXED {'\n'}REALITY {'\n'}SPORTS {'\n'}GAMING
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp('5%'),
    paddingHorizontal: wp('2%'),
    alignItems: 'center',
  },
  imgContainer: {
    alignItems: 'center',
    height: hp('50%'),
  },
  img1: {
    height: hp('20%'),
    width: wp('40%'),
    zIndex: 1,
  },
  img2: {
    height: hp('35%'),
    width: wp('70%'),
    position: 'absolute',
    zIndex: -1,
    bottom: hp('5%'),
  },
  launchDateText: {
    color: 'white',
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
  },
  leftCard: {
    backgroundColor: 'dimgrey',
    width: wp('45%'),
    padding: wp('5%'),
    borderTopStartRadius: wp('4%'),
    borderBottomLeftRadius: wp('4%'),
    borderColor: 'grey',
    borderRightWidth: wp('.3%'),
  },
  rightCard: {
    backgroundColor: 'dimgrey',
    width: wp('30%'),
    padding: wp('5%'),
    borderTopRightRadius: wp('3%'),
    borderBottomRightRadius: wp('3%'),
  },
  leftCardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
  rightCardText: {
    color: 'white',
    textAlign: 'right',
    fontWeight: 'bold',
  },
})
