import React, { useState, useEffect, useContext } from 'react';
import { FlatList, View, StyleSheet, Text, Image } from 'react-native';
import * as db from '../../config/firebaseConfig';
import { UserContext } from '../../../App';
import {
	Divider,
	Icon,
	Button,
	Card,
	ListItem,
	Avatar,
	Accessory,
} from 'react-native-elements';
import colors from '../../styles/colors';
import MaterialCommunityIcon from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MyPostListItem from './MyPostListItem';

export default function MyPostsList({ myPosts, signOut, userId, user }) {
	return (
		// 		<FlatList
		// 			data={myPosts}
		// 			keyExtractor={(myPosts) => myPosts.id}
		// 			renderItem={({ item }) => {
		// 	x			return <MyPostListItem item={item} signOut={signOut} userId={userId} />;
		// 			}}
		// 		/>
		// 	);
		// }

		<>
			<View style={styles.view}>
				<Card
					wrapperStyle={{
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}
				>
					<ListItem.Title style={{ marginTop: 24, marginBottom: 24 }}>
						<FlatList
							data={myPosts}
							keyExtractor={(myPosts) => myPosts.id}
							renderItem={({ item }) => {
								return (
									<MyPostListItem
										item={item}
										signOut={signOut}
										userId={userId}
									/>
								);
							}}
						/>
					</ListItem.Title>


				</Card>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200,
	},
	view: {
		height: 450,
		minWidth: 320,
		maxWidth: 500,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
});
