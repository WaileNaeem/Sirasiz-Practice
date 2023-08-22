import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/font-family';
const styles = StyleSheet.create({
  button: {
    width: 305,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
  },
  text: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 17,
    color: COLORS.black2,
  },
});
export default styles;
