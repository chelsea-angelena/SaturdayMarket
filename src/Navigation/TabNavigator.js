import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PostsStack, AccountStack, SavedPostsStack } from './index';
import PostForm from '../screens/Posts/PostForm';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
	return (
		<Tab.Navigator
			activeTintColor={colors.snow}
			inactiveTintColor={colors.white}
			barStyle={{
				backgroundColor: 'hsl(221, 51%, 16%)',
			}}
			initialRoute='PostsStack'
			screenOptions={{ headerShown: false }}
		>
			<Tab.Screen
				name='PostsStack'
				component={PostsStack}
				options={{
					tabBarLabel: 'Posts',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='tag-heart' color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name='SavedPostsStack'
				component={SavedPostsStack}
				options={{
					tabBarLabel: 'Saved Posts',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='heart' color={color} size={26} />
					),
				}}
			/>

			<Tab.Screen
				name='PostForm'
				component={PostForm}
				options={{
					tabBarLabel: 'New Post',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='plus' color={color} size={32} />
					),
				}}
			/>
			<Tab.Screen
				name='AccountStack'
				activeColor={colors.white}
				inactiveColor={colors.lightGrey}
				component={AccountStack}
				options={{
					tabBarLabel: 'Account',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='account' color={color} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
