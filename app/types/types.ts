import {JSX} from 'react';
import {TextStyle, ViewStyle, KeyboardTypeOptions} from 'react-native';

//button types
export interface IButtonProps{
    onPress?: (e: any)=> void;
    text: string;
    buttonStyles?: ViewStyle;
    textStyles?: TextStyle;
    component?: JSX.Element;
}

//input types
export interface IInputProps{
    onChangeText: (e: any)=> void;
    secureTextEntry?: boolean;
    placeholder: string;
    isSecure?: boolean;
    onSecurePress?: (e: any)=> void;
    keyboardType?: KeyboardTypeOptions | undefined;
    leftAction?: JSX.Element;
    containerStyle?: ViewStyle;
}

//checkbox types
export interface ICheckBoxProps{
    onPress?: (e: boolean)=> void;
    isChecked: boolean;
}