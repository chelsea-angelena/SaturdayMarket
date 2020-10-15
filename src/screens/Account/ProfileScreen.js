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

export default function ProfileScreen({ user, signOut, route }) {

	let userId = user.uid;
	const navigation = useNavigation();

	// const getProfileData = async () => {
	// 	let result = await db.getProfile(userId);
	// 	console.log(result, 'result');
	// };

	// useEffect(() => {
	// 	getProfileData();
	// }, []);

	if (!userId) {
		return <Text>Loading....</Text>;
	}
	return (
		<View>
			<Card
				wrapperStyle={{ alignItems: 'center', justifyContent: 'space-evenly' }}
			>
				<Avatar rounded size='xlarge' source={{ uri: user.photoURL }}>
					<Accessory
						size={24}
						onPress={() => navigation.navigate('EditProfile')}
					/>
				</Avatar>
				<Card.Title style={{ marginTop: 24 }}>{user.displayName}</Card.Title>
				<ListItem.Subtitle>{user.email}</ListItem.Subtitle>
				<ListItem.Subtitle>{user.phoneNumber}</ListItem.Subtitle>
				<Divider />
				<Image source={{ uri: 'https://picsum.photos/200/300' }} />
				<ListItem.Title style={{ marginTop: 24, marginBottom: 24 }}>
					My Posts{' '}
				</ListItem.Title>
				<Divider />

				<Button
					buttonStyle={{ width: 150 }}
					type='outline'
					raised
					title='Sign Out'
					icon={{
						name: 'ios-exit',
						size: 24,
						type: 'ionicon',
						color: '#517fa4',
					}}
					onPress={signOut}
				/>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200,
	},
});
