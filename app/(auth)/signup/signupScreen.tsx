import React from 'react';
import { Image, ScrollView, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import assets from '../../../assets';
import { signupStyles } from './signupStyles';
import Button from '../../components/button/component';
import InputComponent from '../../components/input/component';
import {scale} from '../../themes/scale';
import {useSignup} from './signupHook';
import CheckBoxComponent from '../../components/checkbox/component';
import { AntDesign } from '@expo/vector-icons';
import {goBack, navigate} from '../../navigators/navigation-utilities';
import {renderMarginTop} from '../../utils/ui-utils';



const SignupScreen = () => {
    const styles = signupStyles();
    const {isSecure, setIsSecure} = useSignup();
    const {rewire_logo} = assets;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.flexRow}>
                <Image source={rewire_logo} style={styles.rewireLogo} />
                <Text style={styles.titleStyle}>RE-WIRE</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[styles.textStyle, styles.textCenter]}>Sign Up</Text>
            </View>

            <View style={styles.inputContainer}>
                <InputComponent
                  onChangeText={e => console.log(e)}
                  placeholder={'Full Name'}
                />
                <InputComponent
                  onChangeText={e => console.log(e)}
                  placeholder={'Email Address'}
                />
                <InputComponent
                  isSecure
                  secureTextEntry={isSecure}
                  onChangeText={e => console.log(e)}
                  placeholder={'Password'}
                  onSecurePress={() => setIsSecure(!isSecure)}
                />
            </View>
            {renderMarginTop(12)}

            <View style={styles.buttonContainer}>
                <Button 
                  text='Sign Up' 
                  onPress={()=> navigate('SignUpScreen')}
                  textStyles={styles.buttonText}
                />
                <Button
                    onPress={()=>navigate('HomeScreen')}
                    text='Sign In'
                    textStyles={styles.outlineButtonSignUpText}
                    buttonStyles={styles.outlineButton}
                />
            </View>
            
            <View style={styles.haveAccountContainer}>
                <Text style={styles.dontHaveText}>
                  Already have an account? {'\t'}
                  <Text onPress={goBack} style={styles.dontHaveText}>
                    Login
                  </Text>
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default SignupScreen;
