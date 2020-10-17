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

const MyPostListItem = ({ item }) => {
	const { created, post, userData } = item;
	const { category, title, price, description, image, location } = post;
	let Date = created.toDate();
	let dateArr = Date.toString().split(' ');
	let splicedDate = dateArr.splice(0, 4);
	let splicedTime = dateArr.splice(0, 1);
	let oneMore = splicedTime[0].split('');
	let another = oneMore.splice(0, 5);
	let time = another.join('');

	const navigation = useNavigation();
	const goToDetails = () => {
		navigation.navigate('ListItemDetails', { item });
	};

	console.log(item, 'item');
	return (
		<Card
			containerStyle={{ width: 350 }}
			wrapperStyle={{
				flexDirection: 'row',
				width: 300,
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Card.Image
				resizeMode='contain'
				source={{ uri: image }}
				alt='Posted Image'
				style={styles.image}
			/>

			<View style={styles.column}>
				<Card.Title style={styles.text}>{title}</Card.Title>
				<ListItem.Subtitle>${price}</ListItem.Subtitle>

				<ListItem.Subtitle style={styles.date}>
					{splicedDate[0]} {splicedDate[1]} {splicedDate[2]}
				</ListItem.Subtitle>
			</View>
			<Icon
				type='material-community'
				name='chevron-right'
				size={24}
				color='black'
				onPress={goToDetails}
			/>
		</Card>
	);
};

export default MyPostListItem;

const styles = StyleSheet.create({
	view: {
		minWidth: 320,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	text: {
		// marginLeft: 16,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// marginLeft: 16,
		marginRight: 16,
		alignItems: 'center',
	},
	image: {
		width: 150,
		height: 75,
	},

	column: {
		flexDirection: 'column',
		width: 150,
		alignItems: 'center',
	},
	posted: {
		fontSize: 12,
	},
	postBy: {
		fontSize: 13,
	},
	date: {
		fontSize: 12,
	},
});
// 	view: {
// 		width: 200,
// 		height: 400,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		alignSelf: 'center',
// 	},
// 	text: {
// 		marginLeft: 16,
// 	},
// 	row: {
// 		flexDirection: 'row',
// 		justifyContent: 'center',
// 		marginLeft: 16,
// 		marginRight: 16,
// 		alignItems: 'center',
// 		minWidth: 320,
// 		maxWidth: '100%',
// 	},
// 	image: {
// 		width: 100,
// 		height: 75,
// 		padding: 16,
// 		borderRadius: 4,
// 	},

// 	column: {
// 		flexDirection: 'column',
// 		width: 200,
// 		alignItems: 'center',
// 	},
// 	posted: {
// 		fontSize: 12,
// 	},
// 	postBy: {
// 		fontSize: 13,
// 	},
// 	date: {
// 		fontSize: 12,
// 	},
// 	card: {
// 		flexDirection: 'row',
// 		width: '100%',
// 		height: 50,
// 	},
// });
