import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import Relationships from './Relationships';
import Ethnicity from './Ethnicity';
import Gender from './Gender';
import AboutMe from './AboutMe';
import Welcome from './Welcome';
import Congrats from './Congrats';
import BottomNav from './App/BottomNav';
import Ask from './App/Ask';
import Profile from './App/Profile';
import HomePage from './App/HomePage';

export default class Main extends Component {
	render() {
		return <Router scenes={scenes} />
	}
}

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="loginScreen"
			component={LoginScreen}
			animation='fade'
			hideNavBar={true}
			initial={true}
		/>
		<Scene key="relationships"
			component={Relationships}
			animation='fade'
			hideNavBar={true}
		/>
		<Scene key="ethnicity"
			component={Ethnicity}
			animation='fade'
			hideNavBar={true}
		/>

		<Scene key="gender"
			component={Gender}
			animation='fade'
			hideNavBar={true}
		/>

		<Scene key="aboutMe"
			component={AboutMe}
			animation='fade'
			hideNavBar={true}
		/>

		<Scene key="welcome"
			component={Welcome}
			animation='fade'
			hideNavBar={true}
		/>

		<Scene key="congrats"
			component={Congrats}
			animation='fade'
			hideNavBar={true}
		/>

		<Scene key='app'
			component={Profile}
			animation='fade'
			hideNavBar={true}
			initial={true}
		/>
		<Scene key='HomePage'
			component={HomePage}
			animation='fade'
			hideNavBar={true}
		/>
		<Scene key='ask'
			component={Ask}
			animation='fade'
			hideNavBar={true}
		/>
	</Scene>
);
