import React from 'react';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header';
import {constants} from './constants';
import {ScrollView} from 'react-native';
import styles from './styles';
import {icons} from '../../utils/constants';
import Paragraph from '../../components/title-text';
import {useNavigation} from '@react-navigation/native';

const PrivacyPolicy = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.goBack();
  };
  return (
    <AppScreen style={styles.container}>
      <Header
        title={constants.PRIVACY_POLICY}
        iconLeft={icons.ARROW_LEFT}
        onPress={handleNavigation}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Paragraph title={constants.HEADING} paragraph={constants.PARAGRAPH} />
        <Paragraph title={constants.HEADING} paragraph={constants.PARAGRAPH} />
      </ScrollView>
    </AppScreen>
  );
};

export default PrivacyPolicy;
