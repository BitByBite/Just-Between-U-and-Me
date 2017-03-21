import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import Relationships from './Relationships';
import Ethnicity from './Ethnicity';

export default class Main extends Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="loginScreen"
						component={LoginScreen}
						animation='fade'
						hideNavBar={true}
						initial={true}
					/>
					<Scene key="relationShips"
						component={Relationships}
						animation='fade'
						hideNavBar={true}
					/>
					<Scene key="ethnicity"
						component={Ethnicity}
						animation='fade'
						hideNavBar={true}
					/>
				</Scene>
			</Router>
		);
	}
}
