import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import BottomNav from './BottomNav';

export default class Ask extends Component {
    render() {
        return (
            <View>
                <View>
                    <View>
                        <View style={styles.views}>
                            <TextInput style={styles.smallText}/>
                        </View>

                        <View style={styles.views}>
                            <TextInput style={styles.largeText} multiline={true}/>
                        </View>
                    </View>
                </View>
                <View>
                    <BottomNav />
                </View>
            </View>
        );
    }
}

const styles={
  views: {
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25

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
