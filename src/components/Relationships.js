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

const Dimensions = require('./Dimensions');

//actuall thing
export default class Relationships extends Component {
	render() {
		return (
			<View>
				<View style={styles.container}>
					<Header text={'Profile Setup'} />

					<View style={styles.title}>
						<Text style={styles.titleStyle}>{"⠀"}Relationships{"⠀"}</Text>
					</View>

					<View style={styles.radios}>
						<Text style={styles.titles}>Family{"⠀"}</Text>
						<RadioForm
							radio_props={[
								{ label: 'Live with both parents', value: 0 },
								{ label: 'Live with one parent', value: 0 },
								{ label: 'Live with relatives', value: 0 }
							]}
							buttonSize={GLOBAL_BUTTON_SIZE}
							initial={null}
							onPress={(value) => { this.setState({ value: value }) }}
						/>
					</View>

					<View style={styles.radios}>
						<Text style={styles.titles}>Sibilings{"⠀"}</Text>
						<RadioForm
							radio_props={[
								{ label: 'Only child', value: 0 },
								{ label: 'Have half/step siblings', value: 0 },
								{ label: 'Have brother/sisters', value: 0 }
							]}
							buttonSize={GLOBAL_BUTTON_SIZE}
							initial={null}
							onPress={(value) => { this.setState({ value: value }) }}
						/>
					</View>

					<View style={styles.radios}>
						<Text style={styles.titles}>Birth order{"⠀"}</Text>
						<RadioForm
							radio_props={[
								{ label: 'Oldest sibiling', value: 0 },
								{ label: 'Middle sibiling', value: 1 },
								{ label: 'Youngest sibiling', value: 0 }
							]}
							buttonSize={GLOBAL_BUTTON_SIZE}
							initial={null}
							onPress={(value) => { this.setState({ value: value }) }}
						/>
					</View>
				</View>
				<BackNext destination={Actions.ethnicity}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		width: Dimensions.WIDTH,
		height: Dimensions.HEIGHT * 0.94
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
