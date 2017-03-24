import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';


//Bar is positioned with padding someone needs to fix so looks the same on all devices
export default class TopNav extends Component {
constructor() {
  super()
  this.state = ({
    opacity1: 0,
    opacity2: .2,
    opacity3: .2,
    index: 1
  });

}
  render() {
    return (
      <View>
        <View style={styles.bar}>
          <TouchableOpacity>
            <Image onPress={Actions.loginScreen} style={styles.icon1} source={require('../img/Questions.png')} />
            <Text style={styles.text}>Questions</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.icon2} source={require('../img/Answers.png')} />
            <Text>Answered</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image onPress={Actions.loginScreen} style={styles.icon3} source={require('../img/Likes.png')} />
            <Text>Liked</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pages}>
          <Swiper style={styles.wrapper}
           showsButtons={true}
           loop={false}
           pager={true}
           >
            <Text>1</Text>
            <View style={styles.slide2}>
            <Text>2</Text>
            </View>
            <View style={styles.slide3}>
            <Text>3</Text>
            </View>
          </Swiper>
        </View>
        </View>
    );
  }
}

const styles={
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
      borderWidth: 1,
    },
    pages: {
      alignSelf: 'stretch',
      height: 300,
      backgroundColor: '#fff',
      opacity: 0.8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent',
      borderWidth: 1,
    },
    icon1: {
      height: 25,
      width: 25,
      opacity: 1
    },
    icon2: {
      height: 25,
      width: 25,
      opacity:  .2
    },
    icon3: {
      height: 25,
      width: 25,
      opacity: .2
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    text: {
      fontSize: 12,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1
    }
};
