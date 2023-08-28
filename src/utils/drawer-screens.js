import Navigation from '../navigation/navigation-constants';
import {COLORS} from './colors';
import {IMAGES} from './images-path';

export const drawerScreens = [
  {
    id: 1,
    name: 'Profile',
    image: IMAGES.profileLogo,
    backgroundColor: COLORS.yellow1,
    navigation: Navigation.PROFILE,
  },
  {
    id: 2,
    name: 'Notifications',
    image: IMAGES.bellIcon,
    backgroundColor: COLORS.purple,
    navigation: Navigation.NOTIFICATION,
  },
  {
    id: 3,
    name: 'My Appointments',
    image: IMAGES.appointmentIcon,
    backgroundColor: COLORS.orange,
    navigation: Navigation.APPOINTMENT,
  },
  {
    id: 4,
    name: 'Terms and Conditions',
    image: IMAGES.termsIcon,
    backgroundColor: COLORS.green1,
    navigation: Navigation.TERMS_AND_CONDITION,
  },
  {
    id: 5,
    name: 'Privacy Policy',
    image: IMAGES.privacyPolicyIcon,
    backgroundColor: COLORS.blue2,
    navigation: Navigation.PRIVACY_POLICY,
  },
  {
    id: 6,
    name: 'Help',
    image: IMAGES.helpIcon,
    backgroundColor: COLORS.blue3,
    navigation: Navigation.REPORT,
  },
  {
    id: 7,
    name: 'Logout',
    image: IMAGES.logoutIcon,
    backgroundColor: COLORS.pink1,
    navigation: Navigation.LOGIN,
  },
];
