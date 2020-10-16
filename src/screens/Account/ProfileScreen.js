import React, { useState, useEffect, useContext } from 'react';
import {
	FlatList,
	View,
	StyleSheet,
	Text,
	Image,
	Dimensions,
} from 'react-native';
import * as db from '../../config/firebaseConfig';
import { UserContext } from '../../Navigation/Main';
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
import MyPostsList from './MyPostsList';
import SafeScreen from '../../Atoms/SafeScreen';

export default function ProfileScreen({ user, signOut, route }) {
	const [myPosts, setMyPosts] = useState([]);

	let userId = user.uid;
	const navigation = useNavigation();

	const getMyPosts = async () => {
		let result = await db.getUserPosts(userId);
		setMyPosts(result);
	};

	useEffect(() => {
		getMyPosts();
	}, []);

	if (!userId) {
		return <Text>Loading....</Text>;
	}
	return (
		<Card
			containerStyle={{ width: 400, alignSelf: 'center' }}
			wrapperStyle={{
				alignItems: 'center',
				alignSelf: 'center',
				justifyContent: 'space-evenly',
			}}
		>
			<Avatar rounded size='xlarge' source={{ uri: user.photoURL }}>
				<Accessory
					size={24}
					onPress={() => navigation.navigate('EditProfile')}
				/>
			</Avatar>
			<Card.Title style={{ marginTop: 24 }}>{user.displayName}</Card.Title>
			<ListItem.Subtitle>{user.email}</ListItem.Subtitle>
			<ListItem.Subtitle>{user.phoneNumber}</ListItem.Subtitle>

			<Divider />
			<ListItem.Title style={{ marginTop: 24, marginBottom: 24 }}>
				<MyPostsList myPosts={myPosts} />
			</ListItem.Title>
			<Divider />

			<Button
				buttonStyle={{ width: 150 }}
				type='outline'
				raised
				title='Sign Out'
				icon={{
					name: 'ios-exit',
					size: 24,
					type: 'ionicon',
					color: '#517fa4',
				}}
				onPress={signOut}
			/>
		</Card>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200,
	},
	container: {
		width: 320,
		alignSelf: 'center',
	},
});
