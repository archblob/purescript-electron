"use strict";

const ipcMain = require('electron').ipcMain;

exports.on = function(channel) {
  return function(listener) {
    ipcMain.on(channel, listener);
    return {};
  };
}

exports.once = function(channel) {
  return function(listener) {
    ipcMain.once(channel, listener);
    return {};
  }
}

exports.removeListener = function(channel) {
  return function(listener) {
    ipcMain.removeListenr(channel, listener);
    return {};
  };
}

exports.removeAllListeners = function(channel) {
  ipcMain.removeAllListeners(channel);
  return {};
}
