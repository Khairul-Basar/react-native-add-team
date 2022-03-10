import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AddTeam from './src/screens/AddTeam/AddTeam';
import BickTeam from './src/screens/BickTeam/BickTeam';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/backgroundSoccer.png')}
      style={styles.container}>
      {/* <AddTeam></AddTeam> */}
      <BickTeam></BickTeam>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: wp('7%'),
    paddingHorizontal: wp('3%'),
  },
});
