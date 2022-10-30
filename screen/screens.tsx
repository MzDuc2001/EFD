import * as test from './test/test';
import * as login from './login/login';
export const screens: {[key: string]: (...args: unknown[]) => JSX.Element} = {
  ...login,
};
