import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import { Icon, Card, ListItem, Divider, Avatar } from 'react-native-elements';
import colors from '../../styles/colors';
// import UserMap from '../Posts/UserMap';
import * as db from '../../config/firebaseConfig';
import { UserContext } from '../../Navigation/Main';
import Screen from '../../Atoms/Screen';

const ListItemDetails = ({ navigation, route }, props) => {
	const { item } = route.params;

	const user = useContext(UserContext);
	const userId = user.uid;
	console.log(user, 'details list user');
	const [isDisabled, setIsDisabled] = useState(false);
	let { post, userData, authorID } = item;
	let {
		latitude,
		longitude,
		title,
		category,
		description,
		image,
		price,
	} = post;

	let { altEmail, email, displayName, phoneNumber, photoURL } = userData;

	let Date = item.created.toDate();
	let dateArr = Date.toString();
	let dateSPlit = dateArr.split(' ');
	let splicedDate = dateSPlit.splice(0, 4);
	let postId = item.id;

	const savePost = async () => {
		let result = await db.savePost(postId, userId);
	};

	return (
		<Screen style={styles.view}>
			<Card
				containerStyle={{ marginTop: 64, alignSelf: 'center' }}
				wrapperStyle={{ alignItems: 'center' }}
			>
				<Card.Title style={styles.titleText}>{title}</Card.Title>
				<Text style={styles.contentText}>{description}</Text>
				<ListItem.Subtitle>{price}</ListItem.Subtitle>

				<Text style={styles.contentText}>{category}</Text>
				<Image
					source={{ uri: image }}
					alt=''
					style={{ width: 200, height: 200 }}
				/>
				<Card.Divider />
				<Icon
					disbaled={isDisabled}
					disbaledStyle={{ color: colors.white }}
					onPress={savePost}
					type='material-community'
					name='heart'
					color={colors.medGrey}
				/>
			</Card>
			<Card style={styles.profileCard}>
				<Avatar
					source={{ uri: photoURL }}
					size='large'
					rounded
					activeOpacity={0.7}
					containerStyle={{ alignSelf: 'center' }}
				/>
				<Card.Title>{displayName}</Card.Title>
				<ListItem.Subtitle style={{ alignSelf: 'center' }}>
					{altEmail}
				</ListItem.Subtitle>
				<ListItem.Subtitle style={{ alignSelf: 'center' }}>
					{email}
				</ListItem.Subtitle>
				<ListItem.Subtitle>{phoneNumber}</ListItem.Subtitle>

				<ListItem.Subtitle style={{ alignSelf: 'center' }}>
					{splicedDate[0]} {splicedDate[1]} {splicedDate[2]}
				</ListItem.Subtitle>
				<Card.Divider style={{ marginTop: 24 }} />
				<View style={styles.row}>
					<Text>See More Posts</Text>
					<Icon
						type='material-community'
						name='chevron-right'
						color={colors.onyx}
						size={24}
						onPress={() =>
							navigation.navigate('UserProfileScreen', { authorID })
						}
					/>
				</View>
			</Card>
			{/* <UserMap location={(latitude, longitude)} /> */}
		</Screen>
	);
};

export default ListItemDetails;
const styles = StyleSheet.create({
	text: {
		color: 'black',
		alignSelf: 'center',
	},
	profileCard: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		alignSelf: 'center',
	},
	contentText: {
		fontSize: 14,
	},
	titleText: {
		fontSize: 14,
	},
	card: {
		marginTop: 32,
	},
	row: {
		flexDirection: 'row',
		alignSelf: 'center',
		fontSize: 12,
	},
});
