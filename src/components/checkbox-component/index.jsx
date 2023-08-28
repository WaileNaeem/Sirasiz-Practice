import {View, Text} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {COLORS} from '../../utils/colors';
import {constants} from '../../screens/login-screen/constants';
import ClickableText from '../clickable-text';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';

const LoginCheckbox = ({style, isChecked, setIsChecked}) => {
  const navigation = useNavigation();
  const handleNavigation = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={[styles.termsContainer, style]}>
      <CheckBox
        disabled={false}
        value={isChecked}
        onValueChange={newValue => setIsChecked(newValue)}
        tintColors={{true: COLORS.green, false: COLORS.green}}
        style={styles.checkbox}
      />
      <Text style={styles.text}>
        {constants.ACCEPT_TEXT}
        <ClickableText
          text={constants.TERMS_CONDITIONS}
          onPress={() => handleNavigation(Navigation.TERMS_AND_CONDITION)}
        />
        {constants.AND}
        <ClickableText
          text={constants.PRIVACY_POLICY}
          onPress={() => handleNavigation(Navigation.PRIVACY_POLICY)}
        />
        {constants.CONTINUE_TEXT}
      </Text>
    </View>
  );
};

export default LoginCheckbox;
