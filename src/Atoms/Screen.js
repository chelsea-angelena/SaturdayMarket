// import React from 'react';
// import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
// import defaultStyle from '../styles/styles';

// Dimensions.get('window').height;
// Dimensions.get('window').width;

// let height = Dimensions.get('screen').height;
// let width = Dimensions.get('screen').width;

// export default function Screen({ children, defaultStyle }) {
// 	return (
// 		<SafeAreaView style={[styles.screen, defaultStyle]}>
// 			<View style={[styles.view, defaultStyle]}>{children}</View>
// 		</SafeAreaView>
// 	);
// }

// const styles = StyleSheet.create({
// 	screen: {
// 		width: width,
// 		height: height,
// 		marginTop: 16,
// 		marginLeft: 16,
// 		marginRight: 16,
// 	},
// });

import React from 'react';
import Constants from 'expo-constants';
import defaultStyles from '../styles/styles';
import { ScrollView, StyleSheet, View } from 'react-native';

function Screen({ children, style }) {
	return (
		<ScrollView style={[styles.screen, style]}>
			<View style={[styles.view, style]}>{children}</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
	view: {
		flex: 1,
		minWidth: 280,
		maxWidth: 550,
		alignSelf: 'center',
		margin: 0,
	},
});

export default Screen;
