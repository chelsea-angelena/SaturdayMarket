import 'react-native-gesture-handler';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Text } from 'react-native';
// import { ThemeProvider, theme } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import useAuth from './src/hooks/useAuth';
// import AuthStack from './src/Navigation/AuthStack';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from './src/screens/Auth';
import TabNavigator from './src/Navigation/TabNavigator';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Stack = createStackNavigator();

export const UserContext = React.createContext();

export default function App() {
	const [user, loading] = useAuth();
	console.log(user);
	return (
		<UserContext.Provider value={user}>
			{/* <ThemeProvider theme={theme}> */}
			<NavigationContainer>
				<Stack.Navigator>
					{!user ? (
						<>
							<Stack.Screen
								name='SignInScreen'
								component={SignInScreen}
								options={{ title: 'Sign In' }}
							/>
							<Stack.Screen
								name='SignUpScreen'
								component={SignUpScreen}
								options={{ title: 'Sign Up' }}
							/>
						</>
					) : (
						<Stack.Screen user={user} name='TabNav' component={TabNavigator} />
					)}
				</Stack.Navigator>
			</NavigationContainer>
			{/* </ThemeProvider> */}
		</UserContext.Provider>
	);
}
