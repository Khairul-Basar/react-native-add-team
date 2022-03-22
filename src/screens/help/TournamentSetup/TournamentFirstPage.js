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

export default function TournamentFirstPage() {
  return (
    <View style={styles.bgContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Tournament Setup</Text>
        </View>
        <View style={styles.textPara}>
          <Text style={styles.text}>Step 1: Enter the tournament name.</Text>
        </View>
        <View style={styles.textPara}>
          <Text style={styles.text}>
            Step 2: Add the desired number of teams to the tournament.
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../../assets/help/soccerTournament-mockup.png')}
          />
          <View style={styles.image}>
            <Image
              source={require('../../../../assets/help/addPlayers-mockup.png')}
            />
          </View>
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
    opacity: 0.7,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
})
