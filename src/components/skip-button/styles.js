import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/font-family';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    padding: 10,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  text: {
    color: COLORS.black1,
    fontSize: 15,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
});

export default styles;
