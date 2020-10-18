import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as db from '../config/firebaseConfig.js';

function useAuth() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		return db.checkUserAuth((user) => {
			setLoading(false);
			setUser(user);
		});
	}, []);

	return [user, loading];
}

export default useAuth;
