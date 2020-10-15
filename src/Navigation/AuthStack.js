import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { SignInScreen, SignUpScreen } from '../screens/Auth';

export default function AuthStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='SignInScreen' component={SignInScreen} />
			<Stack.Screen name='SignUpScreen' component={SignUpScreen} />
		</Stack.Navigator>
	);
}
