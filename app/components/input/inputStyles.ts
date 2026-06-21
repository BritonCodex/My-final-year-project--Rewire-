import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';
import {scale} from '../../themes/scale';
import {FontSize} from '../../themes/font-size';
import {typography} from '../../themes/typography';

export const inputStyles = () =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: Colors.border,
      borderRadius: scale(10),
      backgroundColor: Colors.white,
      paddingVertical: scale(2),
      marginTop: scale(12),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: scale(10),
      height: scale(50),
      paddingHorizontal: scale(12),
    },
    input: {
      fontSize: FontSize.FONT_13Px,
      color: Colors.black,
      fontFamily: typography.regular,
      paddingVertical: scale(12),
      flex: 1,
    },
    eye: {
      height: scale(22),
      width: scale(22),
    },
  });
