import {View, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {COLORS} from '../../utils/colors';

const OtpInput = ({onValueChange}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState(['', '', '', '']);

  return (
    <View style={styles.contentContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="_"
        placeholderTextColor={COLORS.gray}
        keyboardType="number-pad"
        maxLength={1}
        ref={firstInput}
        onChangeText={text => {
          const newOtp = [...otp];
          newOtp[0] = text;
          setOtp(newOtp);
          if (text.length > 0) {
            secondInput.current.focus();
            onValueChange(newOtp);
          }
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="_"
        placeholderTextColor={COLORS.gray}
        keyboardType="number-pad"
        maxLength={1}
        ref={secondInput}
        onChangeText={text => {
          const newOtp = [...otp];
          newOtp[1] = text;
          setOtp(newOtp);
          text.length > 0
            ? thirdInput.current.focus()
            : firstInput.current.focus();
          onValueChange(newOtp);
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="_"
        placeholderTextColor={COLORS.gray}
        keyboardType="number-pad"
        maxLength={1}
        ref={thirdInput}
        onChangeText={text => {
          const newOtp = [...otp];
          newOtp[2] = text;
          setOtp(newOtp);
          text.length > 0
            ? fourthInput.current.focus()
            : secondInput.current.focus();
          onValueChange(newOtp);
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="_"
        placeholderTextColor={COLORS.gray}
        keyboardType="number-pad"
        maxLength={1}
        ref={fourthInput}
        onChangeText={text => {
          const newOtp = [...otp];
          newOtp[3] = text;
          setOtp(newOtp);
          text.length == 0 && thirdInput.current.focus();
          onValueChange(newOtp);
        }}
      />
    </View>
  );
};

export default OtpInput;
