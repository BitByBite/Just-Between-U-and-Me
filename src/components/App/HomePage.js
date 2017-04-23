import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import LoginScreen from '../LoginScreen'
import BottomNav from './BottomNav';


export default class HomePage extends Component {
	render() {
		return (
			<View style={styles.backdrop}>
				<BottomNav tabNumber={2} />

			</View>
		);
	}
}

var styles = StyleSheet.create({
	backdrop: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end'
	}
});
