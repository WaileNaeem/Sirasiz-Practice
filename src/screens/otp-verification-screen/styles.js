import {StyleSheet} from 'react-native';
import {FONTS} from '../../utils/font-family';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
  },
  verificationText: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 26,
    color: COLORS.black2,
    marginTop: '10%',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    marginBottom: '3%',
  },
  codeSentText: {
    fontFamily: FONTS.POPPINS_LIGHT,
    fontSize: 14,
    color: COLORS.black2,
  },
  phoneNumber: {
    color: COLORS.black1,
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 14,
  },
  changeText: {
    color: COLORS.blue1,
    fontSize: 14,
    fontFamily: FONTS.POPPINS_BOLD,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    marginTop: '2%',
  },
  submitButton: {
    alignSelf: 'center',
    marginVertical: 25,
  },
  errorMessage: {
    color: COLORS.red,
    alignSelf: 'flex-start',
  },
});
export default styles;
