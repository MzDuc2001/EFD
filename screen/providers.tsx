import {useMemo} from 'react';
import {NavigationProvider} from '@lib/navigation/navigation-provider';
import {screens} from './screens';
import {SCREENS, INITIAL_ROUTE} from '@constants/screens';

export const Providers = () => {
  const JSXChildrenKey = useMemo(() => Object.keys(screens), []);
  return (
    <NavigationProvider initialRoute={INITIAL_ROUTE}>
      {Screen =>
        JSXChildrenKey.map((key: string) => (
          <Screen.Stack
            key={key}
            {...(typeof SCREENS[key] !== 'string'
              ? {
                  name: '',
                  ...(SCREENS[key] as ObjectStyle),
                }
              : {
                  name: SCREENS[key] as string,
                })}
            component={screens[key]}
          />
        ))
      }
    </NavigationProvider>
  );
};
