import React from 'react';
import { Alert, Image, StyleSheet, View, Text } from 'react-native';
import { Headline, Subheading } from 'react-native-paper';
import colors from '../styles/colors';
import { useFonts } from 'expo-font';

const Logo = ({ title, subtitle }) => {
	return (
		<>
			<Image
				source={require('../../assets/icon.png')}
				alt='Street Market Logo'
				style={styles.logo}
			/>
		</>
	);
};

export default Logo;

const styles = StyleSheet.create({
	logo: {
		alignSelf: 'center',
		marginTop: 8,
		marginBottom: 8,
		height: 200,
		width: 200,
		resizeMode: 'contain',
	},
	// textSignUp: {
	// 	display: 'flex',
	// 	color: 'white',
	// 	width: 300,
	// 	alignSelf: 'center',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	marginLeft: 110,
	// 	marginRight: 100,
	// 	fontWeight: 'bold',
	// 	fontSize: 18,
	// },
	// title: {
	// 	color: colors.onyx,
	// 	fontFamily: 'Lovelo',
	// 	fontSize: 39,
	// 	letterSpacing: 1.25,
	// },
	// subtitle: {
	// 	color: colors.primaryBlue,
	// 	fontSize: 16,
	// 	fontFamily: 'Econ',
	// 	fontWeight: 'normal',
	// 	letterSpacing: 1.25,
	// 	marginBottom: 24,
	// },
	// textView: {
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// },
});
