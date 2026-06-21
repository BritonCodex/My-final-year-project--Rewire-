import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {checkBoxStyles} from './checkboxStyles';
import {scale} from '../../themes/scale';
import {Colors} from '../../themes/colors';
import { ICheckBoxProps } from '../../types/types';
import { MaterialIcons } from "@expo/vector-icons";

const CheckBoxComponent = ({
    onPress = ()=>{},
    isChecked = false,
}:ICheckBoxProps) => {
    const styles = checkBoxStyles();
    const [checked, setChecked] = useState(isChecked);
    return (
        <Pressable
            onPress = {()=>{
                setChecked(!checked);
                onPress(!checked);
            }}
            style={styles.container}
        >
            {
                checked && (
                    <MaterialIcons name='check' size={scale(20)} color={Colors.white}/>
                )
            }
        </Pressable>
    );
}

export default CheckBoxComponent;


