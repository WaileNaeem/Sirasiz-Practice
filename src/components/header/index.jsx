import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

import {COLORS} from '../../utils/colors';
import IconComponent from '../icon-component';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Header = ({title, iconLeft, iconRight, backgroundColor, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          {iconLeft && (
            <IconComponent backgroundColor={COLORS.yellow} name={iconLeft} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.header}>{title}</Text>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          {iconRight && (
            <IconComponent backgroundColor={backgroundColor} name={iconRight} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;
