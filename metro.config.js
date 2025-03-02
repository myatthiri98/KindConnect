 
/** @type {import('metro-config').MetroConfig} */
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const config = {
  watchFolders: [path.resolve(__dirname, 'node_modules')],
  resolver: {
    blacklistRE: /node_modules\/.*\/node_modules\/.*/, // Avoid duplicate dependencies
  },
  maxWorkers: 4, // Adjust based on CPU cores
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
