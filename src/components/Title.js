import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Just Between <Text style={styles.text2}>You</Text> and <Text style={styles.text2}>Me</Text></Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'black',
		fontFamily: 'Avenir-Light',
		backgroundColor: 'transparent',
	},
		text2: {
		color: 'black',
		fontFamily: 'Avenir-Heavy',
		backgroundColor: 'transparent',
	}
});
