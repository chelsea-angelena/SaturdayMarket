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

// const wait = (timeout) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, timeout);
// 	});
// };

export default function PostsListScreen(props) {
	const [posts, setPosts] = useState([]);
	// const [refreshing, setRefreshing] = useState(false);
	const user = useContext(UserContext);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	// const { data: posts, error } = useSWR('posts', db.getCollection);

	// const reFetch = async () => {
	// 	result = await db.getCollection('posts');

	// 	console.log(result);
	// };

	// 		let response = await db.getCollection('posts');
	// 		console.log(response);
	// 		posts.push(response);
	// 	} catch (e) {
	// 		setError(error);
	// 	}
	// 	wait(2000).then(() => setRefreshing(false));
	// }, [refreshing]);

	useEffect(() => {
		return db.postsRef.onSnapshot((querySnapshot) => {
			const newPosts = [];
			querySnapshot.forEach((doc) => {
				const { authorID, post, created, id, userData } = doc.data();
				newPosts.push({
					id: doc.id,
					post,
					authorID,
					created,
					userData,
				});
			});
			setPosts(newPosts);
			if (loading) {
				setLoading(false);
			}
		});
	}, []);

	// next: (querySnapshot) => {
	// 	const data = querySnapshot.docs.map((doc) => ({
	// 		id: doc.id,
	// 		...doc.data(),
	// 	}));
	// 	setPosts(data);
	// 	},
	// });

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
		<Screen>
			<FlatList
				keyExtractor={(posts) => posts.id}
				// refreshControl={
				// 	<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				// }
				data={posts}
				renderItem={({ item }) => {
					return (
						<>
							<PostListItem
								item={item}
								postId={item.post.id}
								title={item.post.title}
								description={item.post.description}
								price={item.post.price}
								category={item.post.category}
								image={item.post.image}
								postedBy={item.userData.displayName}
								altEmail={item.userData.altEmail}
								email={item.userData.email}
								phoneNumber={item.userData.phoneNumber}
								userPhoto={item.userData.photoURL}
								authorID={item.authorID}
								created={item.created.t}
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
