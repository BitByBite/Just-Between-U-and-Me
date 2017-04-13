
import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


export default class AskPage extends Component {
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
          <View style={styles.dropdown}>
            <View style={styles.selectors}>
              <View style={styles.plsWork}>
                <ModalDropdown textStyle={styles.selectorText} defaultValue={'Categories  ∨'} options={['Crippling Depression', 'Osteoperosis']} />
              </View>
            </View>
          <View style={styles.selectors}>
            <View style={styles.plsWork}>
              <ModalDropdown textStyle={styles.selectorText} defaultValue={'Receiver  ∨'} options={['Edups', 'dade', 'kysFag', 'nigger', 'sandNigger']} />
            </View>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.4} onPress={this.onPressButton}>
              <View style={styles.plsWork}>
                <Text style={styles.addTags}>Add Tags</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomBox}>
          <View style={styles.bottom}>
            <View style={styles.views}>
              <TextInput
                  style={styles.smallText}
                  placeholder='Question Title'
                  returnKeyType='next'
                  placeholderTextColor='#BABABA'
                  underlineColorAndroid='transparent' />
            </View>
            <View style={styles.views}>
              <TextInput
                  style={styles.largeText}
                  placeholder='Description'
                  returnKeyType='next'
                  placeholderTextColor='#BABABA'
                  underlineColorAndroid='transparent'
                  multiline={true} />
              </View>
            <View style={styles.button}>
              <Button color={'#BABABA'} title={'Ask Question'} onPress={this.onPressButton} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = {
    backdrop: {
        backgroundColor: '#F3F3F3',
        flex: 1,
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
        borderRadius: 5,
    },
    bottomBox: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#F3F3F3',
    },
    views: {
        paddingTop: 15,
        paddingLeft: 12,
        paddingRight: 12,
        //Also padding-bottom can be added too
        // This can be changed to add a divider between the boxes; change to E5E5E5
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    button: {
        paddingBottom: 10,
        paddingTop: 15
    },
    smallText: {
        height: 50,
        backgroundColor: '#E5E5E5',
        borderWidth: 2,
        borderColor: '#E5E5E5',
        borderRadius: 5,
        paddingRight: 25,
        paddingLeft: 25,
        textAlign: 'center',

    },
    largeText: {
        height: 300,
        backgroundColor: '#E5E5E5',
        borderWidth: 2,
        borderColor: '#E5E5E5',
        borderRadius: 5,
        paddingLeft: 25,
        fontSize: 15
    },
    dropdown: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        flex: 0
    },
    selectors: {
      margin: 8,
    },
    selectorText: {
      fontFamily: 'Avenir',
      color: '#BABABA',
      fontSize: 14,
      margin: 4
    },
    plsWork: {
      borderRadius: 20,
      backgroundColor: 'white',
      paddingLeft: 15,
      paddingRight: 15,
    },
    addTags: {
      fontSize: 14,
      fontFamily: 'Avenir',
      color: '#BABABA',
      padding: 3.5
    }
}
