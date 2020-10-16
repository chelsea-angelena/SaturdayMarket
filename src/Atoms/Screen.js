import React from 'react';
import Constants from 'expo-constants';
import defaultStyles from '../styles/styles';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

function Screen({ children, style }) {
	return (
		<SafeAreaView>
			<ScrollView style={[styles.screen, style]}>
				<View style={[styles.view, style]}>{children}</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
	view: {
		marginTop: 32,
		marginBottom: 32,
	},
});


export default Screen;
