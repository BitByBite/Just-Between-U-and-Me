import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Linking
} from 'react-native';

const Dimensions = require('./Dimensions');

export default class SignupSection extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Don't have us at your school?</Text>
				<View style={width=2}/>
				<Text style={styles.text2} onPress={()=> {
					let url = 'http://www.bitbybite.co';
					if(Linking.canOpenURL(url)) {
						Linking.openURL(url);
					}
				}}> Contact us</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 2,
		top: 30,
		width: Dimensions.WIDTH,
		height: Dimensions.HEIGHT,
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
