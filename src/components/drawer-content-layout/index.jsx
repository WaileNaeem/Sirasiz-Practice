import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../utils/colors';
import {IMAGES} from '../../utils/images-path';
import {IMAGE_RESIZE_MODE} from '../../utils/constants';
import DrawerItemList from '../drawer-item-list';
import {constants} from './constant';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const DrawerContentLayout = () => {
  const navigation = useNavigation();

  const handleCloseButtonPress = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[COLORS.blue, COLORS.yellow]}
        style={styles.topContainer}>
        <View style={styles.welcomeContainer}>
          <View>
            <Text style={styles.welcomeText}>{constants.WELCOME}</Text>
            <Text style={styles.userName}>James Thomas</Text>
          </View>
          <TouchableWithoutFeedback onPress={handleCloseButtonPress}>
            <Image
              source={IMAGES.crossIcon}
              style={styles.crossIcon}
              resizeMode={IMAGE_RESIZE_MODE.CONTAIN}
            />
          </TouchableWithoutFeedback>
        </View>
      </LinearGradient>
      <DrawerItemList />
    </View>
  );
};

export default DrawerContentLayout;
