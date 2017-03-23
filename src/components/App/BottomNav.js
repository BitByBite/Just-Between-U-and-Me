import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';


//Bar is positioned with padding someone needs to fix so looks the same on all devices
export default class BottomNav extends Component {
  render() {
    return (
        <View style={styles.bar}>
          <TouchableOpacity>
            <Image onPress={Actions.loginScreen} style={styles.icon} source={require('../img/Home.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={Actions.ask}>
            <Image style={styles.icon} source={require('../img/Mail.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image onPress={Actions.loginScreen} style={styles.icon} source={require('../img/Person.png')} />
            <Image onPress={Actions.App} style={styles.person} source={require('../img/Person.png')} />
          </TouchableOpacity>
        </View>
    );
  }
}

const styles={
    space: {
      justifyContent: 'flex-end',
      backgroundColor: '#f3f3f3',
      paddingTop: 620,
    },
    bar: {
      alignSelf: 'stretch',
      height: 50,
      backgroundColor: '#fff',
      opacity: 0.8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent',
      borderWidth: 1

    },
    icon: {
      height: 25,
      width: 25


    },



};
