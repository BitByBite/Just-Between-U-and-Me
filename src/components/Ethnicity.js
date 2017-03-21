import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text
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
export default class Ethnicity extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header text={'Profile Setup'} />

				<View style={styles.title}>
					<Text style={styles.titleStyle}>{"⠀"}Ethnicity{"⠀"}</Text>
				</View>

				<View style={styles.radios}>
					<Text style={styles.titles}>Citizenship{"⠀"}</Text>
					<RadioForm
						radio_props={[
							{ label: 'Born in the U.S.', value: 0 },
							{ label: 'Born outside the U.S.', value: 0 },
							{ label: 'Migrated to the U.S.', value: 0 }
						]}
						buttonSize={GLOBAL_BUTTON_SIZE}
						initial={null}
						onPress={(value) => { this.setState({ value: value }) }}
					/>
				</View>

				<View style={styles.radios}>
					<Text style={styles.titles}>Geneology{"⠀"}</Text>
					<RadioForm
						radio_props={[
							{ label: 'First generation - migrated to the U.S.', value: 0 },
							{ label: '2nd generation - born in the U.S.', value: 0 },
							{ label: '3rd generation - parents born in the U.S.', value: 0 },
							{ label: '4th+ generation - grandparents born in the U.S.', value: 0 }
						]}
						buttonSize={GLOBAL_BUTTON_SIZE}
						initial={null}
						onPress={(value) => { this.setState({ value: value }) }}
					/>
				</View>

				<View style={styles.radios}>
					<Text style={styles.titles}>Ethnic Group{"⠀"}</Text>
					<RadioForm
						radio_props={[
							{ label: 'Both parents are the same ethnicity', value: 0 },
							{ label: 'Mixed ethnicity', value: 1 },
							{ label: 'Don\'t know my ethnicity', value: 0 }
						]}
						buttonSize={GLOBAL_BUTTON_SIZE}
						initial={null}
						onPress={(value) => { this.setState({ value: value }) }}
					/>
				</View>

				<BackNext destination={Actions.loginScreen}/>
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
	}

});
