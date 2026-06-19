import React, { useEffect } from 'react';
import {Animated, Platform, View} from 'react-native';

// navigations, bottom tabs and routes
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorParamList} from './navigation-route';
import {navigationRef} from './navigation-utilities';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

//icons 
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

import {Colors, darkTheme, lightTheme,} from '../themes/colors'
import { scale } from '../themes/scale';
import {createStyle} from './navigationStyles';

import  HomeScreen  from '../(tabs)/home/HomeScreen';
import  AddScreen  from '../(tabs)/add/AddScreen';
import  AnalyticsScreen  from '../(tabs)/analytics/AnalyticsScreen';
import  JournalScreen  from '../(tabs)/journal/JournalScreen';
import  SettingsScreen  from '../(tabs)/settings/SettingsScreen';
import OnboardingOneScreen from '../(onboarding)/OnBoardingOneScreen';
import OnboardingTwoScreen from '../(onboarding)/OnBoardingTwoScreen';

//passing any valid NavigationContainer prop, but none are required.
type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>;

//animation eventListener
const av = new Animated.Value(0);
av.addListener(()=>{
    return;
});

//stack navigatior with screens with route parameters
const Stack = createStackNavigator<NavigatorParamList>();
const Tab = createBottomTabNavigator<NavigatorParamList>();

//TabsStack
const TabStack = () => {
  const styles = createStyle();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        keyboardHidesTabBar: true,
        tabBarIcon:({focused, size})=>{
                    let iconName;
                    if (route.name== 'HomeScreen') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name == 'AnalyticsScreen') {
                        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                    }else if (route.name == 'AddScreen') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }else if (route.name == 'JournalScreen') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name == 'SettingsScreen') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return (
                    <View style={styles.tabContainer}>
                        <Ionicons
                            name={iconName as any}
                            size={scale(focused ? 25 : 23)}
                            color={focused ? Colors.white : Colors.icon}
                        />
                    </View>
            );
        },
        headerShown: false,
        tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: scale(12),
        },
        lazy: false,
        tabBarStyle: {
            height:
                Platform.OS == 'ios'
                    ? scale(50 + useSafeAreaInsets().bottom)
                    : scale(60),
            backgroundColor: Colors.bgTab,
            position: 'absolute',
            bottom: scale(28),
            borderRadius: scale(30),
            marginHorizontal: scale(12),
        },
        })}
        initialRouteName={'HomeScreen'}>
        <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{tabBarLabel: 'homeScreen', tabBarShowLabel: false}}
        />

        <Tab.Screen
            name="AnalyticsScreen"
            component={AnalyticsScreen}
            options={{tabBarLabel: 'analyticsScreen', tabBarShowLabel: false}}
        />

        <Tab.Screen
            name="AddScreen"
            component={AddScreen}
            options={{tabBarLabel: 'addScreen', tabBarShowLabel: false}}
        />

        <Tab.Screen
            name="JournalScreen"
            component={JournalScreen}
            options={{tabBarLabel: 'journalScreen', tabBarShowLabel: false}}
        />

        <Tab.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{tabBarLabel: 'settingsScreen', tabBarShowLabel: false}}
        />

    </Tab.Navigator>
    );
};

//AuthStack
const AuthStack = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen
                name="OnBoardingOneScreen"
                component ={OnboardingOneScreen}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            />

            <Stack.Screen
                name="OnBoardingTwoScreen"
                component={OnboardingTwoScreen}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            />

            {/* <Stack.Screen
                name= "LoginScreen"
                component={LoginScreen}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            />

            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
            /> */}
        </Stack.Navigator>
)}

//RootStack
const RootStack = () =>{
    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{headerShown:false}}>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
                />

                <Stack.Screen
                    name='AnalyticsScreen'
                    component={AnalyticsScreen}
                    options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
                />

                <Stack.Screen
                    name='AddScreen'
                    component={AddScreen}
                    options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
                />

                <Stack.Screen
                    name='JournalScreen'
                    component={JournalScreen}
                    options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
                />

                <Stack.Screen
                    name='SettingsScreen'
                    component={SettingsScreen}
                    options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
                />
        </Stack.Navigator>
    )
}

//CombinedStack
const CombinedStack = () =>{
    const isAuthenticated = true;
    return(
        <Stack.Navigator
            screenOptions={{headerShown: false}}>

            <Stack.Screen
                name={'auth'}
                component={isAuthenticated? TabStack : AuthStack}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
            />

            <Stack.Screen
                name='tabStack'
                component={TabStack}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
            />

            <Stack.Screen
                name="authStack"
                component={AuthStack}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
            />

            <Stack.Screen
                name="rootStack"
                component={RootStack}
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
            />        
        </Stack.Navigator>
    )
}

export function AppNavigator(props: NavigationProps){
    return(
        <NavigationContainer ref={navigationRef as any} {...props}>
            {CombinedStack()}
        </NavigationContainer>
    );
}






