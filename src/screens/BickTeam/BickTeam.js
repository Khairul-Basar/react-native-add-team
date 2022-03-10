import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function BickTeam() {
  const [topCardLogo, setTopCardLogo] = useState('Grizzly Bears');
  const [bottomCardLogo, setBottomCardLogo] = useState('Tiger');
  const [isEnabled, setIsEnabled] = useState(false);
  const [matchCount, setMatchCount] = useState(2);

  const cardData = [
    {
      name: 'Grizzly Bears',
      logo: require('../../../assets/logoLion.png'),
      avater: require('../../../assets/asset2.png'),
      playerName: 'Dane225',
    },
    {
      name: 'Roosters',
      logo: require('../../../assets/logoLion.png'),
      avater: require('../../../assets/asset6.png'),
      playerName: 'Jane235',
    },
    {
      name: 'Tiger',
      logo: require('../../../assets/logoLion.png'),
      avater: require('../../../assets/asset2.png'),
      playerName: 'Dane212',
    },
    {
      name: 'Wild Roosters',
      logo: require('../../../assets/logoLion.png'),
      avater: require('../../../assets/asset6.png'),
      playerName: 'Jane333',
    },
    {
      name: 'Wild Cats',
      logo: require('../../../assets/logoLion.png'),
      avater: require('../../../assets/asset2.png'),
      playerName: 'Dane222',
    },
    {
      name: 'Leopard',
      logo: require('../../../assets/logoLion.png'),
      avater: require('../../../assets/asset6.png'),
      playerName: 'Jane111',
    },
    {
      name: 'Jaguar',
      logo: require('../../../assets/logoLion.png'),
      avater: require('../../../assets/asset2.png'),
      playerName: 'Jane432',
    },
  ];
  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={styles.cardHead}>
        <Text style={styles.cardTitle}>Home Team</Text>
        <TouchableOpacity>
          <Text style={styles.cardLink}>ADD TEAM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardGroup}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {cardData.map(card => (
            <View key={card.name} style={styles.card}>
              <TouchableOpacity
                style={
                  topCardLogo === card.name
                    ? styles.activeLogoBg
                    : styles.logoBg
                }
                onPress={() => setTopCardLogo(card.name)}>
                <Image style={styles.logo} source={card.logo} />
              </TouchableOpacity>
              <Text style={styles.logoName}>{card.name}</Text>
              <View style={styles.avaterBg}>
                <Image style={styles.avater} source={card.avater} />
              </View>
              <Text style={styles.avaterName}>{card.playerName}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.cardHead}>
        <Text style={styles.cardTitle}>Away Team</Text>
        <TouchableOpacity>
          <Text style={styles.cardLink}>ADD TEAM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardGroup}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {cardData.map(card => (
            <View key={card.name} style={styles.card}>
              <TouchableOpacity
                style={
                  bottomCardLogo === card.name
                    ? styles.activeLogoBg
                    : styles.logoBg
                }
                onPress={() => setBottomCardLogo(card.name)}>
                <Image style={styles.logo} source={card.logo} />
              </TouchableOpacity>
              <Text style={styles.logoName}>{card.name}</Text>
              <View style={styles.avaterBg}>
                <Image style={styles.avater} source={card.avater} />
              </View>
              <Text style={styles.avaterName}>{card.playerName}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.rowText}>Sound Effects</Text>
        <Switch
          trackColor={{false: 'white', true: 'white'}}
          thumbColor={isEnabled ? 'green' : 'black'}
          ios_backgroundColor="white"
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.rowText}>
          Match Length <Text style={styles.subText}>(Half in min)</Text>
        </Text>
        <View style={styles.matchCount}>
          <TouchableOpacity onPress={() => setMatchCount(2)}>
            <Text
              style={
                matchCount === 2
                  ? styles.selectedMatchCountNum
                  : styles.matchCountNum
              }>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMatchCount(3)}>
            <Text
              style={
                matchCount === 3
                  ? styles.selectedMatchCountNum
                  : styles.matchCountNum
              }>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMatchCount(5)}>
            <Text
              style={
                matchCount === 5
                  ? styles.selectedMatchCountNum
                  : styles.matchCountNum
              }>
              5
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnBg}>
          <Text style={styles.btnText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  cardHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  cardLink: {
    color: 'white',
    fontWeight: '300',
    opacity: 0.5,
  },
  cardGroup: {
    height: wp('53%'),
    marginTop: wp('3%'),
    marginBottom: wp('7%'),
  },
  card: {
    backgroundColor: 'black',
    width: wp('30%'),
    alignItems: 'center',
    padding: wp('4%'),
    marginRight: wp('2%'),
    borderRadius: wp('2%'),
    opacity: 0.7,
  },
  logoBg: {
    backgroundColor: 'black',
    height: wp('18%'),
    width: wp('18%'),
    borderRadius: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeLogoBg: {
    backgroundColor: 'black',
    height: wp('18%'),
    width: wp('18%'),
    borderRadius: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: wp('1%'),
  },

  logo: {
    height: wp('15%'),
    width: wp('15%'),
  },
  logoName: {
    color: 'white',
    marginVertical: wp('2%'),
  },
  avaterBg: {
    marginTop: wp('2%'),
    backgroundColor: 'black',
    height: wp('10%'),
    width: wp('10%'),
    borderRadius: wp('10%'),
    alignItems: 'center',
  },
  avater: {
    height: wp('9%'),
    width: wp('9%'),
  },
  avaterName: {
    color: 'white',
    fontWeight: '300',
    marginTop: wp('1%'),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: wp('.1%'),
    borderColor: 'white',
    paddingBottom: wp('2%'),
    marginBottom: wp('5%'),
  },
  rowText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  subText: {
    fontSize: 12,
    fontWeight: '500',
  },
  matchCount: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('30%'),
    justifyContent: 'space-evenly',
  },
  matchCountNum: {
    color: 'white',
    fontSize: 17,
    marginHorizontal: wp('1%'),
  },
  selectedMatchCountNum: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    marginHorizontal: wp('1%'),
  },
  btnContainer: {
    alignItems: 'center',
    opacity: 0.7,
  },
  btnBg: {
    backgroundColor: 'black',
    width: wp('50%'),
    paddingVertical: wp('3%'),
    borderRadius: wp('10%'),
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
