"use strict";

const ipcMain = require('electron').ipcMain;

exports.on = function(channel) {
  return function(listener) {
    return function() {
      return ipcMain.on(channel, function(e,arg) {
        listener(e)(arg)();
      });
    };
  };
}

exports.once = function(channel) {
  return function(listener) {
    return function() {
      return ipcMain.once(channel, function(e,arg){
        listener(e)(arg)();
      });
    };
  };
}

exports.removeListener = function(channel) {
  return function(listener) {
    return function() {
      return ipcMain.removeListener(channel, listener);
    };
  };
}

exports.removeAllListeners = function(channel) {
  return function() {
    ipcMain.removeAllListeners(channel);
  };
}

exports.removeAllChannelListeners = function() {
  return function() {
    ipcMain.removeAllListeners();
  };
}

exports.sender = function(e) {
  return function() {
    return e.sender;
  }
}
