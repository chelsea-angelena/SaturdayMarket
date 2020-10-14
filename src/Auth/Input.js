// import { Input } from 'react-native-elements';

// import React from 'react';
// import { View, Text } from 'react-native';


// const inputProps = {
//   icon: "email"
// }




// return (
//   <SafeAreaView style={styles.container}>
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         check: false,
//       }}
//       onSubmit={(values, actions) => {
//         handleSignup(values);
//       }}
//       validationSchema={validationSchema}
//     >
//       {({
//         handleChange,
//         values,
//         handleSubmit,
//         errors,
//         isValid,
//         touched,
//         handleBlur,
//         isSubmitting,
//         setFieldValue,
//       }) => (
//         <Fragment>
//           <FormInput
//             name='name'
//             value={values.name}
//             onChangeText={handleChange('name')}
//             placeholder='Enter your full name'
//             iconName='md-person'
//             iconColor='#2C384A'
//             onBlur={handleBlur('name')}
//           />
//           <ErrorMessage errorValue={touched.name && errors.name} />
//           <FormInput
//             name='email'
//             value={values.email}
//             onChangeText={handleChange('email')}
//             placeholder='Enter email'
//             autoCapitalize='none'
//             iconName='ios-mail'
//             iconColor='#2C384A'
//             onBlur={handleBlur('email')}
//           />
//           <ErrorMessage errorValue={touched.email && errors.email} />
//           <FormInput
//             name='password'
//             value={values.password}
//             onChangeText={handleChange('password')}
//             placeholder='Enter password'
//             iconName='ios-lock'
//             iconColor='#2C384A'
//             onBlur={handleBlur('password')}
//             secureTextEntry={passwordVisibility}
//             // rightIcon={
//             // <TouchableOpacity onPress={togglePasswordVisibility}>
//             // <Ionicons name={passwordIcon} size={28} color='grey' />
//             // 	</TouchableOpacity>
//             // }
//           />
//           <ErrorMessage errorValue={touched.password && errors.password} />
//           <FormInput
//             name='password'
//             value={values.confirmPassword}
//             onChangeText={handleChange('confirmPassword')}
//             placeholder='Confirm password'
//             iconName='ios-lock'
//             iconColor='#2C384A'
//             onBlur={handleBlur('confirmPassword')}
//             secureTextEntry/>


//           {/* //    	<TouchableOpacity>
//           //      onPress={handleConfirmPasswordVisibility}>
//           //   		<Ionicons name={confirmPasswordIcon} size={28} color='grey' />
//           //    	</TouchableOpacity>
//           // /> */}


//           <ErrorMessage
//             errorValue={touched.confirmPassword && errors.confirmPassword}
//           />
//           <CheckBox
//             containerStyle={styles.checkBoxContainer}
//             checkedIcon='check-box'
//             iconType='material'
//             uncheckedIcon='check-box-outline-blank'
//             title='Agree to terms and conditions'
//             checkedTitle='You agreed to our terms and conditions'
//             checked={values.check}
//             onPress={() => setFieldValue('check', !values.check)}
//           />
//           <View style={styles.buttonContainer}>
//             <FormButton
//               buttonType='outline'
//               onPress={handleSubmit}
//               title='SIGNUP'
//               buttonColor='#F57C00'
//               disabled={!isValid || isSubmitting}
//               loading={isSubmitting}
//             />
//           </View>
//           <ErrorMessage errorValue={errors.general} />
//         </Fragment>
//       )}
//     </Formik>
//     {/* <Button
//       title='Have an account? Login'
//       onPress={goToLogin}
//       titleStyle={{
//         color: '#039BE5',
//       }}
//       type='clear'
//     /> */}
//   </SafeAreaView>
// );
// };

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   marginTop: 50,
// },
// logoContainer: {
//   marginBottom: 15,
//   alignItems: 'center',
// },
// buttonContainer: {
//   margin: 25,
// },
// checkBoxContainer: {
//   backgroundColor: '#fff',
//   borderColor: '#fff',
// },
// });

// export default SignupScreen2;