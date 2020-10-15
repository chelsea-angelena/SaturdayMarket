import React, { useState, useEffect, useContext } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
	FormInput,
	ErrorMessage,
	FormButton,
} from '../../screens/Account/ProfileFormComponents';
import AppText from '../../Atoms/Text';
import { CheckBox, Overlay, Icon } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../Navigation/Main';
import Modal from 'modal-react-native-web';
import FormImagePicker from '../../Atoms/FormImagePicker';
import * as db from '../../config/firebaseConfig';
import useLocation from '../../hooks/useLocation';
import CategoryModal from './Categories';
import colors from '../../styles/colors';
import UserMap from './UserMap';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	description: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	price: Yup.number().required('Required'),
	images: Yup.array().min(1).required('Required'),
	categories: Yup.object().required,
});

export default function PostForm() {
	const [visible, setVisible] = useState(false);
	const [category, setCategory] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [checked, setChecked] = useState(false);
	const [location] = useLocation();
	const navigation = useNavigation();
	console.log(location, 'location');
	const { latitude, longitude } = location;
	console.log(latitude);

	const toggleOverlay = () => {
		setVisible(!visible);
	};

	const updateCategory = async () => {
		let result = await chooseCategory();
		setCategory(result);
	};

	const onCheckBox = () => {
		let location = useLocation();
		console.log(location, 'location');
	};

	const user = useContext(UserContext);
	let userId = user.uid;

	const submitPostForm = async (values) => {
		const { images, title, description, phoneNumber, altEmail } = values;
		const { displayName, email, photoURL } = user;
		try {
			const response = await db.createPost(values, user, location, userId);
		} catch (error) {
			console.error(error);
		} finally {
			setSubmitting(false);
			navigation.navigate('PostsStack', {
				screen: 'PostsListScreen',
			});
		}
	};

	return (
		<View style={styles.container}>
			<Formik
				initialValues={{
					title: '',
					description: '',
					category: '',
					price: '',
					location: {
						latitude: '',
						longitude: '',
					},
					phoneNumber: '',
					altEmail: '',
					images: [],
				}}
				onSubmit={(values, { resetForm }) => {
					submitPostForm(values);
					resetForm({ values: '' });
				}}
			>
				{({
					handleChange,
					resetForm,
					values,
					handleSubmit,
					errors,
					isValid,
					touched,
					handleBlur,
					isSubmitting,
				}) => (
					<KeyboardAwareScrollView>
						<FormImagePicker style={styles.picker} type='Blob' name='images' />
						<FormInput
							name='title'
							value={values.title}
							onChangeText={handleChange('title')}
							placeholder='Enter a Title'
							autoCapitalize='none'
							onBlur={handleBlur('title')}
						/>
						<ErrorMessage errorValue={touched.title && errors.title} />
						<FormInput
							name='description'
							value={values.description}
							onChangeText={handleChange('description')}
							placeholder='Description'
							multiline={true}
							onBlur={handleBlur('description')}
						/>
						<ErrorMessage
							errorValue={touched.description && errors.description}
						/>
						<Icon
							type='material-community'
							name='chevron-down'
							color={colors.onyx}
							onPress={toggleOverlay}
						/>
						<Overlay
							overlayStyle={{ height: 350 }}
							isVisible={visible}
							onBackdropPress={toggleOverlay}
							style={styles.overlay}
							// ModalComponent={Modal}
						>
							<Icon
								type='material-community'
								name='chevron-down'
								color={colors.onyx}
								onPress={toggleOverlay}
							/>
							<CategoryModal
								toggleOverlay={toggleOverlay}
								updateCategory={setCategory}
							/>
						</Overlay>

						<AppText style={styles.text}>Choose a category</AppText>
						<FormInput
							name='category'
							value={values.category}
							onChangeText={handleChange('category')}
							placeholder={category}
							autoCapitalize='none'
							onBlur={handleBlur('category')}
						/>
						<ErrorMessage errorValue={touched.category && errors.category} />

						<FormInput
							name='price'
							value={values.price}
							onChangeText={handleChange('price')}
							placeholder='$ 0.00    (enter price)'
							onBlur={handleBlur('price')}
						/>
						<ErrorMessage errorValue={touched.price && errors.price} />
						<CheckBox
							title='Include a Map with your location?'
							status={checked ? 'checked' : 'unchecked'}
							onPress={() => setChecked(!checked)}
						/>
						{checked ? <UserMap location={location} /> : null}
						<FormInput
							name='altEmail'
							value={values.altEmail}
							onChangeText={handleChange('altEmail')}
							placeholder='(optional...) Enter an alternative email for buyers to contaxt you'
							iconName='ios-mail'
							iconColor='#2C384A'
							onBlur={handleBlur('altEmail')}
						/>
						<ErrorMessage errorValue={touched.altEmail && errors.altEmail} />
						<FormInput
							name='phoneNumber'
							value={values.phoneNumber}
							onChangeText={handleChange('phoneNumber')}
							placeholder='(optional....) Enter a contact phone number'
							iconName='ios-call'
							iconColor='#2C384A'
							onBlur={handleBlur('phoneNumber')}
						/>
						<ErrorMessage
							errorValue={touched.phoneNumber && errors.phoneNumber}
						/>
						<View style={styles.buttonContainer}>
							<FormButton
								buttonType='outline'
								onPress={handleSubmit}
								title='Submit Post'
								buttonColor='#039BE5'
								disabled={!isValid || isSubmitting}
								loading={isSubmitting}
							/>
						</View>
						<ErrorMessage errorValue={errors.general} />
					</KeyboardAwareScrollView>
				)}
			</Formik>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 24,
	},
	buttonContainer: {
		margin: 25,
	},
	text: {
		alignSelf: 'center',
	},
});
