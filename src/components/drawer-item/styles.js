import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/font-family';
const styles = StyleSheet.create({
  drawerList: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    width: '100%',
  },
  drawerListItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenLogo: {
    backgroundColor: COLORS.yellow1,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    marginRight: '10%',
  },
  menuLabel: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 14,
    color: COLORS.black2,
  },
  listItemSeparator: {
    borderWidth: 1,
    borderColor: COLORS.gray4,
    width: '80%',
    alignSelf: 'center',
  },
});
export default styles;
