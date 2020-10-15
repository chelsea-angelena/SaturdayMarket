import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PostForm } from '../screens/Posts';

const Stack = createStackNavigator();

const NewPostStack = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='PostForm' component={PostForm} />
		</Stack.Navigator>
	);
};

export default NewPostStack;
