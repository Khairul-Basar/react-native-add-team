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

export default function AhmadOne() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CHRISTOPHER AHMAD, MD</Text>
        <Text style={styles.subTitle}>Shoulder, Elbow & Sports Medicine</Text>
      </View>
      <View style={styles.headPara}>
        <Text style={styles.headText}>
          Dr. Christopher Ahmad is one ot the world's top orthopedic surgeons,
          Head Team Physician for the New York Yankees & NYCFC, and author of
          the book SKILL.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Christopher S. Ahmad, MD, specializes in knee ACL, meniscus, and
          cartilage injuries, Shoulder instability and labral tears, rotator
          cuff pathology, Tommy John surgery, and advanced arthroscopic surgical
          techniques for sports-related injuries of the knee, shoulder and
          elbow. He is the Head Team Physician for the New York Yankees and a
          member of the Major League Baseball Team Physicians Association. He is
          also Head Team Physician fot the Rockland Boulders as well as for
          several high schools in Manhattan and New Jersey.
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>visit website</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: wp('7%'),
    width: wp('55%'),
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  subTitle: {
    color: 'white',
  },
  headPara: {
    marginTop: wp('10%'),
    paddingLeft: wp('7%'),
    width: wp('85%'),
  },
  headText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  card: {
    backgroundColor: 'black',
    margin: wp('7%'),
    padding: wp('7%'),
    borderRadius: wp('2%'),
    opacity: 0.4,
  },
  cardText: {
    color: 'white',
    textAlign: 'left',
  },
  btn: {
    backgroundColor: 'black',
    opacity: 0.7,
    marginHorizontal: wp('7%'),
    paddingVertical: wp('4%'),
    borderRadius: wp('8%'),
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
