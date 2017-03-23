import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
import Wallpaper from '../Wallpaper';
import BottomNav from './BottomNav';
import ProfileInfo from './ProfileInfo';

export default class Profile extends Component {
	render() {
		return (
      <Wallpaper>
        <ProfileInfo />
        <BottomNav />
      </Wallpaper>
		);
	}
}
