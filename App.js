import 'react-native-gesture-handler';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/styles/theme';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import useAuth from './src/hooks/useAuth';
import IntroScreen from './src/Navigation/IntroScreen';
import MainApp from './MainApp';
// import AuthStack from './src/Navigation/AuthStack';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from './src/screens/Auth';
import TabNavigator from './src/Navigation/TabNavigator';
import AuthStack from './src/Navigation/AuthStack';

const Stack = createStackNavigator();

export const UserContext = React.createContext();

export default function App() {
	const [user, loading] = useAuth();

	return (
		<UserContext.Provider value={user}>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name='IntroScreen'
							component={IntroScreen}
							options={{ title: 'Welcome' }}
						/>
						<Stack.Screen
							name='MainApp'
							component={MainApp}
							options={{ title: 'Saturday Market' }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</UserContext.Provider>
	);
}
