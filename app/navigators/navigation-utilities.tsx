import {
    createNavigationContainerRef,
    NavigationAction,
    NavigationState,
    PartialState,
    StackActions,
} from '@react-navigation/native';
import {useEffect, useRef} from 'react';
import {BackHandler} from 'react-native';
import {ScreenName} from './navigation-route';

export const RootNavigation = {
    navigate(_name: string, _params?: any) {},
    replace(_name: string, _params?: any) {},
    goBack() {},
    resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
    getRootState(): NavigationState {
        return {} as any;
    },
    dispatch(_action: NavigationAction) {},
};

// Give the navigation ref a generic so its methods (navigate, dispatch, etc.) accept arguments.
// Replace `any` with your actual ParamList type if you have one (e.g. RootStackParamList).
export const navigationRef = createNavigationContainerRef<any>();

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
    state: NavigationState | PartialState<NavigationState>,
): any {
    if (state?.index) {
        const route = state.routes[state.index];

    // Found the active route -- return the name
    if (!route.state) {
        return route.name;
    }

    // Recursive call to deal with nested routers
        return getActiveRouteName(route.state);
    }
    return null;
}

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false;
      }

      // grab the current route
      const routeName = getActiveRouteName(navigationRef.getRootState());

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // let the system know we've not handled this event
        return false;
      }

      // we can't exit, so let's turn this into a back action
      if (navigationRef.canGoBack()) {
        navigationRef.goBack();
        return true;
      }

      return false;
    };

// Subscribe when we come to life
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    // Unsubscribe when we're done
    return () => subscription.remove();
  }, []);
}

/**
 * use this to navigate to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * More info: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */
export function navigate(name: ScreenName, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as any, params as any);
  }
}

export function replace(name: ScreenName, params?: any) {
  navigationRef.dispatch(StackActions.replace(name, params));
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function resetRoot(screenName: ScreenName, params: any = {}) {
  if (__DEV__) {
    console.log('Navigate To :: ', screenName);
    console.log('Navigate Param ::', params);
  }
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [
        {
          name: screenName,
          params,
        },
      ],
    });
  }
}

export function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
}

export function navigateDispatch(screenName: string) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.replace('innerProfileStack', {screen: screenName}),
    );
  }
}

export function navigatePush(screenName: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(screenName, params));
  }
}

export interface INaivgationParam {
  screen?: ScreenName;
  params?: any;
}

