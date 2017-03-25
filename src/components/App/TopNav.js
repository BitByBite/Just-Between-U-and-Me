import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import Panel from '../Panel';

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
            <View style={styles.slide}>
              <ScrollView style={styles.questions}>
                <Panel title="A Panel with short content text" loveCounter={12} responseCounter={7}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Panel>
                <Panel title="I am currently having trouble making dank memes pls help no lov so ronry" loveCounter={12} responseCounter={7}>
                  <Text>forgive english, i am Russia.i come to study clothing and fashion at American university. i am here little time and i am very hard stress. i am gay also and this very difficult for me, i am very religion person. i never act to be gay with other men before. but after i am in america 6 weeks i am my friend together he is gay also. He was show me American fashion and then we are kiss.
                </Text>
                </Panel>
                <Panel title="Another Panel" loveCounter={0} responseCounter={7}>
                  <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>
              </ScrollView>
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

const styles = {
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
    opacity: .2
  },
  icon3: {
    height: 25,
    width: 25,
    opacity: .2
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingTop: 180,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1
  },
  questions: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 0
  },
};
