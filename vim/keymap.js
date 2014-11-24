define(function(require, exports, module) {

exports.showCli = true;
exports.aceKeyboardHandler = require("ace/keyboard/vim").handler;

exports.aceKeyboardHandler.defaultKeymap.unshift(
    { keys: ':', type: 'action', action: 'aceCommand', actionArgs: { exec: function(ace) {
        ace.showCommandLine(":");
    } } }
);

exports.aceKeyboardHandler.defaultKeymap.push(
    {keys: 'gt', type: 'action', action: 'aceCommand', actionArgs: {exec: ideCommand, name: 'gototableft'}},
    {keys: 'gT', type: 'action', action: 'aceCommand', actionArgs: {exec: ideCommand, name: 'gototabright'}}
);

exports.execIdeCommand = null;
function ideCommand() {
    exports.execIdeCommand(this.name);
}

});