import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	PostsListScreen,
	PostListItem,
	ListItemDetails,
	UserProfileScreen,
} from '../screens/Posts';
import { UserContext } from './Main';

const Stack = createStackNavigator();

const PostsStack = ({ navigation }) => {
	const user = useContext(UserContext);
	console.log(user);
	return (
		<Stack.Navigator>
			<Stack.Screen name='PostsListScreen' component={PostsListScreen} />
			<Stack.Screen name='PostListItem' component={PostListItem} />
			<Stack.Screen name='ListItemDetails' component={ListItemDetails} />
			<Stack.Screen name='UserProfileScreen' component={UserProfileScreen} />
		</Stack.Navigator>
	);
};

export default PostsStack;

// const routes = {
// 	EDIT_PROFILE: 'EditProfile',
// 	HOME: 'Home',
//NEW_POST: 'PostForm',
//PROFILE_OF_USER: 'ProfileScreen',
//POSTS_LIST: 'PostsListScreen'
//POST_LIST_ITEM: 'PostListItem',
//LIST_ITEM_DETAIL: 'ListItemDetail'
// };
