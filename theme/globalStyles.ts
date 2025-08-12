import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.neutralBackground,
  },
  title: {
    color: colors.neutralPrimary,
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 28,
  },
  paragraph: {
    color: colors.neutralSecondary,
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 14,
  },
});

export default globalStyles;

