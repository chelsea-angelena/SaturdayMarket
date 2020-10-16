import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as db from '../../config/firebaseConfig.js';
import { UserContext } from '../../Navigation/Main';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './ProfileScreen';
import { ListItem, Divider, Button, Icon } from 'react-native-elements';
import SafeScreen from '../../Atoms/SafeScreen';
import colors from '../../styles/colors';

export default function Home(props) {
	const user = useContext(UserContext);
	const signOut = async () => {
		await db.signOut();
	};

	return <ProfileScreen user={user} />;
}

