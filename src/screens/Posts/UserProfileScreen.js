import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import * as db from '../../config/firebaseConfig';
import { UserContext } from '../../../App';
import {
	SocialIcon,
	Divider,
	Icon,
	Button,
	Overlay,
	Card,
	ListItem,
	Avatar,
	Accessory,
	BottomSheet,
} from 'react-native-elements';
import colors from '../../styles/colors';
import MaterialCommunityIcon from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useSWR from 'swr';
import UsersList from './UsersList';
import Screen from '../../Atoms/Screen';

export default function UserProfileScreen(props, { route, navigation }) {
	const [visible, setVisible] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	// const [userData, setUserData] = useState(null);
	const { profileID } = props.route.params;
	console.log(profileID, 'userprofile route params');

	const { data: userData, error } = useSWR(profileID, db.getUserProfile);

	const toggleOverlay = () => {
		setVisible(!visible);
	};

	console.log(userData);
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
	if (error) {
		return <Text>....Error</Text>;
	}
	if (!userData) {
		return <Text>Loading....</Text>;
	}

	let { image, photoURL } = userData;

	return (
		<ScrollView>
			<Screen style={styles.view}>
				<Card containerStyle={styles.container} wrapperStyle={styles.wrapper}>
					{photoURL ? (
						<Avatar rounded size='xlarge' source={{ uri: photoURL }} />
					) : null}

					{image ? (
						<Avatar rounded size='xlarge' source={{ uri: image }} />
					) : null}
					{!photoURL && !image ? (
						<Avatar
							rounded
							size='x-large'
							icon={{ name: 'user', type: 'font-awesome' }}
							containerStyle={{ backgroundColor: colors.drab }}
							overlayContainerStyle={{ backgroundColor: colors.medGrey }}
						/>
					) : null}
					<Card.Title style={{ marginTop: 24 }}>
						{userData.displayName}
					</Card.Title>
					<ListItem.Subtitle style={{ padding: 8 }}>
						{userData.email}
					</ListItem.Subtitle>
					<ListItem.Subtitle style={{ padding: 8 }}>
						{userData.phoneNumber}
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
								Click to see more posts from
							</ListItem.Subtitle>
							<Card.Title>{userData.displayName}</Card.Title>
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

							<UsersList authorID={profileID} />
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
		paddingBottom: 64,
		marginBottom: 64,
	},
	container: {
		width: '100%',
		alignItems: 'center',
		alignSelf: 'center',
		// paddingTop: 64,
		// marginTop: 64,
		paddingBottom: 64,
		marginBottom: 64,
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
});
