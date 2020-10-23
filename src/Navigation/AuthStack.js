// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { SignInScreen, SignUpScreen } from '../screens/Auth';
// import UserContext from '../../App';

// const Stack = createStackNavigator();

// export default function AuthStack() {
// 	const [user, loading] = useContext(UserContext);

// 	return (
// 		<Stack.Navigator>
// 			{!user ? (
// 				<>
// 					<Stack.Screen
// 						name='SignInScreen'
// 						component={SignInScreen}
// 						options={{ title: 'Sign In' }}
// 					/>
// 					<Stack.Screen
// 						name='SignUpScreen'
// 						component={SignUpScreen}
// 						options={{ title: 'Sign Up' }}
// 					/>
// 				</>
// 			) : (
// 				<TabNavigator user={user} />
// 			)}
// 		</Stack.Navigator>
// 	);
// }
