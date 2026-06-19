import {StyleSheet} from 'react-native';
import {FontSize} from '../themes/font-size';
import {scale} from '../themes/scale';
import {typography} from '../themes/typography';

export const createStyle = () =>
    StyleSheet.create({
        tabContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: scale(100),
        },
        textStyle: {
            fontSize: FontSize.FONT_12Px,
            fontFamily: typography.medium,
        },
    });
