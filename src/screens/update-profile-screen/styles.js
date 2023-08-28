import {StyleSheet} from 'react-native';
import {FONTS} from '../../utils/font-family';
import {COLORS} from '../../utils/colors';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: '7%',
  },
  contentContainer: {
    flex: 1,
  },
  updateProfileText: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 26,
    color: COLORS.black2,
    marginTop: '10%',
  },
  updateText: {
    color: COLORS.black2,
    fontSize: 14,
    fontFamily: FONTS.POPPINS_LIGHT,
    marginBottom: '5%',
  },
  textInput: {
    marginVertical: '3%',
  },
  disabledInput: {
    fontSize: 15,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginVertical: '3%',
    color: COLORS.white3,
    backgroundColor: COLORS.white2,
  },
  disabledtext: {
    color: COLORS.white3,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginVertical: '2%',
  },
  acknowledgeText: {
    color: COLORS.black2,
    fontSize: 12,
    fontFamily: FONTS.POPPINS_LIGHT,
  },
  continueButton: {
    alignSelf: 'center',
    marginVertical: '2%',
  },
});
export default styles;
