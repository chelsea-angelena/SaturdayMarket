import React, { createContext, useContext, useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import useAuth from './src/hooks/useAuth';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './src/Navigation/AuthStack';
import MainNavigator from './src/Navigation/MainNavigator';

export const UserContext = React.createContext();

export default function Main() {
	const [user, loading] = useAuth();
	if (loading) {
		return <Text>Loading....</Text>;
	}
	return user ? <AuthApp user={user} /> : <AuthStack />;
}

function AuthApp({ user }) {
	return (
		<UserContext.Provider value={user}>
			<MainNavigator />
		</UserContext.Provider>
	);
}
