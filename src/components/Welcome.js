import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.text}>
          The following questions will be used to set up your profile.
          <Text style={{fontWeight: 'bold'}}> None</Text> of the following information will be shared to other users, your
          <Text style={{fontWeight: 'bold'}}> privacy</Text> is our priority!
        </Text>
        <TouchableOpacity onPress={Actions.relationships}>
          <Text style={styles.continue}>Continue!</Text>
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
  welcome: {
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
  continue: {
    paddingTop: 50,
    fontSize: 32,
    color: '#419BF9'
  }
};
