import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
  },
  indicator: {
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.yellow,
    marginHorizontal: 8,
  },
});

export default styles;
