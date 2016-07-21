"use strict";

const EventEmitter = require('electron').EventEmitter;
const ipcRenderer  = require('electron').ipcRenderer;

exports.on = function(channel) {
  return function(listener) {
    return ipcRenderer.on(channel,listener);
  };
}

exports.once = function(channel) {
  return function(listener) {
    return ipcRenderer.once(channel, listener);
  };
}

exports.removeListener = function(channel) {
  return function(listener) {
    return ipcRenderer.removeListener(channel, listener);
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
