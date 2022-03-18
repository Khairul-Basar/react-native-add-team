import React, { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Icon } from 'react-native-elements'

export default function BasketBall() {
  const [team, setTeam] = useState(true)

  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={styles.topBar}>
        <View style={styles.shareReplyIcon}>
          <TouchableOpacity style={styles.replyIcon}>
            <Icon name="reply" type="font-awesome" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share" type="font-awesome" color="white" size={35} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => console.log('a')}
          style={styles.stopWatchContainer}
        >
          <Icon name="clock-o" type="font-awesome" color="white" size={40} />
          <Text style={styles.stopWatchText}> : 10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('a')}
          style={styles.iconStyle}
        >
          <Icon name="wifi" type="font-awesome" color="white" size={35} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconStyle}>
          <Icon name="gear" type="font-awesome" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.scoreCart}>
        <View style={styles.cartHeader}>
          <Text style={styles.cartHeaderText}>HOME</Text>
          <View style={styles.cartTimer}>
            <Text style={styles.cartTimerText}>03:00</Text>
          </View>
          <Text style={styles.cartHeaderText}>AWAY</Text>
        </View>
        <View style={styles.cartBody}>
          <View style={styles.cartBodyBg}>
            <Text style={styles.cartBodyText}>20</Text>
          </View>
          <View style={styles.cartBodyIcons}>
            <Icon
              name="pause-circle"
              type="font-awesome"
              color="white"
              size={41}
            />
            <Icon
              name="play-circle"
              type="font-awesome"
              color="white"
              size={41}
            />
          </View>
          <View style={styles.cartBodyBg}>
            <Text style={styles.cartBodyText}>07</Text>
          </View>
        </View>
        <View style={styles.cartFooter}>
          <Icon
            style={styles.footerCaret}
            name="caret-left"
            type="font-awesome"
            color="white"
            size={40}
          />
          <View style={styles.cartFooterBg}>
            <Text style={styles.cartFooterText}>1</Text>
          </View>
          <View style={styles.cartFooterBg}>
            <Text style={styles.cartFooterText}>2</Text>
          </View>
          <View style={styles.cartFooterBg}>
            <Text style={styles.cartFooterText}>3</Text>
          </View>
          <View style={styles.cartFooterBg}>
            <Text style={styles.cartFooterText}>4</Text>
          </View>

          <Icon
            style={styles.footerCaret}
            name="caret-right"
            type="font-awesome"
            color="white"
            size={40}
          />
        </View>
      </View>
      <View style={styles.baseMentStyle}>
        <Image
          style={styles.hockeyLogo}
          source={require('../../../assets/hockeylogo.png')}
        />
        <View style={styles.basementTextBg}>
          <Text style={styles.basementText}>Get your game on!</Text>
        </View>
        <Icon name="volume-up" type="font-awesome" color="white" size={40} />
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.logoContainerLeft}>
          <View style={styles.logoTopRow}>
            <Text style={styles.logoText}>LOS ANGELES LAKERS</Text>
            <TouchableOpacity
              style={[
                styles.logoBg,
                { borderColor: team ? 'red' : 'goldenrod' },
              ]}
              onPress={() => setTeam(!team)}
            >
              <Image
                style={styles.logo}
                source={require('../../../assets/hockeylogo.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.logoMiddleRow}>
            <View style={styles.countBg}>
              <Text style={styles.countText}>2</Text>
            </View>
          </View>
          <View style={styles.logoBottomRow}>
            <View style={[styles.countBg, { borderColor: '#035f9d' }]}>
              <Text style={styles.countText}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.logoContainerLeft}>
          <View style={[styles.logoTopRow, { justifyContent: 'flex-start' }]}>
            <TouchableOpacity
              style={[
                styles.logoBg,
                { borderColor: !team ? 'red' : 'goldenrod' },
              ]}
              onPress={() => setTeam(!team)}
            >
              <Image
                style={styles.logo}
                source={require('../../../assets/hockeylogo.png')}
              />
            </TouchableOpacity>

            <Text
              style={[
                styles.logoText,
                { textAlign: 'right', width: wp('15%') },
              ]}
            >
              NEW YORK KICKS
            </Text>
          </View>
          <View style={styles.logoMiddleRow}>
            <View style={[styles.countBg, { borderColor: 'white' }]}>
              <Text style={styles.countText}>2</Text>
            </View>
          </View>
          <View style={[styles.logoBottomRow, { alignItems: 'flex-start' }]}>
            <View style={[styles.countBg, { borderColor: 'white' }]}>
              <Text style={styles.countText}>3</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnBg}>
        <Text style={styles.btnText}>SHOOTING FOUL</Text>
      </View>
      <View style={styles.bottomBtnContainer}>
        <View style={styles.bottomBtn}>
          <Text style={styles.bottomBtnText}>TIME OUT</Text>
        </View>
        <TouchableOpacity
          style={styles.bottomBtnImgBg}
          onPress={() => console.log('s')}
        >
          <Icon name="bell" type="font-awesome" color="red" size={18} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  shareReplyIcon: {
    flexDirection: 'row',
  },
  replyIcon: {
    marginRight: wp('4%'),
  },

  iconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stopWatchContainer: {
    backgroundColor: 'black',
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('1%'),
    borderRadius: wp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.7,
  },

  stopWatchText: {
    fontSize: 40,
    fontFamily: 'American Typewriter',
    color: 'white',
    fontWeight: '500',
  },
  scoreCart: {
    backgroundColor: '#1E79A9',
    height: wp('55%'),
    width: wp('90%'),
    justifyContent: 'space-between',
    marginLeft: wp('5%'),
    marginVertical: wp('3%'),
    borderWidth: wp('2%'),
    borderColor: '#D77D00',
    borderRadius: wp('3%'),
    opacity: 0.8,
    padding: wp('3%'),
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cartHeaderText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
    marginBottom: wp('2%'),
  },
  cartTimer: {
    backgroundColor: 'black',
    marginHorizontal: wp('4%'),
    paddingVertical: wp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('9%'),
    opacity: 0.8,
  },
  cartTimerText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
  },
  cartBody: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cartBodyIcons: {
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('22%'),
  },
  cartBodyBg: {
    backgroundColor: 'black',
    paddingHorizontal: wp('5%'),
    borderRadius: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  cartBodyText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: wp('3%'),
    alignItems: 'center',
  },
  cartFooterBg: {
    backgroundColor: 'black',
    marginHorizontal: wp('1%'),
    height: wp('8%'),
    width: wp('8%'),
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartFooterText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  footerCaret: {
    marginHorizontal: wp('2%'),
  },
  baseMentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  hockeyLogo: {
    height: wp('14%'),
    width: wp('14%'),
  },
  basementTextBg: {
    width: wp('55%'),
    backgroundColor: 'black',
    opacity: 0.5,
    paddingVertical: wp('5%'),
    paddingLeft: wp('5%'),
    borderRadius: wp('8%'),
    borderBottomLeftRadius: 0,
  },
  basementText: {
    fontSize: 17,
    fontWeight: '300',
    color: 'white',
    opacity: 1,
  },
  logoContainer: {
    marginVertical: wp('7%'),
    paddingHorizontal: wp('2%'),
    flexDirection: 'row',
  },
  logoContainerLeft: {
    width: wp('48%'),
    paddingHorizontal: wp('2%'),
  },
  logoTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoText: {
    width: wp('20%'),
    color: 'white',
    fontWeight: 'bold',
  },
  logoBg: {
    backgroundColor: 'white',
    height: wp('23%'),
    width: wp('23%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp('1.5%'),
    borderColor: '#goldenrod',
    borderRadius: wp('13%'),
  },
  logo: {
    height: wp('16%'),
    width: wp('16%'),
  },
  countBg: {
    alignItems: 'center',
    justifyContent: 'center',
    height: wp('20%'),
    width: wp('20%'),
    backgroundColor: 'black',
    borderWidth: wp('1.7%'),
    borderColor: '#D77D00',
    borderRadius: wp('10%'),
  },
  countText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  logoMiddleRow: {
    alignItems: 'center',
  },
  logoBottomRow: {
    alignItems: 'flex-end',
  },
  btnBg: {
    backgroundColor: 'black',
    width: wp('80%'),
    marginHorizontal: wp('10%'),
    paddingVertical: wp('3%'),
    borderRadius: wp('10%'),
    opacity: 0.7,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  bottomBtnContainer: {
    width: wp('80%'),
    marginHorizontal: wp('10%'),
    marginVertical: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomBtn: {
    backgroundColor: 'black',
    opacity: 0.7,
    paddingVertical: wp('3%'),
    borderRadius: wp('10%'),
    width: wp('50%'),
  },
  bottomBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomBtnImgBg: {
    backgroundColor: 'white',
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('6%'),
  },
  bottomBtnImg: {
    height: wp('12%'),
    width: wp('12%'),
  },
})
