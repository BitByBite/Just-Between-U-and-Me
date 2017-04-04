import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Panel from '../Panel';
import CommentPanels from './CommentPanels';
import TabNav from './TabNav';


//Bar is positioned with padding someone needs to fix so looks the same on all devices
export default class TopNav extends Component {

    render() {
        return (
            <View>
                <View style={styles.bar}>
                    <Image style={styles.icon1} source={require('../img/Questions.png')} />
                    <Image style={styles.icon2} source={require('../img/Answers.png')} />
                    <Image style={styles.icon3} source={require('../img/Likes.png')} />
                </View>
                    <TabNav />
            </View>
        );
    }
}

const styles = {
  bar: {
    alignSelf: 'stretch',
    height: 25,
    backgroundColor: '#fff',
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderWidth: 1,
    paddingTop: 10
  },
  pages: {
    alignSelf: 'stretch',
    height: 300,
    backgroundColor: '#fff',
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderWidth: 1,
  },
  icon1: {
    height: 25,
    width: 25,
    alignSelf: 'center'
  },
  icon2: {
    height: 25,
    width: 25,
    alignSelf: 'center'
  },
  icon3: {
    height: 25,
    width: 25,
    alignSelf: 'center'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingTop: 180,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1
  },
  questions: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 0
  },
};
