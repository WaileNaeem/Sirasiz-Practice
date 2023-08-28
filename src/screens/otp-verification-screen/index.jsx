import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {constants} from './constants';
import AppScreen from '../../components/app-screen';
import OtpInput from '../../components/otp-number';
import Countdown from '../../components/countdown';
import AppButton from '../../components/app-button';
import {COLORS} from '../../utils/colors';
import {BUTTONS} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';
import {useSelector} from 'react-redux';
import api from '../../api/baseApi';

const OTPVerificationScreen = () => {
  const [value, setValue] = useState([]);
  const navigation = useNavigation();
  const [isOTPErrorVisible, setIsOTPErrorVisible] = useState(false);
  const [isOtpValid, setisOtpValid] = useState(true);
  const [error, setError] = useState();
  const phoneNumber = useSelector(state => state.phone.phoneNumber);
  const phoneNumberDashed = phoneNumber.replace(
    /(\d{3})(\d{3})(\d{4})(\d{4})/,
    '$1-$2-$3-$4',
  );

  const handleValue = value => {
    setValue(value);
  };
  const otpCode = value.reduce((acc, value) => acc + value, '');

  const handleChangeNumber = () => {
    navigation.navigate(Navigation.LOGIN);
  };
  const handleSubmit = async () => {
    const response = await api.post(
      constants.ENDPOINT + phoneNumber + constants.CODE + otpCode,
    );
    if (response.ok) {
      setisOtpValid(true);
      navigation.reset({index: 0, routes: [{name: Navigation.UPDATE_PROFILE}]});
    } else {
      setError(response.data.error.details);
      setisOtpValid(false);
    }
  };
  useEffect(() => {
    if (otpCode.length === 1) {
      setIsOTPErrorVisible(true);
    } else {
      setIsOTPErrorVisible(false);
    }
  }, [otpCode]);

  return (
    <AppScreen style={styles.mainContainer}>
      <Text style={styles.verificationText}>{constants.VERIFICATION}</Text>
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.codeSentText}>{constants.CODE_SENT}</Text>
        <Text style={styles.phoneNumber}>{phoneNumberDashed}</Text>
        <Text style={styles.changeText} onPress={handleChangeNumber}>
          {constants.CHANGE}
        </Text>
      </View>
      <OtpInput onValueChange={handleValue} value={value} />
      {!isOtpValid && <Text style={styles.errorMessage}>{error}</Text>}
      {isOTPErrorVisible && (
        <Text style={styles.errorMessage}>{constants.OTP_ERROR}</Text>
      )}
      <Countdown
        style={otpCode.length === 1 ? {marginTop: 19.455} : {marginTop: 0}}
      />
      <AppButton
        color={COLORS.blue}
        style={styles.submitButton}
        title={BUTTONS.SUBMIT}
        textColor={COLORS.white}
        disabled={otpCode.length == 4 ? false : true}
        onPress={handleSubmit}
      />
    </AppScreen>
  );
};

export default OTPVerificationScreen;
