module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: '.',
        alias: {
          '@components': './src/components/index.ts',
          '@hooks': './src/hooks/index.ts',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@lib': './src/lib',
          '@types': './src/types/type.d.ts',
          '@tw': './src/lib/tailwind/index.ts',
          '@env': './src/utils/get-env.ts',
          '@storage': './src/lib/react-storage/react-storage.ts',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
