import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import BottomNav from './BottomNav';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabNavigator from 'react-native-tab-navigator';
import Header from '../Header';

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
                <View style={styles.top}>
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
                <View style={styles.bottomBox}>
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
                </View>
                <BottomNav />
            </View>
        );
    }
}

const styles = {
    backdrop: {
        backgroundColor: '#D3D3D3',
        flex: 1
    },
    top: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
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
        borderRadius: 5,
    },
    bottomBox: {
        paddingLeft: 10,
        paddingRight: 10
    },
    views: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1
    },
    button: {
        paddingBottom: 10,
        paddingTop: 15,
    },
    smallText: {
        height: 50,
        backgroundColor: '#DCDCDC',
        borderWidth: 2,
        borderColor: '#DCDCDC',
        borderRadius: 5,
        paddingRight: 25,
        paddingLeft: 25,

    },
    largeText: {
        height: 300,
        backgroundColor: '#DCDCDC',
        borderWidth: 2,
        borderColor: '#DCDCDC',
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 15
    }
}
