import React from 'react';
import { Image, ScrollView, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import assets from '../../../assets';
import { signinStyles } from './signinStyles';
import Button from '../../components/button/component';
import InputComponent from '../../components/input/component';
import {scale} from '../../themes/scale';
import {useSignin} from './signinHook';
import CheckBoxComponent from '../../components/checkbox/component';
import { AntDesign } from '@expo/vector-icons';
import {goBack, navigate} from '../../navigators/navigation-utilities';
import {renderMarginBottom, renderMarginTop} from '../../utils/ui-utils';

const SigninScreen = () => {
    const styles = signinStyles();
    const {isSecure, setIsSecure} = useSignin();
    const {rewire_logo} = assets;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.flexRow}>
                <Image source={rewire_logo} style={styles.rewireLogo} />
                <Text style={styles.titleStyle}>RE-WIRE</Text>
            </View>
            {/* welcome back text */}
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Welcome Back</Text>
                <Text style={styles.textStyle}>Ready to track your mood? </Text>
            </View>
            {/* input section for the credentials */}
            <View style={styles.inputContainer}>
                <InputComponent
                    onChangeText={e => console.log(e)}
                    placeholder={'Email/Phone Number'}
                />

                <InputComponent
                    isSecure
                    secureTextEntry={isSecure}
                    onChangeText={e => console.log(e)}
                    placeholder={'Password'}
                    onSecurePress={() => setIsSecure(!isSecure)}
                />
            </View>
            <View style={[styles.colG2]}>
                <View style={styles.flexRow}>
                    <CheckBoxComponent 
                        onPress={e => {
                            console.log('item', e);
                        }}
                        isChecked={false}
                    />
                    <Text style={styles.textRemember}>Remember Me</Text>
                </View>
                <Text style={styles.textRemember}>Forgot Password</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button text="Sign In" textStyles={styles.buttonText} />
                <Button
                    onPress={() => navigate('SignUpScreen')}
                    text="Sign Up"
                    textStyles={styles.outlineButtonSignUpText}
                    buttonStyles={styles.outlineButton}
                />
            </View>

            <View style={styles.haveAccountContainer}>
                <Text style={styles.dontHaveText}>
                    Don't have an account ? {'\t'}
                        <Text style={styles.dontHaveText}>Sign Up</Text>
                </Text>
            </View>
            {renderMarginBottom(26)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default SigninScreen;
