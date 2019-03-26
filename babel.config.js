module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/flow'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        'helpers': true,
        'regenerator': false
      }
    ]
  ]
};
