import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Animated,
	TouchableOpacity,
	Text,
	Easing,
	Image
} from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import UserInput from './UserInput';
import SignupSection from './SignupSection';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import spinner from '../images/ring.gif';

const MARGIN = 40;

export default class Form extends Component {

		constructor() {
	    super();
			this.state = ({ username: 'default', password: 'default', isLoading:false, error: '' });

		this.buttonAnimated = new Animated.Value(0);
		this.growAnimated = new Animated.Value(0);
		this._onPress = this._onPress.bind(this);
		this.testHttp = this.testHTTP.bind(this);
	}
	async testHTTP(event) {
		 let username = this.state.username;
		 let password = this.state.password;
		 console.log('username: ' + username)
		 try {
		let response =  fetch(`http://127.0.0.1:8000/`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'username': username,
					'password': password
				})
			})
			.then((response) => {
				console.log(JSON.stringify(response["url"]))
				if(response["url"].toString() == "http://127.0.0.1:8000/accounts/profile/") {
					Actions.relationships
				}
				else {
					console.log('fail')
					this.setState({ error: 'wrong username and password' });
					Actions.relationships
				}
			});
	} catch(error) {
		console.log(error)
		Actions.relationships
	}
}
	_onPress(event) {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });
		Animated.timing(
			this.buttonAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();

		setTimeout(() => {
			this._onGrow();
		}, 2000);

		setTimeout(() => {
			this.setState({ isLoading: false });
			this.buttonAnimated.setValue(0);
			this.growAnimated.setValue(0);
			this.setState({showProgress: true})
		 // this.testHTTP(); IMPLEMENT THIS METHOD WHEN WE WANT TO TEST SERVERS
		  Actions.relationships()
		}, 2300);
	}

		_onGrow() {
			Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();
	}


	render() {
		const changeWidth = this.buttonAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
		});
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, MARGIN]
		});
		return (
			<View style={styles.container}>
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}>
				<UserInput source={usernameImg}
					placeholder='Username'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false}
					onChangeText={username => this.setState({ username })} />
				<UserInput source={passwordImg}
					secureTextEntry={true}
					placeholder='Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					onChangeText={password => this.setState({ password })} />
			</KeyboardAvoidingView>
			<View style={styles.containerButton}>
				<Animated.View style={{width: changeWidth}}>
					<TouchableOpacity style={styles.button}
						onPress={this._onPress}
						activeOpacity={1} >
							{this.state.isLoading ?
								<Image source={spinner} style={styles.image} />
								:
								<Text style={styles.text}>LOGIN</Text>
							}
					</TouchableOpacity>
					<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
				</Animated.View>
			</View>
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	containerButton: {
		top: 0,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#3DADFF',
		height: MARGIN,
		borderRadius: 5,
		zIndex: 100,
	},
	circle: {
		height: MARGIN,
		width: MARGIN,
		marginTop: -MARGIN,
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 100,
		alignSelf: 'center',
		zIndex: 99,
		backgroundColor: '#3DADFF',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	image: {
		width: 24,
		height: 24,
	},
});
