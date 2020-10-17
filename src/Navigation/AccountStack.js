import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ProfileScreen, EditProfile } from '../screens/Account';
import ListItemDetails from '../screens/Posts/ListItemDetails';
import UserProfileScreen from '../screens/Posts/UserProfileScreen';
const Stack = createStackNavigator();

const AccountStack = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='ProfileScreen' component={ProfileScreen} />
			<Stack.Screen name='EditProfile' component={EditProfile} />
			<Stack.Screen name='ListItemDetails' component={ListItemDetails} />
			<Stack.Screen name='UserProfileScreen' component={UserProfileScreen} />
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
