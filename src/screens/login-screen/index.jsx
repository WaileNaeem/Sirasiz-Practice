import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {constants} from './constants';
import styles from './styles';
import AppTextinput from '../../components/app-textinput';
import AppButton from '../../components/app-button';
import {COLORS} from '../../utils/colors';
import AppScreen from '../../components/app-screen';
import {IMAGES} from '../../utils/images-path';
import {generateSchema} from '../../utils/form-validation';
import {useFormik} from 'formik';
import {INPUT_KEYS} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';
import ErrorMessage from '../../components/error-message';
import LoginCheckbox from '../../components/checkbox-component';
import {useDispatch} from 'react-redux';
import {addPhoneNumber} from '../../redux/slices/phoneNumberSlice';
import api from '../../api/baseApi';

const LoginScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState();
  const [isApiErrorVisible, setIsApiErrorVisible] = useState(false);
  const [isCheckboxErrorVisible, setisCheckboxErrorVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = {
    phoneNumber: '',
  };
  const {handleBlur, handleSubmit, setValues, touched, errors, values} =
    useFormik({
      initialValues: user,
      validationSchema: generateSchema(user),
      onSubmit: async values => {
        if (isChecked) {
          setisCheckboxErrorVisible(false);
          const response = await api.post(
            constants.END_POINT + values?.phoneNumber,
          );
          dispatch(addPhoneNumber(values.phoneNumber));
          if (response.ok) {
            navigation.reset({
              index: 0,
              routes: [{name: Navigation.OTP_VERIFICATION}],
            });
            setIsApiErrorVisible(false);
          } else {
            setError(response.data.error.details);
            setIsApiErrorVisible(true);
          }
        } else {
          setisCheckboxErrorVisible(true);
        }
      },
    });
  const onChangeText = (value, key) => {
    setValues(prev => ({
      ...prev,
      [key]: value,
    }));
    setIsApiErrorVisible(false);
  };

  useEffect(() => {
    if (isChecked) {
      setisCheckboxErrorVisible(false);
    }
  });

  return (
    <AppScreen style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>{constants.WELCOME}</Text>
        <Text style={styles.enterPhoneText}>{constants.ENTER_PHONE}</Text>
        <AppTextinput
          style={styles.textInput}
          title={constants.PHONE_NUMBER}
          placeholder={constants.PLACEHOLDER_TEXT}
          placeholderTextColor={COLORS.black2}
          maxLength={16}
          image={IMAGES.phoneIconBlue}
          keyboardType="number-pad"
          value={values?.phoneNumber}
          onChangeText={text => onChangeText(text, INPUT_KEYS.PHONE_NUMBER)}
          onBlur={handleBlur(INPUT_KEYS.PHONE_NUMBER)}
        />
        {touched?.phoneNumber && errors?.phoneNumber && (
          <ErrorMessage message={errors.phoneNumber} />
        )}
        {isApiErrorVisible && <Text style={styles.errorMessage}>{error}</Text>}
        <LoginCheckbox
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          style={{
            marginTop: errors?.phoneNumber && touched?.phoneNumber ? 5 : 24.455,
          }}
        />
        {isCheckboxErrorVisible && (
          <ErrorMessage message={constants.CHECKBOX_ERROR} />
        )}
        <AppButton
          color={COLORS.blue}
          title={constants.NEXT}
          textColor={COLORS.white}
          style={[
            styles.nextButton,
            isCheckboxErrorVisible ? {marginTop: 5} : {marginTop: 24.455},
          ]}
          onPress={handleSubmit}
        />
      </View>
    </AppScreen>
  );
};

export default LoginScreen;
