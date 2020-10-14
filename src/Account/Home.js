import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as db from '../config/firebaseConfig.js';
import { UserContext } from '../../Main';
import ProfileScreen from './ProfileScreen';
import PostForm from '../Posts';
export default function Home(props) {
	const user = useContext(UserContext);
	console.log(user);
	const navigation = useNavigation();
	const signOut = async () => {
		await db.signOut();
	};
	const goToProfileForm = () => {
		navigation.navigate('EditProfile');
	};
	const goToPostForm = () => {
		navigation.navigate('PostForm');
	};
	return (
		<View>
			<ProfileScreen user={user} />
			<Button onPress={goToProfileForm} title='Edit Profile' />
			<Button onPress={goToPostForm} title='Create A New Post' />
			<Button onPress={signOut} title='SignOut' />
			<Text>{user.email}</Text>
		</View>
	);
}
