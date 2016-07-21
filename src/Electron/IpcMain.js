"use strict";

const ipcMain = require('electron').ipcMain;

exports.on = function(channel) {
  return function(listener) {
    return ipcMain.on(channel, function(e,arg) {
      listener(e)(arg)();
    });
  };
}

exports.once = function(channel) {
  return function(listener) {
    return ipcMain.once(channel, function(e,arg){
      listener(e)(arg)();
    });
  };
}

exports.removeListener = function(channel) {
  return function(listener) {
    return ipcMain.removeListenr(channel, function(e,arg) {
      listener(e)(arg)();
    });
  };
}

exports.removeAllListeners = function(channel) {
  return ipcMain.removeAllListeners(channel);
}
