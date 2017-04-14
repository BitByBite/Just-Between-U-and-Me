import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text,
	ScrollView
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

const Dimensions = require('./Dimensions');

//other components
import BackNext from './BackNext';
import RadioForm from 'react-native-simple-radio-button';
import Header from './Header';
import Checkbox from 'react-native-checkbox';

//variables for formatting
const SIZE = 40;
const FONT_SIZE = 20;
const GLOBAL_BUTTON_SIZE = 8;

//actuall thing
export default class AboutMe extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView style={{flex: 10}}>
					<Header text={'Profile Setup'} />

					<View style={styles.title}>
						<Text style={styles.titleStyle}>{"⠀"}All About Me{"⠀"}</Text>
					</View>

					<View style={styles.radios}>
						<Text style={styles.titles}>Check all that apply below{"⠀"}</Text>
						<Checkbox
							checkboxStyle = {styles.comeOn}
							label='I am in a dating relationship'
							onChange={(checked) => this.setState({ value: checked })}
						/>
						<Checkbox
						checkboxStyle = {styles.comeOn}
							label='I am bullied or bully people'
							onChange={(checked) => this.setState({ value: checked })}
						/>
						<Checkbox
						checkboxStyle = {styles.comeOn}
							label='I do drugs or drink alcohol occasionally'
							onChange={(checked) => this.setState({ value: checked })}
						/>
						<Checkbox
						checkboxStyle = {styles.comeOn}
							label='My parents are divorced'
							onChange={(checked) => this.setState({ value: checked })}
						/>
						<Checkbox
						checkboxStyle = {styles.comeOn}
							label='I have questions about my sexuality'
							onChange={(checked) => this.setState({ value: checked })}
						/>
						<Checkbox
						checkboxStyle = {styles.comeOn}
							label='I have a disease or chronic illness'
							onChange={(checked) => this.setState({ value: checked })}
						/>
						<Checkbox
						checkboxStyle = {styles.comeOn}
							label='I have a handicap or disability'
							onChange={(checked) => this.setState({ value: checked })}
						/>
						<Checkbox
						checkboxStyle = {styles.comeOn}
							label='I am despressed or hurt myself'
							onChange={(checked) => this.setState({ value: checked })}
						/>
						<Checkbox
						checkboxStyle = {styles.comeOn}
							label='I am angry or hurt others'
							onChange={(checked) => this.setState({ value: checked })}
						/>

					</View>
				</ScrollView>
				<View style={{flex: 0.2}}>
					<BackNext destination={Actions.congrats}/>
				</View>
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
	comeOn: {
		height: 20,
		width: 20,
		overlayColor: '#419BF9',
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
