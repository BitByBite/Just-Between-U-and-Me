import React, { Component, PropTypes } from 'react';
import {
	DatePickerIOS,
	Modal,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text,
	TextInput,
	ScrollView
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

const Dimensions = require('./Dimensions');

//import Modal from 'react-native-modal';

//other components
import BackNext from './BackNext';
import RadioForm from 'react-native-simple-radio-button';
import Header from './Header';
//variables for formatting
const SIZE = 40;
const FONT_SIZE = 20;
const GLOBAL_BUTTON_SIZE = 8;



//actuall thing
export default class Gender extends Component {
	static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };

  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
		modalVisible: false,
  };

  onDateChange = (date) => {
    this.setState({date: date});
  };

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  };

	setModalVisible(visible) {
	    this.setState({modalVisible: visible});
	  }

	render() {
		return (
			<View style={{height: Dimensions.HEIGHT}}>
				<ScrollView style={{flex: 10}}>
					<Header text={'Profile Setup'} />

					<View style={styles.title}>
						<Text style={styles.titleStyle}>{"⠀"}Gender Identity{"⠀"}</Text>
					</View>

					<View style={styles.radios}>
						<Text style={styles.titles}>Date of Birth{"⠀"}</Text>
						<View>
        			<Modal

          			animationType={"slide"}
          			transparent={true}
          			visible={this.state.modalVisible}
          			onRequestClose={() => {alert("Modal has been closed.")}}
          		>


          				<View style = {styles.dater}>
									<TouchableOpacity
										style={styles.button}
										activeOpacity={1}
										onPress={() => {
										this.setModalVisible(!this.state.modalVisible)
									}}>
								<Text>Confirm</Text>
								<View style={{width: 700, height: 8, backgroundColor: '#419BF9'}} />
								</TouchableOpacity>
												<DatePickerIOS
													backgroundColor = 'black'
													date={this.state.date}
													mode="date"
													timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
													onDateChange={this.onDateChange}
												/>



          			</View>
        </Modal>

        <TouchableOpacity onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>{
            this.state.date.toLocaleDateString()
          }</Text>
        </TouchableOpacity>

      </View>

				</View>

					<View style={styles.radios}>
						<Text style={styles.titles}>Gender{"⠀"}</Text>
						<RadioForm
							radio_props={[
								{ label: 'Male', value: 0 },
								{ label: 'Female', value: 0 },
								{ label: 'Prefer not to answer', value: 0 }
							]}
							buttonSize={GLOBAL_BUTTON_SIZE}
							initial={null}
							onPress={(value) => { this.setState({ value: value }) }}
						/>
					</View>

					<View style={styles.radios}>
						<Text style={styles.titles}>Sexual Orientation{"⠀"}</Text>
						<RadioForm
							radio_props={[
								{ label: 'Heterosexual', value: 0 },
								{ label: 'Homosexual', value: 1 },
								{ label: 'Prefer not to answer', value: 0 }
							]}
							buttonSize={GLOBAL_BUTTON_SIZE}
							initial={null}
							onPress={(value) => { this.setState({ value: value }) }}
						/>
					</View>
				</ScrollView>
				<View style={{flex: 0.2}}>
					<BackNext destination={Actions.aboutMe}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	radios: {
		paddingLeft: 30,
		paddingTop: 15,
		paddingBottom: 15,

	},
	titles: {
		fontFamily: 'Avenir',
		fontSize: FONT_SIZE,
		textDecorationLine: 'underline',
		letterSpacing: 1.02,
		paddingBottom: 7,
		textDecorationStyle: 'solid',
		textDecorationColor: '#419BF9',
	},
	title: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 12,
		paddingBottom: 4,
	},
	titleStyle: {
		fontSize: 32,
		fontFamily: 'Avenir',
		textDecorationLine: 'underline',
		letterSpacing: 1.02,
		textDecorationStyle: 'solid',
		textDecorationColor: '#419BF9',
	},
	textInput: {
		fontSize: 16,
		fontFamily: 'Avenir',
		letterSpacing: 1.02,
		textDecorationColor: '#419BF9',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#419BF9',
		height: 25,
		borderRadius: 50,
		width:100,
		zIndex: 100,
	},
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		width: 300,
   height: 300,
	},
	dater:{
		flex: 1,
		justifyContent: 'flex-end',
		marginTop: 420,
		backgroundColor: 'white'


	},

});
