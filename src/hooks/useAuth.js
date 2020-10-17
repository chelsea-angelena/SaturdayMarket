import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as db from '../config/firebaseConfig.js';

function useAuth() {
	const [user, setUser] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		return db.checkUserAuth((user) => {
			setLoading(false);
			setUser(user);
		});
	}, []);

	return [user, loading, error];
}

export default useAuth;
// const user = firebase.auth().currentUser;
// if (user) {
// 	console.log(user, 'user');
// } else {
// 	console.log('no user');
// }
// console.log(user);

// const [fontsLoaded, setFontsLoaded] = useState(false);

// const loadFonts = async () => {
// 	await Font.loadAsync(customFonts);
// 	setFontsLoaded(true);
// };

// useEffect(() => {
// 	loadFonts();
// }, []);
