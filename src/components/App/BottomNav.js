import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


//Bar is positioned with padding someone needs to fix so looks the same on all devices
export default class BottomNav extends Component {
  render() {
    return (
      <View style={styles.space}>
        <View style={styles.bar}>
          <TouchableOpacity>
            <Image onPress={Actions.loginScreen} style={styles.icon} source={require('../img/Home.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={Actions.ask}>
            <Image style={styles.icon} source={require('../img/Mail.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image onPress={Actions.loginScreen} style={styles.icon} source={require('../img/Person.png')} />
          </TouchableOpacity>


        </View>
      </View>
    );
  }
}

const styles={
    space: {
      justifyContent: 'space-around',
      backgroundColor: '#f3f3f3',
      //This needs to be fixed
      paddingTop: 620
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
