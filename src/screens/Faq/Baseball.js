import React from 'react'
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

export default function Baseball({ navigation: { navigate } }) {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => navigate('PlayersScreen')}
            style={styles.navBtn}>
            <Text style={styles.navBtnText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.navTitle}>Game Play: Baseball</Text>
          <TouchableOpacity style={styles.navBtn}>
            <Text style={styles.navBtnText}>close</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Keep virtual score for real-world game play, tracking Runs, Balls,
            Strikes and Outs.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Team icons reflect positions of players on bases.(Hold down on a
            given icon to remove that player from the base.)
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Swipe left or right to toggle between different scoreboard layout
            options.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Toggle sound effects on and off according to preference.
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../../../assets/faq/baseballGameEngine-mockup.png')}
          />
          <TouchableOpacity
            onPress={() => navigate('Soccer')}
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
    marginBottom: wp('5%'),
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
  navTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  textContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp('7%'),
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
    textAlign: 'left',
    lineHeight: wp('5%'),
    fontWeight: '300',
  },
  imgContainer: {
    alignItems: 'center',
    position: 'relative',
    marginTop: wp('3%'),
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
