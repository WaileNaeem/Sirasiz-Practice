import React, {useRef, useState} from 'react';
import {Animated, FlatList, useWindowDimensions} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../app-button';
import SliderItem from '../onboarding-slider-item';
import SlidesIndicator from '../indicator';
import {constants} from './constants';
import {COLORS} from '../../utils/colors';
import {slides} from '../../utils/slides';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const slidesRef = useRef(null);
  const navigation = useNavigation();

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
      navigation.reset({index: 0, routes: [{name: Navigation.LOGIN}]});
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
        textColor={COLORS.black2}
      />
    </LinearGradient>
  );
};

export default Slider;
