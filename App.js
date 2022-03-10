import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function App() {
  const [teamLogoName, setTeamLogoName] = useState('New Brunswick Bears');
  const [topPlayerName, setTopPlayerName] = useState('Jane245');
  const [bottomPlayerName, setBottomPlayerName] = useState('Dan135');

  const teamLogo = [
    {
      id: 12,
      name: 'New Brunswick Tiger',
      img: require('./assets/logoLion.png'),
    },
    {
      id: 23,
      name: 'New Brunswick Fox',
      img: require('./assets/logoLion.png'),
    },
    {
      name: 'New Brunswick Bears',
      img: require('./assets/logoLion.png'),
    },
    {
      id: 34,
      name: 'New Wild Cat',
      img: require('./assets/logoLion.png'),
    },
    {
      id: 45,
      name: 'New Wild Fox',
      img: require('./assets/logoLion.png'),
    },
    {
      id: 56,
      name: 'New Extrem Tiger',
      img: require('./assets/logoLion.png'),
    },
  ];

  const players = [
    {
      id: 12,
      name: 'Dan135',
      img: require('./assets/asset2.png'),
    },
    {
      id: 23,
      name: 'Jane245',
      img: require('./assets/asset6.png'),
    },
    {
      name: 'Dan165',
      img: require('./assets/asset2.png'),
    },
    {
      id: 34,
      name: 'Jane278',
      img: require('./assets/asset6.png'),
    },
    {
      id: 45,
      name: 'Dan336',
      img: require('./assets/asset2.png'),
    },
    {
      id: 56,
      name: 'Jane239',
      img: require('./assets/asset6.png'),
    },
  ];

  return (
    <ImageBackground
      source={require('./assets/backgroundSoccer.png')}
      style={styles.container}>
      <SafeAreaView style={styles.topContainer}>
        <Text style={styles.pageTitle}>Add Team</Text>
        <View style={styles.topTitleContainer}>
          <Text style={styles.topTitle}>{teamLogoName}</Text>
        </View>

        <View style={styles.teamLogoGroup}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {teamLogo.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setTeamLogoName(item.name)}>
                <View
                  style={
                    teamLogoName === item.name
                      ? styles.logoActiveBg
                      : styles.logoBg
                  }>
                  <Image
                    style={styles.logo}
                    source={require('./assets/logoLion.png')}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.logoText}>select team logo</Text>

        <View style={styles.titleContainer}>
          <Text style={styles.topTitle}>{topPlayerName}</Text>
          <TouchableOpacity>
            <Text style={styles.titleLink}>ADD PLAYER</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.suggestionsText}>Suggestions:</Text>

        <View style={styles.logoPlayerGroup}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {players.map(player => (
              <TouchableOpacity
                key={player.id}
                onPress={() => setTopPlayerName(player.name)}>
                <View style={styles.logoPlayerWrap}>
                  <View
                    style={
                      topPlayerName === player.name
                        ? styles.logoActiveBg
                        : styles.logoBg
                    }>
                    <Image style={styles.logoPlayer} source={player.img} />
                  </View>
                  <Text style={styles.playerName}>{player.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.topTitle}>{bottomPlayerName}</Text>
          <TouchableOpacity>
            <Text style={styles.titleLink}>ADD PLAYER</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.suggestionsText}>Suggestions:</Text>

        <View style={styles.logoPlayerGroup}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {players.map(player => (
              <TouchableOpacity
                key={player.id}
                onPress={() => setBottomPlayerName(player.name)}>
                <View style={styles.logoPlayerWrap}>
                  <View
                    style={
                      bottomPlayerName === player.name
                        ? styles.logoActiveBg
                        : styles.logoBg
                    }>
                    <Image style={styles.logoPlayer} source={player.img} />
                  </View>
                  <Text style={styles.playerName}>{player.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.btnDoneContainer}>
          <TouchableOpacity style={styles.btnDone}>
            <Text style={styles.btnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: wp('7%'),
  },
  pageTitle: {
    color: 'white',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 20,
  },
  topTitleContainer: {
    marginTop: wp('10%'),
    borderBottomColor: 'white',
    borderBottomWidth: hp('.05%'),
    width: wp('75%'),
    opacity: 0.8,
  },
  topTitle: {
    fontSize: 15,
    color: 'white',

    paddingBottom: wp('2%'),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: wp('10%'),

    borderBottomColor: 'white',
    borderBottomWidth: hp('.05%'),
    opacity: 0.8,
  },
  titleLink: {
    color: 'white',
    opacity: 0.5,
  },
  suggestionsText: {
    marginTop: wp('3%'),
    color: 'white',
    fontWeight: '300',
  },
  teamLogoGroup: {
    height: hp('8%'),
    marginTop: wp('5%'),
    justifyContent: 'flex-end',
  },
  logoBg: {
    backgroundColor: 'black',
    width: wp('15%'),
    height: wp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('10%'),
    opacity: 0.9,
    marginHorizontal: wp('1%'),
  },
  logoActiveBg: {
    borderColor: 'white',
    borderWidth: wp('1%'),
    backgroundColor: 'black',
    width: wp('15%'),
    height: wp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('10%'),
    opacity: 0.9,
    marginHorizontal: wp('1%'),
  },
  logoPlayerGroup: {
    marginTop: wp('5%'),
    justifyContent: 'flex-end',
  },
  logo: {
    width: wp('12%'),
    height: wp('12%'),
  },
  logoPlayerWrap: {
    alignItems: 'center',
    marginHorizontal: wp('2%'),
  },
  logoPlayer: {
    width: wp('13%'),
    height: wp('13%'),
  },
  playerName: {
    color: 'white',
    fontWeight: '300',
  },
  logoText: {
    marginTop: wp('1%'),
    color: 'white',
    opacity: 0.5,
  },
  btnDoneContainer: {
    marginTop: wp('10%'),
    alignItems: 'center',
    opacity: 0.7,
  },
  btnDone: {
    backgroundColor: 'black',
    width: wp('70%'),
    alignItems: 'center',
    paddingVertical: wp('4%'),
    borderRadius: wp('10%'),
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
