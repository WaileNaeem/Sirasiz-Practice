import {constants} from '../components/onboarding-slider/constants';
import {IMAGES} from './images-path';

export const slides = [
  {
    id: 1,
    title: constants.QUEUE,
    description: constants.FORGET,
    image: IMAGES.onboardingImage1,
  },
  {
    id: 2,
    title: constants.SEARCH,
    description: constants.FIND,
    image: IMAGES.onboardingImage2,
  },
  {
    id: 3,
    title: constants.APPOINTMENT,
    description: constants.TIME,
    image: IMAGES.onboardingImage3,
  },
  {
    id: 4,
    title: constants.RECOMMEND,
    description: constants.GET_RECOMMENDATION,
    image: IMAGES.onboardingImage4,
  },
];
