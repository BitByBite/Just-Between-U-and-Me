import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,
	LinkingIOS
} from 'react-native';



export default class SignupSection extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Don't have us at your school?</Text>
				<View style={width=2}/>
				<Text style={styles.text2} onPress={()=> LinkingIOS.openURL('http://www.bitbybite.co')}> Contact us</Text>
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
