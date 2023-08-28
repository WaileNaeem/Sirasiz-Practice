import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '70%',
    marginBottom: 20,
  },
  title: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: FONTS.POPPINS_BOLD,
    lineHeight: 35,
    marginBottom: 10,
  },
  description: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FONTS.POPPINS_LIGHT,
    textAlign: 'center',
    paddingHorizontal: '4%',
  },
  skipButton: {
    padding: 10,
    flexDirection: 'row',
    gap: 5,
  },
});

export default styles;
