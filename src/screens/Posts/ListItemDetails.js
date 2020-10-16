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
	const [isDisabled, setIsDisabled] = useState(false);
	let { post, userData, authorID, created } = item;
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

	console.log(authorID);
	let profileID = authorID;

	let Date = created.toDate();
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
				containerStyle={{ alignSelf: 'center' }}
				wrapperStyle={{ alignItems: 'center', justifyContent: 'center' }}
			>
				<Card
					wrapperStyle={{
						alignItems: 'center',
						justifyContent: 'center',
						width: 300,
					}}
				>
					<Image
						source={{ uri: image }}
						alt=''
						resizeMode='cover'
						style={{ minWidth: 320, height: 200 }}
					/>
					<View style={styles.notrow}>
						<Card.Title style={styles.titleText}>{title}</Card.Title>
						<ListItem.Subtitle style={styles.subtitleText}>
							$ {price}
						</ListItem.Subtitle>
					</View>
					<Card.Divider />
					<Text style={styles.contentText}>{description}</Text>

					<Text style={styles.contentText}>{category}</Text>
					<Icon
						disbaled={isDisabled}
						disbaledStyle={{ color: colors.white }}
						onPress={savePost}
						type='material-community'
						name='heart'
						color={colors.medGrey}
					/>
				</Card>
				<Card wrapperStyle={{ width: 300 }}>
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
					<ListItem.Subtitle style={{ alignSelf: 'center' }}>
						{phoneNumber}
					</ListItem.Subtitle>

					<ListItem.Subtitle style={{ alignSelf: 'center', paddingTop: 16 }}>
						{splicedDate[0]} {splicedDate[1]} {splicedDate[2]}
					</ListItem.Subtitle>

					<Divider style={{ marginTop: 24 }} />
					<View style={styles.row}>
						<Text>See More Posts</Text>
						<Icon
							type='material-community'
							name='chevron-right'
							color={colors.onyx}
							size={24}
							onPress={() =>
								navigation.navigate('UserProfileScreen', { profileID })
							}
						/>
					</View>
				</Card>
				{/* <UserMap location={(latitude, longitude)} /> */}
			</Card>
		</Screen>
	);
};

export default ListItemDetails;
const styles = StyleSheet.create({
	view: {
		width: '100%',
	},
	text: {
		color: 'black',
		alignSelf: 'center',
	},
	profileCard: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	avatar: {
		alignSelf: 'center',
	},
	contentText: {
		fontSize: 14,
		paddingTop: 4,
		paddingBottom: 8,
	},
	notrow: {
		flexDirection: 'column',
		fontSize: 12,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
	},
	row: {
		flexDirection: 'row',
		fontSize: 12,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
		width: '100%',
	},
	titleText: {
		fontSize: 14,
	},
	subtitleText: {
		fontWeight: 'bold',
	},
	card: {
		marginTop: 32,
	},
});
