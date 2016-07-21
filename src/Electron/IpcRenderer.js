"use strict";

const EventEmitter = require('electron').EventEmitter;
const ipcRenderer  = require('electron').ipcRenderer;

exports.on = function(channel) {
  return function(listener) {
    return ipcRenderer.on(channel, function(e,arg){
      listener(e)(arg)();
    });
  };
}

exports.once = function(channel) {
  return function(listener) {
    return ipcRenderer.once(channel, function(e,arg){
      listener(e)(arg)();
    });
  };
}

exports.removeListener = function(channel) {
  return function(listener) {
    return ipcRenderer.removeListener(channel, function(e,arg){
      listener(e)(arg)();
    });
  };
}

exports.removeAllListeners = function(channel) {
  return ipcRenderer.removeAllListener(channel);
}

exports.send = function(channel) {
  return function(arg) {
    return ipcRenderer.send(channel,arg);
  };
}

exports.sendSync = function (channel) {
  return function(arg) {
    return ipcRenderer.sendSync(channel,arg);
  };
}

exports.sendToHost = function(channel) {
  return function(arg) {
    return ipcRenderer.sendToHost(channel,arg);
  };
}
