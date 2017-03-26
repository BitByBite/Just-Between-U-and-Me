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
			<View style={{flex: 1}}>
				<ProfileInfo />
				<TopNav />
				<BottomNav />
			</View>
		);
	}
}

const styles = {
questions: {
  flex: 1,
  backgroundColor: 'transparent',
  paddingTop: 0
},
}
