"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filename = exports.path = exports.funding = void 0;

// @ts-check
var funding = function funding(_ref) {
  var github = _ref.github,
      patreon = _ref.patreon,
      open_collective = _ref.open_collective,
      community_bridge = _ref.community_bridge,
      paypal = _ref.paypal;
  return " # For more - see https://help.github.com/articles/displaying-a-sponsor-button-in-your-repository\n\n".concat(github ? 'github: ' + github : '', "\n").concat(patreon ? 'patreon: ' + patreon : '', "\n").concat(open_collective ? 'open_collective: ' + open_collective : '', "\n").concat(community_bridge ? 'community_bridge: ' + community_bridge : '', "\n").concat(paypal ? 'custom: ' + 'https://paypal.me/' + paypal : '', "\n");
};

exports.funding = funding;
var path = '.github';
exports.path = path;
var filename = 'FUNDING.yml';
exports.filename = filename;