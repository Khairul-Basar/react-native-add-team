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

export default function StarterKits() {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.menuText}>The Starter Kits</Text>
        </View>
        <View style={styles.textPara}>
          <Text style={styles.text}>
            The app can be used on its own, to keep score on your freeform
            Baseball,Soccer, or Hockey game . . .
          </Text>

          <Text style={[styles.text, { marginTop: wp('5%') }]}>
            . . . or it can be used in combination with our Baseball Starter Kit
            or 2-in-1 Soccer/Hockey Starter Kit.
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../../../../assets/help/product-mockup.png')}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => console.log('Next Clicked..!!!')}
              style={styles.btnBg}>
              <Text style={styles.btnText}>NEXT</Text>
            </TouchableOpacity>
          </View>
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
  menu: {
    marginVertical: wp('3%'),
  },
  menuText: {
    color: 'white',
    textAlign: 'center',
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
    alignItems: 'center',
    position: 'relative',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    position: 'absolute',
    bottom: wp('5'),
    shadowColor: '#191E26',
    shadowOffset: {
      width: 0,
      height: wp('-18%'),
    },
    shadowOpacity: 2,
    shadowRadius: wp('6%'),

    elevation: 24,
  },
  btnBg: {
    backgroundColor: 'black',
    width: wp('75%'),
    paddingVertical: wp('4%'),

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
