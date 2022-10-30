import {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

interface NavigationInterface {
  children: (props: {Stack: typeof Stack.Screen}) => ReactNode;
  initialRoute: string;
}

export const NavigationProvider = ({
  children,
  initialRoute,
}: NavigationInterface) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        {children?.({
          Stack: Stack.Screen,
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
