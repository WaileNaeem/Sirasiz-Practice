import React, {useRef, useState} from 'react';
import {Animated, FlatList, useWindowDimensions} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../app-button';
import SliderItem from '../onboarding-slider-item';
import SlidesIndicator from '../indicator';
import {IMAGES} from '../../utils/images-path';
import {constants} from './constants';
import {COLORS} from '../../utils/colors';

const slides = [
  {
    id: 1,
    title: 'SKIP TO QUEUE!',
    description: 'Forget about wasting time in long queue with sirasiz.',
    image: IMAGES.onboardingImage1,
  },
  {
    id: 2,
    title: 'ADVANCE SEARCH!',
    description:
      'Find the best business in your area providing the service you want!',
    image: IMAGES.onboardingImage2,
  },
  {
    id: 3,
    title: 'TOP RECOMMENDATIONS',
    description:
      'Get the top business recommendations based on our advance rating system!',
    image: IMAGES.onboardingImage3,
  },
  {
    id: 4,
    title: 'BOOK APPOINTMENT',
    description: 'Select the time that suits you and book your appointment!',
    image: IMAGES.onboardingImage4,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const onNextPress = () => {
    if (currentIndex < slides.length - 1) {
      const newPosition = (currentIndex + 1) * width;
      slidesRef.current.scrollToOffset({offset: newPosition, animated: true});

      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.reset({index: 0, routes: [{name: NAVIGATION.LoginScreen}]});
    }
  };

  return (
    <LinearGradient
      colors={[COLORS.yellow, COLORS.blue]}
      style={styles.container}>
      <FlatList
        data={slides}
        key={item => item.id}
        ref={slidesRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemChanged}
        viewabilityConfig={viewConfig}
        renderItem={({item}) => {
          return <SliderItem item={item} />;
        }}
      />
      <SlidesIndicator data={slides} scrollX={scrollX} />
      <AppButton
        title={constants.NEXT}
        color={COLORS.yellow}
        onPress={onNextPress}
      />
    </LinearGradient>
  );
};

export default Slider;
