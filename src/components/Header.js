import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'rgb(250,250,250)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Avenir',
    }
});