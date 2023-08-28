import React from 'react';
import {ScrollView} from 'react-native';
import {constants} from './constants';
import {icons} from '../../utils/constants';
import AppScreen from '../../components/app-screen';
import styles from './styles';
import Header from '../../components/header';
import Heading from '../../components/title-text';
import {useNavigation} from '@react-navigation/native';

const TermsConditionScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.goBack();
  };
  return (
    <AppScreen style={styles.container}>
      <Header
        title={constants.TERMS_AND_CONDITION}
        iconLeft={icons.ARROW_LEFT}
        onPress={handleNavigation}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Heading title={constants.TITLE} paragraph={constants.TEXT} />
        <Heading title={constants.TITLE} paragraph={constants.TEXT} />
      </ScrollView>
    </AppScreen>
  );
};

export default TermsConditionScreen;
