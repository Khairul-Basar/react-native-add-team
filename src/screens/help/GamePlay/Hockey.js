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

export default function Hockey({ navigation: { navigate } }) {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => navigate('Soccer')}
            style={styles.navBtn}>
            <Text style={styles.navBtnText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.navTitle}>Game Play: Hockey</Text>
          <TouchableOpacity style={styles.navBtn}>
            <Text style={styles.navBtnText}>close</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Use "Goal" buttons to keep track of goals scored in real-world game
            play.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>Easily start and stop clock.</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Toggle between your choice of soundscape for meximum immersion or
            mute sound effects completely if desired.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>
            Select "Foul" and award penalty kick to the appropriate team.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textPoint}></View>
          <Text style={styles.text}>Hit whistle button to stop clock.</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../../../../assets/help/hockeyGameEngine-mockup.png')}
          />
          <TouchableOpacity
            onPress={() => navigate('TournamentFirstPage')}
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
    marginBottom: wp('7%'),
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
