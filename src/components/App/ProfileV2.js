import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Wallpaper from '../Wallpaper';
import BottomNav from './BottomNav';
import ProfileInfo from './ProfileInfo';
import TopNav from './TopNav';
import ParallaxView from 'react-native-parallax-view';
import bgSrc from '../img/Background.png';
import CommentPanels from './CommentPanels';
import TabNav from './TabNav';
import Dimensions from 'Dimensions';


export default class Profile extends Component {

    constructor(props) {
      super(props);

      this.state = {
        scrollY: new Animated.Value(0),
      };
    }

  render() {


      const headerHeight = this.state.scrollY.interpolate({
          inputRange: [0, HEADER_SCROLL_DISTANCE],
          outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
          extrapolate: 'clamp'
      });

      const imageOpacity = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp'
      });
      const imageTranslate = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -50],
        extrapolate: 'clamp'
      });

      return (
            <View style={styles.fill}>
                <ScrollView style={styles.fill}
                    scrollEventThrottle={16}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}
                    scrollEnabled={this._allScroll()}
                >
                <View style={styles.scrollViewContent}>
                    <TopNav
                        scroll={this._bottomScroll}/>
                </View>
                </ScrollView>
                <Animated.View style={[styles.header, {height: headerHeight}]}>
                <Animated.Image
                  style={[
                    styles.backgroundImage,
                    {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
                  ]}
                  alwaysBounceVertical={false}
                  bounces={false}
                  source={require('../img/Background.png')}
                />
                    <ProfileInfo />
                </Animated.View>
                <BottomNav tabNumber={0} />
            </View>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden'
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18
  },
  scrollViewContent: {
      marginTop: HEADER_MAX_HEIGHT
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover'
  }
});
