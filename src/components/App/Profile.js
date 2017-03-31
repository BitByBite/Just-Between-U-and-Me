import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView
} from 'react-native';
import Wallpaper from '../Wallpaper';
import BottomNav from './BottomNav';
import ProfileInfo from './ProfileInfo';
import TopNav from './TopNav';

export default class Profile extends Component {
	render() {
		return (
			<View style={styles.top}>
				<ScrollView>
					<ProfileInfo />
					<TopNav />
				</ScrollView>
				<BottomNav />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  	top: {
		flex: 1
  	}
});
