import {StyleSheet} from 'react-native';
import {FONTS} from '../../utils/font-family';
import {COLORS} from '../../utils/colors';
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginLeft: 5,
    fontSize: 13,
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.gray2,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  resendCodeText: {
    marginLeft: 5,
    color: COLORS.gray3,
    fontSize: 13,
    fontFamily: FONTS.POPPINS_BOLD,
  },
});
export default styles;
