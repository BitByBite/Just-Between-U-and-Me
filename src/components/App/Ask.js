import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import BottomNav from './BottomNav';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabNavigator from 'react-native-tab-navigator';
import Header from '../Header';
import AnswerPage from '../AnswerPage';
import AskPage from '../AskPage';

export default class Ask extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            question: '',
            description: '',
            selectedTab: ''

        });
    }
    onPressButton() {

    }
    render() {
        return (
            <View style={styles.backdrop}>
                <Header
                    text={<Text style={styles.text}>Just Between <Text style={styles.textBold}>U</Text> and <Text style={styles.textBold}>Me</Text></Text>}
                />
                <ScrollableTabView style={styles.page}>
                  <AskPage styles={styles.page} tabLabel={'Ask'} />
                  <AnswerPage style={styles.page} tabLabel={'Answer'} />
                </ScrollableTabView>
                <BottomNav />
            </View>
        );
    }
}

const styles = {
    backdrop: {
        backgroundColor: '#D3D3D3',
        flex: 1,
    },
    text: {
        color: 'black',
        fontFamily: 'Avenir',
        fontSize: 17
    },
    textBold: {
        color: 'black',
        fontFamily: 'Avenir-Heavy',
        fontSize: 17,
        fontWeight: 'bold'
    },
    page: {
      flex: 1,
    },
}
