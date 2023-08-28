import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/font-family';
const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '2%',
  },
  textInput: {
    padding: 20,
    fontSize: 18,
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.black1,
    backgroundColor: COLORS.white1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray1,
    borderRadius: 10,
  },
});
export default styles;
