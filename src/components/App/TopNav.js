import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Panel from '../Panel';
import CommentPanels from './CommentPanels';


//Bar is positioned with padding someone needs to fix so looks the same on all devices
export default class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity1: 1,
            opacity2: .2,
            opacity3: .2
        };
    }

    onPressQuestion = (event) => {
        Actions.CommentPanels,
        this.setState({opacity1: 1, opacity2: .2, opacity3: .2})
    }

    onPressAnswer = (event) => {
        Actions.CommentPanels,
        this.setState({opacity1: .2, opacity2: 1, opacity3: .2})
    }

    onPressLiked = (event) => {
        Actions.CommentPanels,
        this.setState({opacity1: .2, opacity2: .2, opacity3: 1})
    }

    render() {
        return (
            <View>
                <View style={styles.bar}>
                    <View style={{opacity: this.state.opacity1}}>
                        <TouchableOpacity onPress={this.onPressQuestion}>
                            <Image style={styles.icon1} source={require('../img/Questions.png')} />
                            <Text style={styles.text}>Questions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{opacity: this.state.opacity2}}>
                        <TouchableOpacity onPress={this.onPressAnswer} >
                            <Image style={styles.icon2} source={require('../img/Answers.png')} />
                            <Text>Answered</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{opacity: this.state.opacity3}}>
                        <TouchableOpacity onPress={this.onPressLiked}>
                            <Image onPress={Actions.loginScreen} style={styles.icon3} source={require('../img/Likes.png')} />
                            <Text>Liked</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.pages}>
                    <Router>
                        <Scene key="root">
                            <Scene key="QuestionPanels"
                                component={CommentPanels}
                                title="Questions"
                                hideNavBar={true}
                            />
                            <Scene key="AnsweredPanels"
                                component={CommentPanels}
                                title="Answered"
                                hideNavBar={true}
                            />
                            <Scene key="LikedPanels"
                                component={CommentPanels}
                                title="Liked"
                                hideNavBar={true}
                            />
                        </Scene>
                    </Router>
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
    alignSelf: 'center'
  },
  icon2: {
    height: 25,
    width: 25,
    alignSelf: 'center'
  },
  icon3: {
    height: 25,
    width: 25,
    alignSelf: 'center'
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
