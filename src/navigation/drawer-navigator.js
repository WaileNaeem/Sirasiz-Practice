import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/profile-screen';
import Navigation from './navigation-constants';
import NotificationsScreen from '../screens/notifications-screen';
import AppointmentScreen from '../screens/appointment-screen';
import TermsConditionScreen from '../screens/terms-and-condtion-screen';
import PrivacyPolicy from '../screens/privacy-policy-screen';
import ReportScreen from '../screens/report-screen';
import LoginScreen from '../screens/login-screen';
import BottomTabNavigator from './bottom-tab-navigator';
import DrawerContentLayout from '../components/drawer-content-layout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContentLayout {...props} />}>
      <Drawer.Screen
        name={Navigation.BOTTOM_TAB}
        component={BottomTabNavigator}
      />
      <Drawer.Screen name={Navigation.PROFILE} component={ProfileScreen} />
      <Drawer.Screen
        name={Navigation.NOTIFICATION}
        component={NotificationsScreen}
      />
      <Drawer.Screen
        name={Navigation.APPOINTMENT}
        component={AppointmentScreen}
      />
      <Drawer.Screen
        name={Navigation.TERMS_AND_CONDITION}
        component={TermsConditionScreen}
      />
      <Drawer.Screen
        name={Navigation.PRIVACY_POLICY}
        component={PrivacyPolicy}
      />
      <Drawer.Screen name={Navigation.REPORT} component={ReportScreen} />
      <Drawer.Screen name={Navigation.LOGIN} component={LoginScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
