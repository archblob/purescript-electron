"use strict";

const ipcMain = require('electron').ipcMain;

exports.on = function(channel) {
  return function(listener) {
    return ipcMain.on(channel, listener);
  };
}

exports.once = function(channel) {
  return function(listener) {
    return ipcMain.once(channel, listener);
  }
}

exports.removeListener = function(channel) {
  return function(listener) {
    return ipcMain.removeListenr(channel, listener);
  };
}

exports.removeAllListeners = function(channel) {
  return ipcMain.removeAllListeners(channel);
}
