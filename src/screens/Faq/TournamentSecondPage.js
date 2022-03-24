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

export default function TournamentSecondPage({ navigation: { navigate } }) {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => navigate('TournamentFirstPage')}
            style={styles.navBtn}>
            <Text style={styles.navBtnText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.navTitle}>Tournament Setup</Text>
          <TouchableOpacity style={styles.navBtn}>
            <Text style={styles.navBtnText}>close</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textPara}>
          <Text style={styles.text}>
            Step 3: Adjust tournament details. (Precise details very by sport.)
          </Text>
        </View>
        <View style={styles.textPara}>
          <Text style={styles.text}>
            Step 4: Tournament schedule and seedings guide tournament game play.
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../assets/faq/soccerTournament2-mockup.png')}
          />
          <View style={styles.image}>
            <Image
              source={require('../../../assets/faq/soccerTimeTable-mockup.png')}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigate('StarterKits')}
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
    justifyContent: 'center',
  },
  image: {
    height: wp('115%'),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  btn: {
    marginHorizontal: wp('5%'),
    backgroundColor: 'black',
    marginTop: wp('5%'),
    paddingVertical: wp('4%'),
    borderRadius: wp('8%'),
    opacity: 0.6,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
})
