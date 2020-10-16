import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import * as db from '../../config/firebaseConfig';
import { UserContext } from '../../Navigation/Main';
import {
	Divider,
	Icon,
	Button,
	Card,
	ListItem,
	Avatar,
	Accessory,
} from 'react-native-elements';
import colors from '../../styles/colors';
import MaterialCommunityIcon from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useSWR from 'swr';
import UsersList from './UsersList';

export default function UserProfileScreen(props, { route, navigation }) {
	// const [userData, setUserData] = useState(null);
	const { profileID } = props.route.params;
	console.log(profileID, 'userprofile route params');

	const { data: userData, error } = useSWR(profileID, db.getUserProfile);

	console.log(userData);
	// const getProfileData = async () => {
	// 	try {
	// 		let result = await db.getUserProfile(userId);
	// 		console.log(result, 'userData result');
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	// useEffect(() => {
	// 	getProfileData();
	// }, []);
	if (error) {
		return <Text>....Error</Text>;
	}
	if (!userData) {
		return <Text>Loading....</Text>;
	}

	let { image, photoURL } = userData;

	return (
		<View style={styles.view}>
			<Card
				wrapperStyle={{ alignItems: 'center', justifyContent: 'space-evenly' }}
			>
				{photoURL ? (
					<Avatar rounded size='xlarge' source={{ uri: photoURL }} />
				) : null}

				{image ? (
					<Avatar rounded size='xlarge' source={{ uri: image }} />
				) : null}
				{!photoURL && !image ? (
					<Avatar
						rounded
						size='x-large'
						icon={{ name: 'user', type: 'font-awesome' }}
						containerStyle={{ backgroundColor: colors.drab }}
						overlayContainerStyle={{ backgroundColor: colors.medGrey }}
					/>
				) : null}
				<Card.Title style={{ marginTop: 24 }}>
					{userData.displayName}
				</Card.Title>
				<ListItem.Subtitle style={{ padding: 8 }}>
					{userData.email}
				</ListItem.Subtitle>
				<ListItem.Subtitle style={{ padding: 8 }}>
					{userData.phoneNumber}
				</ListItem.Subtitle>
				<Divider />
				<UsersList authorID={profileID} />
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200,
	},
	view: {
		alignItems: 'center',
		marginTop: 42,
		minWidth: 320,
		maxWidth: '100%',
	},
});
