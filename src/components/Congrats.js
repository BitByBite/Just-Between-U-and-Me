import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Congrats extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.congrats}>Congrats!</Text>
      <Text style={styles.text}>You have officially completed the setup of your account!
      You may now go on to use the application!</Text>
      <TouchableOpacity onPress={Actions.app}>
        <Text style={styles.start}>Start!</Text>
      </TouchableOpacity>
      </View>

    );
  }
}

const styles={

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  congrats: {
    fontSize: 38,
		fontFamily: 'Avenir',
		textDecorationLine: 'underline',
		letterSpacing: 1.02,
		textDecorationStyle: 'solid',
		textDecorationColor: '#419BF9',
    paddingBottom: 50
  },
  text: {
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 18,
    fontFamily: 'Avenir'
  },
  start: {
    paddingTop: 50,
    fontSize: 32,
    color: '#419BF9'
  }
};
