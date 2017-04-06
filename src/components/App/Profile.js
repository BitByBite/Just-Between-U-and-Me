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
import ParallaxView from 'react-native-parallax-view';
import bgSrc from '../img/Background.png';
import CommentPanels from './CommentPanels';
import TabNav from './TabNav';

export default class Profile extends Component {
	render() {
		return (
			<View style={styles.backdrop}>
				<ParallaxView
					backgroundSource={bgSrc}
					windowHeight={200}
					header={(
						<ProfileInfo />
					)}
				>
					<TopNav />
				</ParallaxView>
				<BottomNav tabNumber={0} />
			</View>
		);
	}
}

var styles = StyleSheet.create({
	backdrop: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',

	},
});
