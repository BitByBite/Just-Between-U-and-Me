import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'

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
    changePage(newTabIndex) {
        if (newTabIndex == 0) {
            Actions.app()
        }
        if (newTabIndex == 1) {
            Actions.ask()
        }
        if (newTabIndex == 2) {
            Actions.HomePage()
        }
    }
    render() {
        return (
            <BottomNavigation
                activeLabelColor="black"
                rippleColor="white"
                labelColor="white"
                activeTab={this.props.tabNumber}
                style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
                onTabChange={(newTabIndex) => this.changePage(newTabIndex)}
            >
                <Tab
                    label="Profile"
                    icon={<Image style={styles.icon} source={require('../img/ProfileIconUnselected.png')} />}
                    activeIcon={<Image style={styles.icon} source={require('../img/ProfileIconSelected.png')} />}


                />
                <Tab
                    label="Ask"
                    icon={<Image style={styles.icon} source={require('../img/PostIconUnselected.png')} />}
                    activeIcon={<Image style={styles.icon} source={require('../img/PostIconSelected.png')} />}

                />
                <Tab
                    label="Home"
                    icon={<Image style={styles.icon} source={require('../img/HomeIconUnselected.png')} />}
                    activeIcon={<Image style={styles.icon} source={require('../img/HomeIconSelected.png')} />}
                />
            </BottomNavigation>
        );
    }
}
BottomNav.propTypes = {
    tabNumber: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
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
        height: 20,
        width: 20,
    }
});
