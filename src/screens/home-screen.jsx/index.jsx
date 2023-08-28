import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AppScreen from '../../components/app-screen';
import Header from '../../components/header';
import HeaderBlue from '../../components/header-blue';

const HomeScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <Text>Home Screen</Text>
    </AppScreen>
  );
};

export default HomeScreen;
