import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import * as db from '../config/firebaseConfig';
import { UserContext } from '../../Main';

const profile = {
	avatar: { uri: 'https://picsum.photos/200/300' },
	name: 'Chelsea Angelena',
	about: 'Description About Paragraph Here',
	email: 'email@email.com',
	phoneNumber: ' 250-891-4016',
};

export default function ProfileScreen({ user }) {
	console.log(user, 'uid');
	let userId = user.uid;
	console.log(userId);

	const getProfileData = async () => {
		let result = await db.getProfile(userId);
		console.log(result, 'result');
	};

	useEffect(() => {
		getProfileData();
	}, []);

	if (!userId) {
		return <Text>Loading....</Text>;
	}
	return (
		<View>
			<Image source={{uri: user.photoURL}} style={styles.image} alt='profileImage' />
			<Text>{userId}</Text>
			<Text>{user.displayName}</Text>
			<Text>{user.email}</Text>
			<Text>{user.phoneNumber}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200,
	},
});
