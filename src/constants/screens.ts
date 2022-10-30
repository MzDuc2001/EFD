import {
  DrawerNavigationOptions,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {ParamListBase, RouteProp} from '@react-navigation/native';
export const SCREENS: {
  [key: string]:
    | {
        name: string;
        options:
          | DrawerNavigationOptions
          | ((props: {
              route: RouteProp<ParamListBase, string>;
              navigation: any;
            }) => DrawerNavigationOptions)
          | undefined;
      }
    | string;
} = {
  Login: {
    name: 'Login',
    options: {headerShown: false, swipeEnabled: false},
  },
};
export type ScreenProps = DrawerScreenProps<{
  Login: any;
}>;
export const INITIAL_ROUTE = 'Login';
