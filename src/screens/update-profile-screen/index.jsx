import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppScreen from '../../components/app-screen';
import styles from './styles';
import {constants} from './constants';
import AppTextinput from '../../components/app-textinput';
import {IMAGES} from '../../utils/images-path';
import CheckBox from '@react-native-community/checkbox';
import {COLORS} from '../../utils/colors';
import AppButton from '../../components/app-button';
import {BUTTONS, INPUT_KEYS} from '../../utils/constants';
import {useFormik} from 'formik';
import {generateSchema} from '../../utils/form-validation';
import ErrorMessage from '../../components/error-message';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';
import {useSelector} from 'react-redux';

const UpdateProfile = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckboxErrorVisible, setisCheckboxErrorVisible] = useState(false);
  const user = {
    firstName: '',
    lastName: '',
  };
  const navigation = useNavigation();
  const phoneNumber = useSelector(state => state.phone.phoneNumber);
  const phoneNumberDashed = phoneNumber.replace(
    /(\d{3})(\d{3})(\d{4})(\d{4})/,
    '$1 $2 $3 $4',
  );
  const {handleBlur, handleSubmit, handleChange, touched, errors, values} =
    useFormik({
      initialValues: user,
      validationSchema: generateSchema(user),
      onSubmit: values => {
        if (isChecked) {
          setisCheckboxErrorVisible(false);
          navigation.reset({index: 0, routes: [{name: Navigation.DRAWER}]});
        } else {
          setisCheckboxErrorVisible(true);
        }
      },
    });
  useEffect(() => {
    if (isChecked) {
      setisCheckboxErrorVisible(false);
    }
  });

  return (
    <AppScreen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainer}>
          <KeyboardAvoidingView
            style={styles.contentContainer}
            behavior="padding"
            keyboardVerticalOffset={50}>
            <Text style={styles.updateProfileText}>
              {constants.UPDATE_PROFILE}
            </Text>
            <Text style={styles.updateText}>
              {constants.UPDATE_YOUR_PROFILE}
            </Text>
            <AppTextinput
              image={IMAGES.userLogo}
              title={constants.FIRST_NAME}
              style={styles.textInput}
              value={values.firstName}
              onChangeText={handleChange(INPUT_KEYS.FIRST_NAME)}
              onBlur={handleBlur(INPUT_KEYS.FIRST_NAME)}
            />
            {touched?.firstName && errors?.firstName && (
              <ErrorMessage message={errors?.firstName} />
            )}
            <AppTextinput
              image={IMAGES.userLogo}
              title={constants.LAST_NAME}
              style={[
                styles.textInput,
                {
                  marginTop:
                    errors?.firstName && touched?.firstName ? 0 : 19.455,
                },
              ]}
              value={values.lastName}
              onChangeText={handleChange(INPUT_KEYS.LAST_NAME)}
              onBlur={handleBlur(INPUT_KEYS.LAST_NAME)}
            />
            {touched?.lastName && errors?.lastName && (
              <ErrorMessage message={errors?.lastName} />
            )}
            <AppTextinput
              image={IMAGES.phoneIconGray}
              title={constants.MOBILE_NUMBER}
              style={[
                styles.disabledInput,
                {
                  marginTop: errors?.lastName && touched?.lastName ? 0 : 19.455,
                },
              ]}
              editable={false}
              value={phoneNumberDashed}
              disabledTextStyle={styles.disabledtext}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                disabled={false}
                value={isChecked}
                onValueChange={newValue => setIsChecked(newValue)}
                tintColors={{true: COLORS.green, false: COLORS.green}}
              />
              <Text style={styles.acknowledgeText}>
                {constants.ACKNOWLEDGE}
              </Text>
            </View>
            {isCheckboxErrorVisible && (
              <ErrorMessage message={constants.CHECKBOX_ERROR} />
            )}
            <AppButton
              color={COLORS.blue}
              title={BUTTONS.CONTINUE}
              textColor={COLORS.white}
              style={[
                styles.continueButton,
                isCheckboxErrorVisible ? {marginTop: 0} : {marginTop: 19.455},
              ]}
              onPress={handleSubmit}
            />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </AppScreen>
  );
};

export default UpdateProfile;
