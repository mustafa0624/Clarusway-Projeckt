/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={styles.container}> */}
      <View style={styles.title1}>
        <View style={styles.grayView}>
          <Text style={styles.orangeCircle}> Orange circle</Text>
          <Text style={styles.yellowBox}> Yellow Box</Text>
        </View>
      </View>

      <View style={styles.title2}>
        <View style={{ flex: 2 }}>
          <Text style={styles.blackBox}> Black Box </Text>
        </View>
        <View style={{ flex: 1, transform: [{ rotate: "-90deg" }] }}>
          <Text style={styles.brownBox}> Brown Box </Text>
        </View>

      </View>

      {/* </View> */}




    </SafeAreaView>
  )
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",

  },
  title1: {
    flex: 1,
    backgroundColor: "red",



  },
  title2: {
    backgroundColor: "pink",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

  },
  grayView: {
    flex: 1,
    backgroundColor: "gray",
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

  },
  orangeCircle: {
    backgroundColor: "orange",
    borderRadius: 1500,
    height: 85,
    width: 85,
    textAlignVertical: "center",
    textAlign: "center"


  },
  yellowBox: {
    backgroundColor: "yellow",
    height: 40,
    borderRadius: 20,
    textAlignVertical: "center",
    width: 90,
    textAlign: "center",
  },
  blackBox: {
    backgroundColor: "black",
    color: "white",
    height: 380,
    width: 190,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 16,
    alignSelf: "center"


  },
  brownBox: {
    backgroundColor: "brown",
    color: "white",
    width: 380,
    height: 60,
    // transform: [{ rotate: "-90deg" }],
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 30,
    alignSelf: "center"
    // display:"flex"
  },


})

export default App;
