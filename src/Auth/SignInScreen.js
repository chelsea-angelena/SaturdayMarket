import React, { useState, Component, Fragment } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';
import FormButton from './FormButton';
import ErrorMessage from './ErrorMessage';
import * as db from '../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.label('Email')
		.email('Enter a valid email')
		.required('Please enter a registered email'),
	password: Yup.string()
		.label('Password')
		.required()
		.min(6, 'Password must have at least 6 characters '),
});

const SignInScreen = () => {
	const [submitting, setSubmitting] = useState(false);
	const [user, setUser] = useState({});
	const navigation = useNavigation();
	const goToSignup = () => navigation.navigate('SignUpScreen');

	const handleLogin = async (values) => {
		const { email, password } = values;
		try {
			const response = await db.loginWithEmail(email, password);
			if (response.user) {
				setUser(response);
				navigation.navigate('MainNavigator', { screen: 'Home' });
			}
		} catch (error) {
			console.error(error);
			// setFieldError('general', error.message);
		} finally {
			setSubmitting(false);
		}
	};
	// const { passwordVisibility, rightIcon } = this.state;
	return (
		<View style={styles.container}>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => {
					handleLogin(values);
				}}
				validationSchema={validationSchema}
			>
				{({
					handleChange,
					values,
					handleSubmit,
					errors,
					isValid,
					touched,
					handleBlur,
					isSubmitting,
				}) => (
					<>
						<FormInput
							name='email'
							value={values.email}
							onChangeText={handleChange('email')}
							placeholder='Enter email'
							autoCapitalize='none'
							iconName='ios-mail'
							iconColor='#2C384A'
							onBlur={handleBlur('email')}
						/>
						<ErrorMessage errorValue={touched.email && errors.email} />
						<FormInput
							name='password'
							value={values.password}
							onChangeText={handleChange('password')}
							placeholder='Enter password'
							secureTextEntry
							iconName='ios-lock'
							iconColor='#2C384A'
							onBlur={handleBlur('password')}
						/>
						<ErrorMessage errorValue={touched.password && errors.password} />
						<View style={styles.buttonContainer}>
							<FormButton
								buttonType='outline'
								onPress={handleSubmit}
								title='LOGIN'
								buttonColor='#039BE5'
								disabled={!isValid || isSubmitting}
								loading={isSubmitting}
							/>
						</View>
						<ErrorMessage errorValue={errors.general} />
					</>
				)}
			</Formik>
			<Button
				title="Don't have an account? Sign Up"
				onPress={goToSignup}
				titleStyle={{
					color: '#F57C00',
				}}
				type='clear'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 50,
	},
	// logoContainer: {
	// 	marginBottom: 15,
	// 	alignItems: 'center',
	// },
	buttonContainer: {
		margin: 25,
	},
});

export default SignInScreen;
