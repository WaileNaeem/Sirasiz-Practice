import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../utils/colors';
import {constants} from '../../screens/otp-verification-screen/constants';
import api from '../../api/baseApi';
import {useSelector} from 'react-redux';

const Countdown = ({style}) => {
  const [timer, setTimer] = useState(30);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [rotationActive, setRotationActive] = useState(true);
  const phoneNumber = useSelector(state => state.phone.phoneNumber);

  const handleReset = async () => {
    setTimer(30);
    setRotationAngle(0);
    setRotationActive(true);
    await api.post(constants.ENDPOINT + phoneNumber);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(prev => prev - 1);
        if (rotationActive) {
          setRotationAngle(angle => angle + 90);
        }
      } else {
        clearInterval(intervalId);
        setRotationActive(false);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, rotationActive]);
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.timerContainer}>
        <MaterialIcon
          name="timer-sand"
          size={20}
          color={COLORS.gray2}
          style={{transform: [{rotate: `${rotationAngle}deg`}]}}
        />
        <Text style={styles.time}>
          {timer}
          {constants.SECONDS_LEFT}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={handleReset}>
        <View style={styles.resendCodeContainer}>
          <FontAwesomeIcon name="rotate-right" size={20} color={COLORS.gray3} />
          <Text style={styles.resendCodeText}>{constants.RESEND_CODE}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Countdown;
