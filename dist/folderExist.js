"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.folderExist = folderExist;

var _createFolder = require("./createFolder");

var _utils = require("./utils/utils");

var fs = require('fs');

function folderExist() {
  if (!fs.existsSync(_utils.path)) (0, _createFolder.createFolder)();
}