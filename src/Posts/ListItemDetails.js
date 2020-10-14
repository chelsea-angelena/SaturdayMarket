import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ListItemDetails = (
	{
		navigation,
		route,

		// item,
		// title,
		// description,
		// price,
		// created,
		// category,
		// image,
		// postedBy,
		// altEmail,
		// email,
		// phoneNumber,
		// userPhoto,
	},
	props
) => {
	let {
		item: {
			post: { title, description, price, created, category, image },
			userData: { postedBy, altEmail, email, phoneNumber, userPhoto },
		},
	} = route.params;
	console.log(postedBy);

	// let {
	// 	title,
	// 	description,
	// 	price,
	// 	created,
	// 	category,
	// 	image,
	// 	postedBy,
	// 	altEmail,
	// 	email,
	// 	phoneNumber,
	// 	userPhoto,
	// } = item;

	return (
		<View style={styles.view}>
			<Text style={styles.text}>{title}</Text>
			<Text>{description}</Text>
			<Text>{price}</Text>
			<Text>{created}</Text>
			<Text>{category}</Text>
			<Image
				source={{ uri: image }}
				alt=''
				style={{ width: 200, height: 200 }}
			/>
			<Text>{postedBy}</Text>
			<Text>{altEmail}</Text>
			<Text>{email}</Text>
			<Text>{phoneNumber}</Text>
			<Image
				source={{ uri: userPhoto }}
				alt=''
				style={{ width: 200, height: 200 }}
			/>
		</View>
	);
};

export default ListItemDetails;
const styles = StyleSheet.create({
	view: {
		width: 200,
		height: 400,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	text: {
		color: 'black',
		alignSelf: 'center',
	},
});
