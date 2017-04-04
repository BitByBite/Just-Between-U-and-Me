import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	Image,
} from 'react-native';

import bgSrc from '../images/Background.png';

export default class Wallpaper extends Component {
	render() {
		return (
			<Image style={{
				flex: 1,
				resizeMode: 'cover',
				height: null,
				width: null,
				backgroundColor: (this.props.gray ? 'rgba(52, 52, 52, 1)' : null) // needs to be fixed with gray overlay
			}} source={bgSrc}>
				{this.props.children}
			</Image>
		);
	}
}
