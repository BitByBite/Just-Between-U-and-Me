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
            <View style={styles.bar}>
                <View style={styles.images}>
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
    backgroundColor: '#fff',
    paddingTop: 10,
    height: 1000 //ya this code is not good
  },
  icon1: {
    height: 25,
    width: 25,
  },
  icon2: {
    height: 25,
    width: 25,
  },
  icon3: {
    height: 25,
    width: 25,
  },
  images: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'stretch',
  }
};
