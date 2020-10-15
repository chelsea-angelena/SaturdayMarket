import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import * as db from '../../config/firebaseConfig';
import { UserContext } from '../../Navigation/Main';
import SavedList from './SavedList';

export default function SavedPosts() {
	const [savedList, setSavedList] = useState([]);
	const user = useContext(UserContext);
	const userId = user.uid;

	const getSavedList = async () => {
		let result = await db.getSavedList(userId);
		setSavedList(result);
	};

	useEffect(() => {
		getSavedList();
	}, []);

	if (!user) {
		return <Text>Loading...</Text>;
	}
	return (
		<View>
			<SavedList user={user} savedItems={savedList.map((item) => item.id)} />
		</View>
	);
}
