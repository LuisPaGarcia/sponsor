"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFolder = createFolder;

var fs = require("fs");

var path = ".github";

function createFolder() {
  fs.mkdirSync(path);
}