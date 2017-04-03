/* @flow */

import React, { Component, PropTypes } from 'react';
import Button from 'react-native-button'
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native'

export default class SocialMediaShareButtons extends Component {
  constructor() {
    super();

    this._onPressFB = this._onPressFB.bind(this);
    this._onPressTWTR = this._onPressTWTR.bind(this);
    this._onPressGOOG = this._onPressGOOG.bind(this);
  }

  _onPressFB() {
    Linking.openURL('https://facebook.com')
	}
  _onPressTWTR() {
    Linking.openURL('https://twitter.com')
  }
  _onPressGOOG() {
    Linking.openURL('https://googe.com')
  }

	render() {
		return (
			<View style={styles.container}>


      <TouchableOpacity style={styles.button}
        onPress={this._onPressFB}
        activeOpacity={1} >

            <Image source={require('../images/Facebook_Icon.png')} style={styles.image} />


      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={this.__onPressTWTR}
        activeOpacity={1} >

            <Image source={require('../images/Twitter_Icon.png')} style={styles.image} />


      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={this._onPressGOOG}
        activeOpacity={1} >

            <Image source={require('../images/GooglePlus_Icon.png')} style={styles.image} />



      </TouchableOpacity>

			</View>
		);

	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 20,

		flexDirection: 'row',
		justifyContent: 'center',
	},
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    overflow:'hidden',
    borderRadius:4,
    padding:50,
    backgroundColor: 'transparent',
    width: 50,
    height: 50,
    borderRadius: 4,
    zIndex: 100,
  },
	text: {
		color: 'white',
		fontFamily: 'Avenir Light',
		backgroundColor: 'transparent',
	},
  image: {
    width: 65,
    height: 65,
  },
});
