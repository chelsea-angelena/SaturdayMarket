import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../App';
import {
	ScrollView,
	StyleSheet,
	Dimensions,
	FlatList,
	RefreshControl,
	View,
	Text,
} from 'react-native';
import * as db from '../../config/firebaseConfig';
import useSWR from 'swr';
import PostListItem from './PostListItem';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Screen from '../../Atoms/Screen';
import Logo from '../../Atoms/Logo';
import colors from '../../styles/colors';

const wait = (timeout) => {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
};

export default function PostsListScreen(props) {
	// const [posts, setPosts] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const user = useContext(UserContext);

	const { data: posts, error } = useSWR('posts', db.getCollection);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		wait(2000).then(() => setRefreshing(false));
	}, []);

	if (error) {
		return <Text>Error...</Text>;
	}
	if (!posts) {
		return <Text>Loading...</Text>;
	}
	if (posts.length === 0) {
		return <Text>No Lists....</Text>;
	}
	return (
		<Screen style={{ backgroundColor: colors.drab }}>
			<FlatList
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				data={posts}
				renderItem={({ item }) => {
					return (
						<>
							<PostListItem
								item={item}
								location={(item.post.latitude, item.post.longitude)}
								title={item.post.title}
								description={item.post.description}
								price={item.post.price}
								created={item.created}
								category={item.post.category}
								image={item.post.image}
								postedBy={item.userData.displayName}
								altEmail={item.userData.altEmail}
								email={item.userData.email}
								phoneNumber={item.userData.phoneNumber}
								userPhoto={item.userData.photoURL}
								authorID={item.authorID}
							/>
						</>
					);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		alignItems: 'center',
		justifyContent: 'center',
	},
	responsiveBox: {
		// marginTop: hp('10%'),
		paddingTop: hp('10%'),
		paddingBottom: hp('10%'),
		// marginBottom: hp('10%'),
		maxWidth: 500,
		width: wp('95%'),
		height: hp('100%'),
		borderWidth: 2,
		borderColor: 'orange',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
});
