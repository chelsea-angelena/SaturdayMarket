import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import * as db from '../../config/firebaseConfig';

export default function SavedList({ savedItem, user }) {
	const [savedData, setSavedData] = useState([]);
	console.log(savedItem, 'saved');

	const getSavedList = async () => {
		await savedItem;
		let result = db.getSaveData(savedItem);
		setSavedData(result);
	};

	useEffect(() => {
		getSavedList();
	}, []);
	if (!savedItem) {
		return <Text>Loading....</Text>;
	}
	return (
		<FlatList
			data={savedData}
			keyExtractor={(savedData) => savedData.id}
			renderItem={({ item }) => {
				return <SavedListItem item={item} />;
			}}
		/>
	);
}
const SavedListItem = ({ post, userData, item, created }) => {
	console.log(item, 'result in list ');
	return null;
};

//  	let Date = item.created.toDate();
//  	let dateArr = Date.toString();
//  	let dateSPlit = dateArr.split(' ');
//  	let splicedDate = dateSPlit.splice(0, 4);
//  	const navigation = useNavigation();
//  	const goToDetails = () => {
//  		navigation.navigate('SavedPostDetails', item);
//  	};

//  	console.log(post, userData);
//  	let { category, price, title, description, image, location } = post;
//  	let { displayName, email, altEmail, phoneNumber, photoURL } = userData;
//  	return (
//  		<Card>
//  			<Card.Image
//  				resizeMode='cover'
//  				source={{ uri: image }}
//  				alt='Posted Image'
//  				style={styles.image}
//  			/>
//  			<Card.Divider />
//  			<View style={styles.row}>
//  				<Card.Title style={styles.text}>{title}</Card.Title>
//  				<ListItem.Subtitle>${price}</ListItem.Subtitle>
//  			</View>
//  			<Card.Divider />
//  			<View style={styles.row}>
//  				<Avatar
//  					rounded
//  					source={{
//  						uri: photoURL,
//  					}}
//  				/>
//  				<View style={styles.column}>
//  					<ListItem.Subtitle style={styles.posted}>PostedBy:</ListItem.Subtitle>
//  					<ListItem.Title>{displayName}</ListItem.Title>

//  					<ListItem.Subtitle style={styles.date}>
//  						{splicedDate[0]} {splicedDate[1]} {splicedDate[2]}
//  					</ListItem.Subtitle>
//  				</View>
//  				<Icon
//  					type='material-community'
//  					name='chevron-right'
//  					size={24}
//  					color='black'
//  					onPress={goToDetails}
//  				/>
//  			</View>
//  		</Card>
//  	);
//  };
//    {/* <Text>{category}</Text>
//    <Text>{description}</Text> */}
//    {/* <Text>{postedBy}</Text>
//    <Text>{altEmail}</Text>
//    <Text>{email}</Text>
//    <Text>{phoneNumber}</Text>
//    <Image
//    	source={{ uri: userPhoto }}
//    	alt=''
//    	style={{ width: 200, height: 200 }}
//    /> */}
//   );
//   };

//   export default PostListItem;
//  const styles = StyleSheet.create({
//  	view: {
//  		width: 200,
//  		height: 400,
//  		alignItems: 'center',
//  		justifyContent: 'center',
//  		alignSelf: 'center',
//  	},
//  	text: {
//  		marginLeft: 16,
//  	},
//  	row: {
//  		flexDirection: 'row',
//  		justifyContent: 'space-between',
//  		marginLeft: 16,
//  		marginRight: 16,
//  		alignItems: 'center',
//  	},
//  	image: {
//  		width: '100%',
//  		height: 150,
//  	},

//  	column: {
//  		flexDirection: 'column',
//  	},
//  	posted: {
//  		fontSize: 12,
//  	},
//  	postBy: {
//  		fontSize: 13,
//  	},
//  	date: {
//  		fontSize: 12,
//  	},
//  });

// }
