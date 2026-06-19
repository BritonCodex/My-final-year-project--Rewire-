import {StyleSheet} from 'react-native';
import {FontSize} from '../themes/font-size';
import {scale} from '../themes/scale';
import {typography} from '../themes/typography';
import { Colors } from '../themes/colors';

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
        addButtonContainer: {
            backgroundColor: Colors.bgTab,
            width: scale(60),
            height: scale(60),
            borderRadius: scale(30),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: scale(-35),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 8,
},
    });
