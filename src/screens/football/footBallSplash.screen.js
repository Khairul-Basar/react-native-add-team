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

export default function FootballSplashScreen() {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/backgroundSoccer.png')}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => console.log('clicked')}>
        <Icon name={'cross'} type={'entypo'} size={28} color={'white'} />
      </TouchableOpacity>

      <View style={styles.imgContainer}>
        <Image
          style={styles.img1}
          resizeMode="contain"
          source={require('../../../assets/basketball.png')}
        />
        <Image
          style={styles.img2}
          resizeMode="contain"
          source={require('../../../assets/logoBaseBall.png')}
        />
      </View>

      <Text style={styles.launchDateText}>Launch: June 2022</Text>

      <ImageBackground
        resizeMode="contain"
        style={styles.cardImg}
        source={require('../../../assets/rectangleLeft.png')}>
        <View style={styles.left}>
          <Text style={styles.leftCardBaseText}>
            BASEMENT{'\n'}SPORTS{'\n'}
            <Text style={styles.leftCardInnerText}>FOOTBALL</Text>
          </Text>
        </View>

        <Text style={styles.cardRightText}>
          MIXED{'\n'}REALITY{'\n'}SPORTS{'\n'}GAMING
        </Text>
      </ImageBackground>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp('5%'),
    paddingHorizontal: wp('3%'),
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'black',
    height: wp('12%'),
    width: wp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('2%'),
    borderRadius: wp('6%'),
    opacity: 0.8,
    alignSelf: 'flex-end',
  },
  imgContainer: {
    alignItems: 'center',
    height: hp('50%'),
  },
  img1: {
    height: hp('35%'),
    width: wp('70%'),
    position: 'absolute',
    zIndex: -1,
    bottom: hp('6.5%'),
  },
  img2: {
    height: hp('20%'),
    width: wp('40%'),
  },

  launchDateText: {
    color: 'white',
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
  },

  cardImg: {
    flexDirection: 'row-reverse',
    width: wp('90%'),
    height: hp('30%'),
    justifyContent: 'space-around',
    alignItems: 'center',
    transform: [{ scaleY: 0.55 }, { rotate: '-180deg' }],
    marginTop: hp('-5%'),
  },
  left: {
    borderLeftWidth: wp('.1%'),
    borderColor: 'gray',
    justifyContent: 'center',
  },

  leftCardBaseText: {
    color: 'white',
    transform: [{ rotate: '-180deg' }, { scaleX: 0.55 }],
    fontWeight: 'bold',
    fontSize: responsiveFontSize(4),
    marginBottom: wp('5'),
  },
  leftCardInnerText: {
    color: 'coral',
  },

  cardRightText: {
    height: wp('40%'),
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.8),
    transform: [{ rotate: '90deg' }, { scaleY: 0.55 }],
    textAlign: 'right',
  },
})
