import React from 'react';
import {Image, Pressable, TextInput, View} from 'react-native';
import {inputStyles as createInputStyles} from './inputStyles';
import {Colors} from '../../themes/colors';
import assets from '../../../assets';
import { IInputProps } from '../../types/types';

const InputComponent = ({
    onChangeText,
    secureTextEntry,
    placeholder,
    isSecure,
    onSecurePress,
    keyboardType,
    leftAction,
    containerStyle,
}:IInputProps) => {
    const styles = createInputStyles();
    const { eye } = assets;
    return (
        <View style={[styles.container, containerStyle]}>
            {leftAction}
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                placeholderTextColor={Colors.placeholder}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
            {isSecure && (
                <Pressable onPress={onSecurePress}>
                    <Image source={eye} style={styles.eye} resizeMode="contain" />
                </Pressable>
            )}
        </View>
    );
}

//const styles = StyleSheet.create({})

export default InputComponent;
