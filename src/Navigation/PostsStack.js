import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	PostsListScreen,
	PostListItem,
	ListItemDetails,
	UserProfileScreen,
} from '../screens/Posts';
import { UserContext } from '../../App';

const Stack = createStackNavigator();

const PostsStack = ({ navigation }) => {
	const user = useContext(UserContext);
	console.log(user);
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='PostsListScreen'
				component={PostsListScreen}
				options={{ title: 'Posts' }}
			/>
			<Stack.Screen
				name='PostListItem'
				component={PostListItem}
				headerTitle={{ title: 'Posts' }}
			/>
			<Stack.Screen
				name='ListItemDetails'
				component={ListItemDetails}
				headerTitle={{ title: 'Posts' }}
			/>
			<Stack.Screen
				name='UserProfileScreen'
				component={UserProfileScreen}
				headerTitle={{ title: 'Profile' }}
			/>
		</Stack.Navigator>
	);
};

export default PostsStack;
