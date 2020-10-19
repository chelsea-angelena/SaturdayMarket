// import React, { useState, useEffect } from 'react';
// import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// // import useLocation from '../hooks/useLocation.js';
// import Screen from '../../Atoms/Screen';
// export default function Map({ location }) {
// 	// let [location, error] = useLocation();

// 	if (!location) {
// 		return <ActivityIndicator size='large' />;
// 	}
// 	return (
// 		<MapView
// 			loadingEnabled={true}
// 			showsUserLocation={true}
// 			initialRegion={{
// 				latitude: location.latitude,
// 				longitude: location.longitude,
// 				latitudeDelta: 0.03,
// 				longitudeDelta: 0.03,
// 			}}
// 			region={{
// 				latitude: location.latitude,
// 				longitude: location.longitude,
// 				latitudeDelta: 0.03,
// 				longitudeDelta: 0.03,
// 			}}
// 			style={styles.map}
// 		>
// 			<Marker
// 				coordinate={{
// 					latitude: location.latitude,
// 					longitude: location.longitude,
// 				}}
// 				title='Current Location'
// 				description='Location of user'
// 			/>
// 		</MapView>
// 	);
// }

// const styles = StyleSheet.create({
// 	map: {
// 		width: '100%',
// 		height: 300,
// 	},
// });
