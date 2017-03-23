import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
import Wallpaper from '../Wallpaper';
import BottomNav from './BottomNav';
import * as Progress from 'react-native-progress';

export default class ProfileInfo extends Component {


  		constructor() {
  	    super();
  			this.state = ({
          QuestionNumber: '21',
          AnsweredNumber: '12',
          Karma: '84',
          Level: '7' });
}
	render() {
		return (
      <Wallpaper>
			    <Text style={styles.text}>Christine Sanchez</Text>
          <View style={styles.info}>
            <Text style={styles.text2}>{this.state.QuestionNumber}</Text>
            <Text style={styles.text2}>{this.state.AnsweredNumber}</Text>
            <Text style={styles.text2}>{this.state.Karma}</Text>
          </View>
          <View style={styles.info2}>
            <Text style={styles.text3}>Questions</Text>
            <Text style={styles.text3}>Answered  </Text>
            <Text style={styles.text3}>Karma   </Text>
          </View>
          <View style={styles.levelView}>
            <Text style={styles.text}>Level </Text>
            <Text style={styles.text}>{this.state.Level}</Text>
          </View>
          <View style={styles.progressBar}>
            <Progress.Bar
              progress={0.3}
              width={200}
              color={'white'} />
          </View>
      </Wallpaper>
		);
	}
}

const styles = StyleSheet.create({
	info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
	},
  info2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 5
  },
	text: {
		color: 'white',
		fontFamily: 'Avenir',
		backgroundColor: 'transparent',
		marginTop: 20,
		fontSize: 18,
		letterSpacing: 2,
    alignSelf: 'center'
	},
  text2: {
      color: 'white',
  		fontFamily: 'Avenir-Heavy',
  		backgroundColor: 'transparent',
  		marginTop: 20,
  		fontSize: 18,
  		letterSpacing: 2,
      alignSelf: 'center'
	},
  text3: {
    color: 'white',
    fontFamily: 'Avenir-Light',
    backgroundColor: 'transparent',
    fontSize: 12,
    alignSelf: 'center'
  },
  levelView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
