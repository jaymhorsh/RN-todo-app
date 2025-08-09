const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const nativeWindConfig = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(nativeWindConfig, { input: './styles/global.css' })

