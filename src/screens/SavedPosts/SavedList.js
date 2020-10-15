import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import * as db from '../../config/firebaseConfig';

export default function SavedList({ savedItems, user }) {
	console.log(savedItems);
	const [savedList, setSavedList] = useState([]);

	const getSavedList = async () => {
		let savedItem = savedItems.map((item) => item);
		let result = await db.getUserLists(savedItem);
		setSavedList(result);
	};

	useEffect(() => {
		getSavedList();
	}, []);

	return (
		<View>
			<Text></Text>
		</View>
	);
}
