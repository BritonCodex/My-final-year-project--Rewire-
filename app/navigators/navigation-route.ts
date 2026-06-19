export type NavigatorParamList = {
    ['HomeScreen']: undefined;
    ['AnalyticsScreen']: undefined;
    ['AddScreen']: undefined;
    ['JournalScreen']: undefined;
    ['SettingsScreen']: undefined;
    ['OnBoardingTwoScreen']: undefined;
    ['OnBoardingOneScreen']: undefined;
    ['LoginScreen']: undefined;
    ['RegisterScreen']: undefined;
    ['authStack']: undefined;
    ['auth']: undefined;
    ['tabStack']: undefined;
    ['rootStack']:undefined;
}

export type ScreenName = keyof NavigatorParamList;