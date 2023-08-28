import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/font-family';

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    padding: '3%',
  },
  title: {
    color: COLORS.blue,
    fontSize: 11,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  image: {
    width: 11,
    height: 16,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: COLORS.black2,
  },
});
export default styles;
