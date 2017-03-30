import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import BottomNav from './BottomNav';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabNavigator from 'react-native-tab-navigator';

export default class Ask extends Component {
    constructor(props) {
	    super(props);
			this.state = ({ question: '',
            description: '',
            selectedTab: ''

        });
    }
    onPressButton() {

    }
    render() {
        return (
            <View style={styles.backdrop}>
                <View style={styles.top}>
                    <View style={styles.logo}>
                        <Text style={styles.text}>Just Between </Text>
                        <Text style={styles.textBold}>You </Text>
                        <Text style={styles.text}>and </Text>
                        <Text style={styles.textBold}>Me</Text>
                    </View>
                    <View style={styles.bar}>
                        <TabNavigator>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'Ask'}
                                title=" "
                                renderIcon={() => <Text>Ask</Text>}>
                            </TabNavigator.Item>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'Answer'}
                                title=" "
                                renderIcon={() => <Text>Answer</Text>}>
                            </TabNavigator.Item>
                        </TabNavigator>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.views}>
                        <TextInput
                        style={styles.smallText}
                        placeholder='Question Title'
    					returnKeyType='next'
    					placeholderTextColor='white'
    					underlineColorAndroid='transparent' />
                    </View>
                    <View style={styles.views}>
                        <TextInput
                        style={styles.largeText}
                        placeholder='Description'
                        returnKeyType='next'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                        multiline={true} />
                    </View>
                    <View style={styles.button}>
                        <Button title={'Ask Question'} onPress={this.onPressButton} />
                    </View>
                </View>
                <BottomNav />
            </View>
        );
    }
}

const styles={
    backdrop: {
        paddingTop: 50,
        backgroundColor: '#DCDCDC',
        paddingHorizontal: 5
    },
    top: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bar: {
      alignSelf: 'stretch',
      height: 50,
      backgroundColor: '#fff',
      opacity: 0.8,
      flexDirection: 'row',
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
    bottom: {
        backgroundColor: 'white',
        paddingBottom: 50,
        paddingHorizontal: 10
    },
    views: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        borderTopColor: 'black',
        borderBottomWidth: 1
    },
    button: {
        paddingBottom: 10,
        borderTopColor: 'black',
    },
    smallText: {
        height: 50,
        backgroundColor: '#DCDCDC',
        borderWidth: 2,
        borderColor: '#DCDCDC',
        borderRadius: 5,
        paddingRight: 50,
        paddingLeft: 50,

    },
    largeText: {
        height: 300,
        backgroundColor: '#DCDCDC',
        borderWidth: 2,
        borderColor: '#DCDCDC',
        borderRadius: 5,
        paddingRight: 50,
        paddingLeft: 50,
        fontSize: 15
    }
}
