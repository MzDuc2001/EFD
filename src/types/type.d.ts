type testHook = {
  count: number;
  increase: () => void;
};

type ObjectString = {
  [key: string]: string;
};

type Any = string | number | boolean | string[] | ObjectStyle;
type ObjectStyle = {
  [key: string]: string | number | boolean | string[] | ObjectStyle;
};

type OrderListMode = 'Grid' | 'List';

type token = {
  token: string;
  type: 'local' | 'session' | null;
  isNotFound: boolean;
  isExpired: boolean;
};
