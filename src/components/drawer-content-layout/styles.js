import {StyleSheet} from 'react-native';
import {FONTS} from '../../utils/font-family';
import {COLORS} from '../../utils/colors';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    height: 144,
    justifyContent: 'flex-end',
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    alignItems: 'center',
    paddingBottom: '3%',
  },
  welcomeText: {
    fontFamily: FONTS.POPPINS_LIGHT,
    fontSize: 14,
    color: COLORS.white,
  },
  userName: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: 22,
    color: COLORS.white,
  },
  crossIcon: {
    height: 28,
    width: 28,
  },
  menuContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
});
export default styles;
