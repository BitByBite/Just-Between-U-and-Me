import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	Text
} from 'react-native';
import BottomNav from './BottomNav';
import ProfileInfo from './ProfileInfo';
import TopNav from './TopNav';
import ParallaxView from 'react-native-parallax-view';
import bgSrc from '../img/Background.png';
import CommentPanels from './CommentPanels';
import TabNav from './TabNav';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class Profile extends Component {

	render() {
	  return (
		  <View style={styles.backdrop}>
		    <ParallaxScrollView
				backgroundColor="white"
		      	contentBackgroundColor="pink"
		      	parallaxHeaderHeight={300}
		      	renderForeground={() => (
		          <ProfileInfo />
		      )}
			  renderStickyHeader={() => (
				  <View style={{height: 83}}>
	   	          <TopNav />
				  </View>
			  )}
			  stickyHeaderHeight={80}
			  >
			  <CommentPanels />
		    </ParallaxScrollView>
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
