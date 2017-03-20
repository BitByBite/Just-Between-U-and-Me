import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

const SIZE = 40;
const FONT_SIZE = 24;
export default class Relationships extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });

		setTimeout(() => {
		Actions.pop()}, 250);
	}

		_onPress2() {
		setTimeout(() => {
		}, 250);
	}

	render() {
		return (
				<View style={styles.containerButtons}>
					<TouchableOpacity onPress={this._onPress}
						style={styles.button}
						activeOpacity={1}>
						<Text style={styles.text2}>Back</Text>
					</TouchableOpacity>
					<Text style={styles.text}>|</Text>
					<TouchableOpacity onPress={this._onPress2}
						style={styles.button2}
						activeOpacity={1}>
						<Text style={styles.text2}>Next</Text>
					</TouchableOpacity>
				</View>
		);
	}
}

const styles = StyleSheet.create({
		containerButtons: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: `center`,
		paddingBottom: 60,
		flexDirection: `row`
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE*2,
		height: SIZE,
		borderRadius: 100,
		backgroundColor: 'transparent',
	},
	button2: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE*2,
		height: SIZE,
		borderRadius: 100,
		backgroundColor: 'transparent',
	},
	text:
	{
		paddingBottom: 2.5,
		fontSize: FONT_SIZE*1.2,
		color: `grey`,
		fontFamily: `Avenir-Light`,
	},
	text2:
	{
		fontSize: FONT_SIZE,
		color: `#419BF9`,
		fontFamily: `Avenir`,
	},
});