import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/font-family';
const styles = StyleSheet.create({
  termsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24.455,
  },
  text: {
    fontSize: 12,
    color: COLORS.black2,
    fontFamily: FONTS.POPPINS_LIGHT,
  },
});
export default styles;
