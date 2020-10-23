import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as Location from 'expo-location';

const useLocation = () => {
	let [location, setLocation] = useState({
		coords: { latitude: '', longitude: '' },
	});
	console.log(location);
	let [error, setError] = useState(null);

	const getLocation = async () => {
		try {
			let { status } = await Location.requestPermissionsAsync(
				permissions.LOCATION
			);
			if (status !== 'granted') {
				setError(error, 'error');
			}
			let location = await Location.getCurrentPositionAsync({});
			setLocation({
				longitude: location.coords.longitude,
				latitude: location.coords.latitude,
			});
		} catch (error) {
			setError(error, 'error');
		}
	};

	useEffect(() => {
		getLocation();
	}, []);
	return [location, error];
};
export default useLocation;
