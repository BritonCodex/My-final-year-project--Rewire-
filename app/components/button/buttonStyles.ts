import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';
import {scale} from '../../themes/scale';
import {FontSize} from '../../themes/font-size';

export const buttonStyles = () =>
    StyleSheet.create({
        container:{
            backgroundColor: Colors.button,
            borderRadius: scale(30),
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: scale(14),
        },
        text:{
            color: Colors.white,
            fontSize: FontSize.FONT_16Px,
            fontWeight: '400',
        },
    });