import React, { Component, PropTypes } from 'react';
import Button from 'react-native-button'
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  Alert,
} from 'react-native'

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class ContactUs extends Component {
	render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Don't have us at your school?</Text>
        <View style={width=2}/>
        <Text style={styles.text2} onPress={()=> Linking.openURL('https://facebook.com')}> Contact us</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    top: 30,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 25,
  },
  text: {
    color: '#000',
    fontFamily: 'Avenir-Light',
    backgroundColor: 'transparent',
    letterSpacing: 1.6
  },
    text2: {
    color: 'white',
    fontFamily: 'Avenir-Heavy',
    backgroundColor: 'transparent',
    letterSpacing: 1.6
  },
});
