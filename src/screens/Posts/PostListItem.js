import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Avatar, ListItem, Card, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Screen from '../../Atoms/Screen';

const PostListItem = ({
	item,
	title,
	created,
	description,
	price,
	category,
	image,
	postedBy,
	altEmail,
	email,
	phoneNumber,
	authorID,
	userPhoto,
}) => {
	console.log(authorID, 'authorID');

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
		<Screen>
			<Card
				containerStyle={{ minWidth: 320, maxWidth: 500, alignSelf: 'center' }}
			>
				<Card.Image
					resizeMode='cover'
					source={{ uri: image }}
					alt='Posted Image'
					style={styles.image}
				/>
				<Card.Divider />
				<View style={styles.row}>
					<ListItem.Title
						style={
							(styles.text, { padding: 16, fontSize: 18, fontWeight: 'bold' })
						}
					>
						{title}
					</ListItem.Title>
					<ListItem.Subtitle style={{ fontWeight: 'bold ' }}>
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
						<ListItem.Subtitle style={styles.posted}>
							PostedBy:
						</ListItem.Subtitle>
						<ListItem.Title style={{ paddingTop: 4, paddingBottom: 8 }}>
							{postedBy}
						</ListItem.Title>

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
		</Screen>
	);
};

export default PostListItem;
const styles = StyleSheet.create({
	view: {
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		width: 320,
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
		// height: 150,
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
