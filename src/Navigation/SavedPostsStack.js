import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SavedPosts, SavedPostDetails } from '../screens/SavedPosts';
const Stack = createStackNavigator();

const SavedPostsStack = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='SavedPosts' component={SavedPosts} />
			<Stack.Screen name='SavedPostDetails' component={SavedPostDetails} />
		</Stack.Navigator>
	);
};

export default SavedPostsStack;
// const routes = {
// 	EDIT_PROFILE: 'EditProfile',
// 	HOME: 'Home',
//NEW_POST: 'PostForm',
//PROFILE_OF_USER: 'ProfileScreen',
//POSTS_LIST: 'PostsListScreen'
//POST_LIST_ITEM: 'PostListItem',
//LIST_ITEM_DETAIL: 'ListItemDetail'
// };
