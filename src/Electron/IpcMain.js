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
      return ipcMain.removeListenr(channel, function(e,arg) {
        listener(e)(arg)();
      });
    };
  };
}

exports.removeAllListeners = function(channel) {
  return functon() {
    ipcMain.removeAllListeners(channel);
  };
}
