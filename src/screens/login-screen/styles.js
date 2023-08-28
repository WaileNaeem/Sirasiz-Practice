import {StyleSheet} from 'react-native';
import {FONTS} from '../../utils/font-family';
import {COLORS} from '../../utils/colors';
const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginVertical: '10%',
    width: 100,
    height: 40,
  },
  welcomeText: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 26,
    color: COLORS.black2,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  enterPhoneText: {
    fontSize: 14,
    fontFamily: FONTS.POPPINS_LIGHT,
    color: COLORS.black2,
    alignSelf: 'flex-start',
  },
  textInput: {
    marginTop: '10%',
  },
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
  boldText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  nextButton: {
    alignSelf: 'center',
    marginTop: 24.455,
  },
  checkbox: {
    marginRight: 3,
  },
  errorMessage: {
    color: COLORS.red,
    alignSelf: 'flex-start',
  },
});
export default styles;
