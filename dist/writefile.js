"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFile = writeFile;

var _utils = require("./utils/utils");

var _folderExist = require("./folderExist");

var fs = require('fs');

function writeFile(content) {
  (0, _folderExist.folderExist)();
  fs.writeFile("".concat(_utils.path, "/").concat(_utils.filename), content, function (err) {
    if (err) throw Error('Falta error writing file');
    console.log('\nThe file .github/FUNDING.yml has been added to your repo.\n');
  });
}