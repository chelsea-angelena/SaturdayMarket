import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // import { View, Text } from 'react-native';
// import * as db from '../config/firebaseConfig.js';
import { Home, ProfileScreen, EditProfile } from '../Account';
import { PostForm } from '../Posts';
const Stack = createStackNavigator();

export default function MainNavigator({ navigation, user }) {
	console.log(user, 'userMainNav');
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='PostForm' component={PostForm} />

			<Stack.Screen name='ProfileScreen' component={ProfileScreen} />
			<Stack.Screen name='EditProfile' component={EditProfile} />
		</Stack.Navigator>
	);
}

// const routes = {
// 	EDIT_PROFILE: 'EditProfile',
// 	HOME: 'Home',
// };
