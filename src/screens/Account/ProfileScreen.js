import React, { useState, useEffect, useContext } from 'react';
import {
	FlatList,
	View,
	ScrollView,
	StyleSheet,
	Text,
	Image,
	Dimensions,
} from 'react-native';
import * as db from '../../config/firebaseConfig';
import { UserContext } from '../../../App';
import {
	Divider,
	Overlay,
	Icon,
	Button,
	Card,
	ListItem,
	Avatar,
	Accessory,
} from 'react-native-elements';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import MyPostsList from './MyPostsList';
import useSWR from 'swr';
import Screen from '../../Atoms/Screen';

export default function ProfileScreen({ user, signOut, route }) {
	const [myPosts, setMyPosts] = useState([]);
	const [visible, setVisible] = useState(false);
	// const user = useContext(UserContext);
	let userId = user.uid;

	const toggleOverlay = () => {
		setVisible(!visible);
	};
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

	// const getProfileData = async () => {
	// 	try {
	// 		let result = await db.getUserProfile(userId);
	// 		console.log(result, 'userData result');
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	// useEffect(() => {
	// 	getProfileData();
	// }, []);

	if (!user) {
		return <Text>Loading....</Text>;
	}

	return (
		<ScrollView>
			<Screen style={styles.view}>
				<Card containerStyle={styles.container} wrapperStyle={styles.wrapper}>
					{user.photoURL ? (
						<Avatar rounded size='xlarge' source={{ uri: user.photoURL }}>
							<Accessory
								size={24}
								onPress={() => navigation.navigate('EditProfile')}
							/>
						</Avatar>
					) : null}

					{user.image ? (
						<Avatar rounded size='xlarge' source={{ uri: image }}>
							<Accessory
								size={24}
								onPress={() => navigation.navigate('EditProfile')}
							/>
						</Avatar>
					) : null}
					{!user.photoURL && !user.image ? (
						<Avatar
							rounded
							size='x-large'
							icon={{ name: 'user', type: 'font-awesome' }}
							containerStyle={{ backgroundColor: colors.drab }}
							overlayContainerStyle={{ backgroundColor: colors.medGrey }}
						>
							<Accessory
								size={24}
								onPress={() => navigation.navigate('EditProfile')}
							/>
						</Avatar>
					) : null}
				<Card.Title style={{ marginTop: 24 }}>Hello!</Card.Title>
					<Card.Title style={{ marginTop: 24 }}>{user.displayName}</Card.Title>
					<ListItem.Subtitle style={{ padding: 8 }}>
						{user.email}
					</ListItem.Subtitle>
					<ListItem.Subtitle style={{ padding: 8 }}>
						{user.phoneNumber}
					</ListItem.Subtitle>
					<Divider />
					<View>
						<View>
							<Divider
								style={{
									margin: 24,
									width: 300,
									padding: 0.5,
									backgroundColor: colors.drab,
								}}
							/>
							<ListItem.Subtitle style={{ alignSelf: 'center', padding: 8 }}>
								Click to View and Edit Posts
							</ListItem.Subtitle>

							<Icon
								type='material-community'
								color='black'
								size={32}
								name='chevron-down'
								onPress={toggleOverlay}
							/>
						</View>
						{/* <View style={{ height: 300 }}> */}
						<Overlay
							fullScreen={false}
							animationType='slide'
							isVisible={visible}
							transparent={true}
							onBackdropPress={toggleOverlay}
						>
							<Icon
								type='material-community'
								color='black'
								size={32}
								name='chevron-down'
								onPress={() => setVisible(false)}
							/>

							<MyPostsList myPosts={myPosts} />
						</Overlay>
						{/* </View> */}
						{/* <Button
								title='Open BottomSheet'
								onPress={() => setIsVisible(true)}
							/>
							<BottomSheet isVisible={isVisible}>
								<UsersList authorID={profileID} />
							</BottomSheet> */}
					</View>
					{/* <View style={styles.socialRow}>
							<SocialIcon type='pinterest' />
							<SocialIcon type='google' />
							<SocialIcon type='facebook' />
							<SocialIcon type='instagram' />
							<SocialIcon type='twitter' />
						</View> */}
					<View style={styles.buttonView}>
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
					</View>
				</Card>
			</Screen>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 200,
		// height: 200,
	},
	wrapper: {
		width: '100%',
		alignItems: 'center',
		alignSelf: 'center',
		// paddingBottom: 64,
		// marginBottom: 64,
	},
	container: {
		width: '100%',
		alignItems: 'center',
		alignSelf: 'center',
		// paddingTop: 64,
		// marginTop: 64,
		// paddingBottom: 64,
		// marginBottom: 64,
	},
	socialRow: {
		flexDirection: 'row',
	},
	buttonText: {
		width: 300,
		height: 100,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16,
		paddingTop: 16,
		borderWidth: 2,
		borderColor: colors.yellow,
	},
	buttonView: {
		height: 100,
		justifyContent: 'flex-end',
	},
});

// 	return (
// 		<Card
// 			containerStyle={{ width: 400, alignSelf: 'center' }}
// 			wrapperStyle={{
// 				alignItems: 'center',
// 				alignSelf: 'center',
// 				justifyContent: 'space-evenly',
// 			}}
// 		>
// 			<Avatar rounded size='xlarge' source={{ uri: user.photoURL }}>
// 				<Accessory
// 					size={24}
// 					onPress={() => navigation.navigate('EditProfile')}
// 				/>
// 			</Avatar>
// 			<Card.Title style={{ marginTop: 24 }}>{user.displayName}</Card.Title>
// 			<ListItem.Subtitle>{user.email}</ListItem.Subtitle>
// 			<ListItem.Subtitle>{user.phoneNumber}</ListItem.Subtitle>

// 			<Divider />
// 			<ListItem.Title style={{ marginTop: 24, marginBottom: 24 }}>
// 				<MyPostsList myPosts={myPosts} />
// 			</ListItem.Title>
// 			<Divider />

// 			<Button
// 				buttonStyle={{ width: 150 }}
// 				type='outline'
// 				raised
// 				title='Sign Out'
// 				icon={{
// 					name: 'ios-exit',
// 					size: 24,
// 					type: 'ionicon',
// 					color: '#517fa4',
// 				}}
// 				onPress={signOut}
// 			/>
// 		</Card>
// 	);
// }

// const styles = StyleSheet.create({
// 	image: {
// 		width: 200,
// 		height: 200,
// 	},
// 	container: {
// 		width: 320,
// 		alignSelf: 'center',
// 	},
// });
