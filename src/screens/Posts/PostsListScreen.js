import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../Navigation/Main';
import { ScrollView, StyleSheet, FlatList, View, Text } from 'react-native';
import * as db from '../../config/firebaseConfig';
import useSWR from 'swr';
import PostListItem from './PostListItem';

export default function PostsListScreen(props) {
	// const [posts, setPosts] = useState([]);
	const user = useContext(UserContext);

	const { data: posts, error } = useSWR('posts', db.getCollection);

	console.log(posts, 'posts');

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
		<ScrollView>
			<FlatList
				data={posts}
				renderItem={({ item }) => {
					return (
						<PostListItem
							item={item}
							title={item.post.title}
							description={item.post.description}
							price={item.post.price}
							created={item.created.toDate()}
							category={item.post.category}
							image={item.post.image}
							postedBy={item.userData.displayName}
							altEmail={item.userData.altEmail}
							email={item.userData.email}
							phoneNumber={item.userData.phoneNumber}
							userPhoto={item.userData.photoURL}
							authorID={item.authorID}
						/>
					);
				}}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	view: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 300,
		height: 400,
	},
	text: {
		color: 'black',
		alignSelf: 'center',
	},
});
