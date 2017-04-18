import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Panel from '../Panel';

//Bar is positioned with padding someone needs to fix so looks the same on all devices
export default class CommentPanels extends Component {
    render() {
        return (
            <View style={styles.questions}
                scroll={this.props.scroll}>
                <Panel title="A Panel with short content text" loveCounter={12} responseCounter={7}
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Panel title="I am currently having trouble making dank memes pls help no lov so ronry" loveCounter={12} responseCounter={7}
                    body="forgive english, i am Russia.i come to study clothing and fashion at American university. i am here little time and i am very hard stress. i am gay also and this very difficult for me, i am very religion person. i never act to be gay with other men before. but after i am in america 6 weeks i am my friend together he is gay also. He was show me American fashion and then we are kiss."
                    />
                <Panel title="Another Panel" loveCounter={0} responseCounter={7}
                body='Lorem ipsum dolor sit amet...'
                />
            </View>
        );
    }
}

CommentPanels.propTypes = {
    scroll: PropTypes.bool
};


const styles = {
    questions: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        paddingBottom: 60
    }
}
