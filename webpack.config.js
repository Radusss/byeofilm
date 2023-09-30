// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      "react-native$": "react-native-web",
      "react-native-svg": "react-native-svg-web",
    },
  },
};
