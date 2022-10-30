export const envConfig = {
  API_URL: process.env.API_URL,
};
export default ({config}) => {
  return {
    ...config,
    extra: {
      ...envConfig,
    },
  };
};
