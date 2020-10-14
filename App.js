import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import Main from './Main';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<Main />
			</NavigationContainer>
		</ThemeProvider>
	);
}
