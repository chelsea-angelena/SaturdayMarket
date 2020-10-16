import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	SavedPosts,
	SavedPostItem,
	SavedPostDetails,
} from '../screens/SavedPosts';
import UserProfileScreen from '../screens/Posts/UserProfileScreen.js';
import ListItemDetails from '../screens/Posts/ListItemDetails';
const Stack = createStackNavigator();

const SavedPostsStack = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='SavedPosts' component={SavedPosts} />
			<Stack.Screen name='SavedPostItem' component={SavedPostItem} />
			<Stack.Screen name='ListItemDetails' component={ListItemDetails} />

			<Stack.Screen name='UserProfileScreen' component={UserProfileScreen} />
		</Stack.Navigator>
	);
};

export default SavedPostsStack;
