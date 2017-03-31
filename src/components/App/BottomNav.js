import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';

import Profile from './Profile';
import Ask from './Ask';

//Bar is positioned with padding someone needs to fix so looks the same on all devices
export default class BottomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: ''
        };
    }

    render() {
        return (
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Home'}
                        title="Home"
                        renderIcon={() => <Image source={require('../img/Home.png')} style={styles.icon} />}
                        onPress={() => this.setState({ selectedTab: 'Home' }, Actions.app)}>
                        <Profile />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Ask'}
                        title="Ask"
                        renderIcon={() => <Image source={require('../img/Mail.png')} style={styles.icon} />}
                        onPress={(() => this.setState({ selectedTab: 'Ask'}), Actions.ask)}>
                        <Ask />
                    </TabNavigator.Item>
                </TabNavigator>
        );
    }
}

const styles=StyleSheet.create({
    bar: {
      alignSelf: 'stretch',
      height: 50,
      backgroundColor: '#fff',
      opacity: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent',
      borderWidth: 1,
    },
    icon: {
      height: 25,
      width: 25
    }
});
