/* @flow */

import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	AppRegistry,
	View,
	Text,
} from 'react-native';
const B = (props) => <Text style={styles.textBold}>{props.children}</Text>

const Logo = (props) => {
		return (

			<View style={styles.container}>
				<Text style={styles.text}>
				Just Between <B>You </B>and <B>Me</B>
				</Text>
			</View>

		);
}

const styles = StyleSheet.create({
	container: {
		flex: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontFamily: 'Avenir-Light',
		backgroundColor: 'transparent',
		marginTop: 20,
		fontSize: 26,
		letterSpacing: 2
	},
	textBold: {
		color: 'white',
		fontFamily: 'Avenir-Heavy',
		backgroundColor: 'transparent',
		marginTop: 20,
		fontSize: 26,
		letterSpacing: 2
	}

});

export default Logo
