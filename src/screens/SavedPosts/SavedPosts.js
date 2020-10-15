import React, { useEffect, useState, useContext } from 'react';
import { Image, StyleSheet, FlatList, View, Text } from 'react-native';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements';
import * as db from '../../config/firebaseConfig';
import { UserContext } from '../../Navigation/Main';
import SavedList from './SavedList';
import { useNavigation } from '@react-navigation/native';
import Screen from '../../Atoms/Screen';

export default function SavedPosts() {
	const [savedList, setSavedList] = useState([]);
	const [postedId, setPostedId] = useState([]);
	const [postData, setPostData] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const user = useContext(UserContext);
	const userId = user.uid;

	const getSavedList = async () => {
		let result = await db.getSavedList(userId);
		console.log(result);
		let postId = result.map((result) => result.postId);
		setPostedId(postId);
		postId ? dataResult() : null;
	};

	let dataResult = async () => {
		await getSavedList;
		try {
			let result = await db.getSaveData(postedId);
			setPostData(result);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getSavedList();
	}, []);

	if (!user) {
		return <Text>Loading...</Text>;
	}
	return (
		<FlatList
			data={postData}
			keyExtractor={(postData) => postData.id}
			renderItem={({ item }) => {
				return (
					<DataItem item={item} post={item.post} userData={item.userData} />
				);
			}}
		/>
	);
}

const DataItem = ({ item, userData, post }) => {
	console.log(item, 'savedPostdata');
	const { created } = item;
	const { title, description, category, location, price, image } = post;
	const { photoURL, displayName, email, altEmail, phoneNumber } = userData;

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
	return (
		<>
			<Card>
				<Card.Image
					resizeMode='cover'
					source={{ uri: image }}
					alt='Posted Image'
					style={styles.image}
				/>
				<Card.Divider />
				<View style={styles.row}>
					<Card.Title style={styles.text}>{title}</Card.Title>
					<ListItem.Subtitle>${price}</ListItem.Subtitle>
				</View>
				<Card.Divider />
				<View style={styles.row}>
					<Avatar
						rounded
						source={{
							uri: photoURL,
						}}
					/>
					<View style={styles.column}>
						<ListItem.Subtitle style={styles.posted}>
							PostedBy:
						</ListItem.Subtitle>

						<ListItem.Subtitle style={styles.date}>
							{splicedDate[0]} {splicedDate[1]} {splicedDate[2]}at: {time} PST
						</ListItem.Subtitle>
					</View>
					<Icon
						type='material-community'
						name='chevron-right'
						size={24}
						color='black'
						onPress={goToDetails}
					/>
				</View>
			</Card>
			<Text>{category}</Text>
			<Text>{description}</Text>
			<Text>{displayName}</Text>
			<Text>{altEmail}</Text>
			<Text>{email}</Text>
			<Text>{phoneNumber}</Text>
			<Image
				source={{ uri: photoURL }}
				alt=''
				style={{ width: 200, height: 200 }}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	view: {
		width: 200,
		height: 400,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	text: {
		marginLeft: 16,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 16,
		marginRight: 16,
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 150,
	},

	column: {
		flexDirection: 'column',
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
