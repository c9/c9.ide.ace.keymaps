define(function(require, exports, module) {

exports.showCli = true;
exports.aceKeyboardHandler = require("ace/keyboard/vim").handler;

exports.aceKeyboardHandler.defaultKeymap.unshift(
    
    { keys: ':', type: 'action', action: 'aceCommand', actionArgs: { exec: function(ace) {
        ace.showCommandLine(":");
    } } }
    
);

});