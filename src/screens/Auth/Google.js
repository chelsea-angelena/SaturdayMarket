// import 'react-native-gesture-handler';
// import React from 'react';
// import { TouchableOpacity, StyleSheet, Button, View, Text } from 'react-native';
// import * as db from '../../config/firebaseConfig';
// import * as AppAuth from 'expo-app-auth';
// // import { Text } from 'react-native';
// import * as GoogleSignIn from 'expo-google-sign-in';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';
// // import { config } from '../../config/googleConfig';

// const { URLSchemes } = AppAuth;

// const { type, accessToken, user } = Google.logInAsync(config);

// // if (type === 'success') {
// //   let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
// //     headers: { Authorization: `Bearer ${accessToken}` },
// //   });
// // }

// export default function SignInWithGoogle(props) {
// 	const navigation = useNavigation();

// 	const signInWithGoogleAsync = async () => {
// 		// 	try {
// 		// 		const result = await Google.logInAsync({
// 		// 			config,
// 		// 			scopes: ['profile', 'email'],
// 		// 		});

// 		// 		if (result.type === 'success') {
// 		// 			return result.accessToken;
// 		// 		} else {
// 		// 			return { cancelled: true };
// 		// 		}
// 		// 	} catch (e) {
// 		// 		return { error: true };
// 		// 	}
// 		// };
// 		try {
// 			await GoogleSignIn.initAsync({
// 				// You may ommit the clientId when the firebase `googleServicesFile` is configured
// 				clientId: '<YOUR_IOS_CLIENT_ID>',
// 				// Provide other custom options...
// 			});
// 		} catch ({ message }) {
// 			alert('GoogleSignIn.initAsync(): ' + message);
// 		}
// 	};
// 	// const signIn = async () => {
// 	// 	await db
// 	// 		.signInWithGoogle()
// 	// 		.then(() => navigation.navigate(routes.ACCOUNT, { user }));
// 	// };
// 	return (
// 		<View>
// 			<TouchableOpacity onPress={signInWithGoogleAsync} style={styles.google}>
// 				<View style={styles.iconDiv}>
// 					<FontAwesome
// 						style={styles.icon}
// 						name='google'
// 						size={32}
// 						color='white'
// 					/>
// 				</View>
// 				<View>
// 					<Text style={styles.text}>Sign In With Google </Text>
// 				</View>
// 			</TouchableOpacity>
// 		</View>
// 	);
// }
// const styles = StyleSheet.create({
// 	google: {
// 		backgroundColor: '#263238',
// 		height: 54,
// 		width: '100%',
// 		marginRight: 16,
// 		marginLeft: 16,
// 		display: 'flex',
// 		flexDirection: 'row',
// 		alignSelf: 'center',
// 		alignItems: 'center',
// 		justifyContent: 'flex-start',
// 		borderRadius: 8,
// 		marginTop: 24,
// 	},
// 	iconDiv: {
// 		borderColor: 'white',
// 		borderWidth: 2,
// 	},
// 	icon: {
// 		padding: 12,
// 		height: 54,
// 	},
// 	text: {
// 		alignSelf: 'center',
// 		fontSize: 16,
// 		color: 'white',
// 		fontWeight: 'bold',
// 		// justifyContent: 'center',
// 		marginLeft: 32,
// 	},
// });
