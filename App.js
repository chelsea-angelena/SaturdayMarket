import 'react-native-gesture-handler';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/styles/theme';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import useAuth from './src/hooks/useAuth';
import AuthStack from './src/Navigation/AuthStack';
import TabNavigator from './src/Navigation/TabNavigator';

export const UserContext = React.createContext();

export default function App() {
	const [user, loading] = useAuth();

	if (loading) {
		return <Text>Loading....</Text>;
	}
	return (
		<UserContext.Provider value={user}>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					{!user ? <AuthStack /> : <TabNavigator user={user} />}
				</NavigationContainer>
			</ThemeProvider>
		</UserContext.Provider>
	);
}
