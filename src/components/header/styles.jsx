import {StyleSheet} from 'react-native';
import {FONTS} from '../../utils/font-family';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: 17,
    color: COLORS.black2,
  },
  leftStyle: {
    marginRight: '20%',
  },
});
export default styles;
