import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
	Animated
} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
	constructor(props) {
		super(props);

		this.heart = {
			'fil': require('./img/heartFilled.png'),
			'un': require('./img/heartUnfilled.png'),
		}

		this.state = {
			isLiked: false,
		};
	}

	toggle() {
		this.setState({
			isLiked: !this.state.isLiked
		});

	}

	render() {
		let heart = this.heart['un'];

		if (this.isLiked) {
			heart = this.heart['fil'];
		}
		else {
			heart = this.heart['un'];
		}

		return (
			<View>
				<TouchableHighlight activeOpacity={0} underlayColor={'transparent'}
					style={styles.imgs}
					onPress={() => { this.toggle(); }}
				>
					<Image source={heart} style={styles.plswork} />
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imgs: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 8,
		paddingRight: 6,
		paddingBottom: 2

	},
	plswork: {
		resizeMode: 'contain',
		width: 18,
		height: 18
	}
});