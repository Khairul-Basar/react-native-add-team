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

export default function Updates({ navigation: { navigate } }) {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => navigate('StarterKits')}
            style={styles.navBtn}>
            <Text style={styles.navBtnText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBtn}>
            <Text style={styles.navBtnText}>close</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require('../../../../assets/logoSemiWhite.png')}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Stay Tuned for New Updates!</Text>
          <Text style={styles.cardSubTitle}>
            We will soon update the app with:
          </Text>
          <View style={styles.textContainer}>
            <View style={styles.textPoint}></View>
            <Text style={styles.text}>
              Additional sports(including BasketBall and Football);
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textPoint}></View>
            <Text style={styles.text}>Easy 2-v-2 and 3-v-3 functionality;</Text>
          </View>

          <View style={styles.textContainer}>
            <View style={styles.textPoint}></View>
            <Text style={styles.text}>Screencast capability;</Text>
          </View>

          <View style={styles.textContainer}>
            <View style={styles.textPoint}></View>
            <Text style={styles.text}>New sound effects;</Text>
          </View>

          <View style={styles.textContainer}>
            <View style={styles.textPoint}></View>
            <Text style={styles.text}>. . . and more!</Text>
          </View>

          <Text style={styles.cardFooter}>
            Contact us at info@basementsports.com for more information.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate('WelcomeScreen')}
          style={styles.btn}>
          <Text style={styles.btnText}>Close</Text>
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
  navTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  card: {
    backgroundColor: '#313A4E',
    marginVertical: wp('2%'),
    paddingVertical: wp('4%'),
    paddingHorizontal: wp('6%'),
    borderRadius: wp('2%'),
    overflow: 'hidden',
  },
  cardTitle: {
    color: 'white',
    marginBottom: wp('7%'),
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubTitle: {
    color: 'white',
    marginBottom: wp('5%'),
  },
  cardText: {
    color: 'white',
    fontWeight: '300',
    textAlign: 'justify',
  },
  cardFooter: {
    color: 'white',
    marginTop: wp('5%'),
  },
  imgContainer: {
    alignItems: 'center',
    height: wp('60%'),
    justifyContent: 'center',
  },
  image: {
    height: wp('37%'),
    width: wp('37%'),
    opacity: 0.2,
  },
  textContainer: {
    flexDirection: 'row',
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
  btn: {
    marginHorizontal: wp('5%'),
    backgroundColor: 'black',
    marginTop: wp('30%'),
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
