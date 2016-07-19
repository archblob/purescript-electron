"use strict";

const EventEmitter = require('electron').EventEmitter;
const ipcRenderer  = require('electron').ipcRenderer;

exports.on = function(channel) {
  return function(listener) {
    ipcRenderer.on(channel,listener);
    return {};
  };
}

exports.once = function(channel) {
  return function(listener) {
    ipcRenderer.once(channel, listener);
    return {};
  };
}

exports.removeListener = function(channel) {
  return function(listener) {
    ipcRenderer.removeListener(channel, listener);
    return {};
  };
}

exports.removeAllListeners = function(channel) {
  ipcRenderer.removeAllListener(channel);
  return {};
}

exports.send = function(channel) {
  return function(args) {
    ipcRenderer.send(channel,arg);
    return {};
  };
}

exports.sendSync = function (channel) {
  return function(args) {
    ipcRenderer.sendSync(channel,arg);
    return {};
  };
}

exports.sendToHost = function(channel) {
  return function(arg) {
    ipcRenderer.sendToHost(channel,arg);
    return {};
  };
}
