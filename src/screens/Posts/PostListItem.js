import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, Image, Text, View, StyleSheet } from 'react-native';
import { Avatar, ListItem, Card, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as db from '../../config/firebaseConfig';

const PostListItem = ({
	item,
	title,
	description,
	price,
	category,
	image,
	postedBy,
	altEmail,
	postId,
	latitude,
	longitude,
	email,
	// created,
	phoneNumber,
	authorID,
	userPhoto,
}) => {

	let date = item.created.toDate();
	let dateArr = date.toString().split(' ');
	let splicedDate = dateArr.splice(0, 4);
	let splicedTime = dateArr.splice(0, 1);
	let split = splicedTime[0].split('');
	let timeSplice = split.splice(0, 5);
	let time = timeSplice.join('');

	console.log(authorID);
	const navigation = useNavigation();
	const goToDetails = () => {
		navigation.navigate('ListItemDetails', { item });
	};

	return (
		<Card wrapperStyle={styles.wrapper} containerStyle={styles.container}>
			<Image
				PlaceholderContent={<ActivityIndicator />}
				resizeMode='cover'
				style={{ height: 200 }}
				source={{ uri: image }}
				alt='Posted Image'
				// containerStyle={styles.imageContainer}
				// style={styles.image}
			/>
			<Card.Divider />
			<View style={styles.row}>
				<ListItem.Title style={(styles.text, { padding: 16, fontSize: 18 })}>
					{title}
				</ListItem.Title>
				<ListItem.Subtitle style={{ fontWeight: 'bold' }}>
					${price}
				</ListItem.Subtitle>
			</View>
			<Card.Divider />
			<View style={styles.row}>
				<Avatar
					rounded
					size='medium'
					source={{
						uri: userPhoto,
					}}
				/>
				<View style={styles.column}>
					<ListItem.Subtitle style={styles.posted}>Post By:</ListItem.Subtitle>
					<ListItem.Title style={{ paddingTop: 4, paddingBottom: 8 }}>
						{postedBy}
					</ListItem.Title>
					<ListItem.Subtitle style={styles.date}>Posted on:</ListItem.Subtitle>
					<ListItem.Subtitle style={styles.date}>
						{splicedDate[0]} {splicedDate[1]} {splicedDate[2]} {splicedDate[3]}
					</ListItem.Subtitle>
					<ListItem.Subtitle style={styles.date}>
						at {time} PST
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
	);
};

export default PostListItem;
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		// marginTop: 32,
	},
	wrapper: {
		alignSelf: 'center',
		// backgroundColor: 'pink',
		maxWidth: 500,
		paddingRight: 16,
		paddingLeft: 16,
		width: wp('100%'),
		paddingBottom: 16,
	},
	text: {
		paddingLeft: 16,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 16,
		paddingRight: 16,
		alignItems: 'center',
	},
	image: {
		borderRadius: 8,
		height: 400,
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
