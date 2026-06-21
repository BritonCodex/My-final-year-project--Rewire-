import React from 'react';
import { Pressable, Text }  from 'react-native';
import { buttonStyles as createButtonStyles } from './buttonStyles';
import { IButtonProps } from '../../types/types';

const Button = ({
    text,
    textStyles,
    buttonStyles,
    onPress,
    component
}: IButtonProps) =>{
    const styles = createButtonStyles();
    return(
        <Pressable style={[styles.container, buttonStyles]}>
            {component}
            <Text style={[styles.text, textStyles]}>{text}</Text>
        </Pressable>
    );
};

export default Button;