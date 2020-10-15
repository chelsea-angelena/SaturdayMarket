import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ProfileScreen, EditProfile } from '../screens/Account';

const Stack = createStackNavigator();

const AccountStack = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='ProfileScreen' component={ProfileScreen} />
			<Stack.Screen name='EditProfile' component={EditProfile} />
		</Stack.Navigator>
	);
};

export default AccountStack;

// const routes = {
// 	EDIT_PROFILE: 'EditProfile',
// 	HOME: 'Home',
//NEW_POST: 'PostForm',
//PROFILE_OF_USER: 'ProfileScreen',
//POSTS_LIST: 'PostsListScreen'
//POST_LIST_ITEM: 'PostListItem',
//LIST_ITEM_DETAIL: 'ListItemDetail'
// };
