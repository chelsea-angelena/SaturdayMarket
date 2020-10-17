import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	SavedPosts,
	SavedPostItem,
	// SavedPostDetails,
} from '../screens/SavedPosts';
import UserProfileScreen from '../screens/Posts/UserProfileScreen.js';
import ListItemDetails from '../screens/Posts/ListItemDetails';
const Stack = createStackNavigator();

const SavedPostsStack = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='SavedPosts'
				component={SavedPosts}
				headerTitle={{ title: 'Saved' }}
			/>
			<Stack.Screen
				name='SavedPostItem'
				component={SavedPostItem}
				headerTitle={{ title: 'Saved' }}
			/>
			<Stack.Screen
				name='ListItemDetails'
				component={ListItemDetails}
				headerTitle={{ title: 'Saved' }}
			/>

			<Stack.Screen
				name='UserProfileScreen'
				component={UserProfileScreen}
				headerTitle={{ title: 'Saved' }}
			/>
		</Stack.Navigator>
	);
};

export default SavedPostsStack;
