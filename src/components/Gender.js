import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Text,
	Easing,
	TextInput,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

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
	render() {
		return (
			<View style={styles.container}>
				<Header text={'Profile Setup'} />

				<View style={styles.title}>
					<Text style={styles.titleStyle}>{"⠀"}Gender Identity{"⠀"}</Text>
				</View>

				<View style={styles.radios}>
					<Text style={styles.titles}>Date of Birth{"⠀"}</Text>
					<TextInput
						keyboardType="number-pad"
						onChangeText={(value) => { this.setState({ value: value }) }}
						placeholder="MM/DD/YYYY"
						style={styles.textInput}
					/>
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

				<BackNext destination={Actions.aboutMe}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: `column`,
		flex: 1,
	},
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
	}

});
