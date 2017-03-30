import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import BottomNav from './BottomNav';

export default class Ask extends Component {
    constructor(props) {
	    super(props);
			this.state = ({ question: '',
            description: ''
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
                        underlineColorAndroid='transparent' />
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
        alignItems: 'center'
    },
    logo: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
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
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1
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
    }
}
