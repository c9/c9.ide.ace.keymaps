define(function(require, exports, module) {
    main.consumes = [
        "Plugin", "ui", "ace", "menus", "settings", "vim.cli", "tabManager"
    ];
    main.provides = ["keymaps"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var ui = imports.ui;
        var tabManager = imports.tabManager;
        var ace = imports.ace;
        var menus = imports.menus;
        var settings = imports.settings;
        var cli = imports["vim.cli"];
        
        /***** Initialization *****/
        
        var plugin = new Plugin("Ajax.org", main.consumes);
        // var emit = plugin.getEmitter();
        
        var currentMode;
        
        var loaded = false;
        function load() {
            if (loaded) return false;
            loaded = true;
            
            var mnuKbModes = new ui.menu({
                "onprop.visible" : function(e) {
                    if (e.value) {
                        var value = settings.get("user/ace/@keyboardmode");
                        mnuKbModes.select(null, value);
                    }
                }
            });
            menus.addItemByPath("View/Keyboard Mode/", mnuKbModes, 150000, plugin);
            
            var c = 1000;
            ["Default", "Vim", "Emacs", "Sublime"].forEach(function(label) {
                menus.addItemByPath("View/Keyboard Mode/" + label, new ui.item({
                    type: "radio",
                    value: label.toLowerCase(), 
                    onclick: function(e) {
                        setMode(mnuKbModes.getValue());
                    }
                }), c += 100, plugin);
            });
            
            settings.on("read", function(){
                settings.setDefaults("user/ace", [
                    ["keyboardmode", "default"]
                ]);
                
                var mode = settings.get("user/ace/@keyboardmode");
                if (mode && mode != "default")
                    setMode(mode);
            }, plugin);
            
            settings.on("user/ace", function(){
                var mode = settings.get("user/ace/@keyboardmode");
                if (currentMode != mode)
                    setMode(mode);
            }, plugin);
    
            ace.on("create", function(e){ setMode(null, e); }, plugin);
        }
        
        /***** Methods *****/
        
        function setMode(mode, tab) {
            if (!settings.model.loaded)
                return;
                
            if (!mode) 
                mode = settings.get("user/ace/@keyboardmode");
            else if (currentMode != mode) {
                currentMode = mode;
                settings.set("user/ace/@keyboardmode", mode);
            }
    
            if (mode == "emacs" || mode == "vim") {
                cli.show();
                mode = "ace/keyboard/" + mode;
            } else {
                cli.hide();
                if (mode == "sublime")
                    mode = "plugins/c9.ide.ace.keymaps/sublime/keymap";
                else
                    mode = null;
            }
            
            (tab ? [tab] : tabManager.getTabs()).forEach(function(tab) {
                if (tab.editor && tab.editor.type == "ace") {
                    var editor = tab.editor.ace;
                    
                    // Set Mode
                    editor.setKeyboardHandler(mode);
               
                    if (cli.cmdLine) {
                        editor.cmdLine = cli.ace;
                        editor.showCommandLine;
                    }
                }
            });
        }
        
        function loadIdeKeymap(path) {
            
        }
        
        function showCommandLine(val) {
            this.cmdLine.editor = this;
            cli.show();
            this.cmdLine.focus();
            
            if (typeof val == "string")
                this.cmdLine.setValue(val, 1);
        }
    
        // function disable() {
        //     var editor = code.amlEditor.$editor;
        //     if (editor) {
        //         editor.keyBinding.removeKeyboardHandler(editor.$vimModeHandler);
        //         editor.keyBinding.removeKeyboardHandler(editor.$emacsModeHandler);
        //     }
        //     cmdLine && cmdLine.hide()
        // }
    
        /***** Lifecycle *****/
        
        plugin.on("load", function() {
            load();
        });
        plugin.on("enable", function() {
            
        });
        plugin.on("disable", function() {
            
        });
        plugin.on("unload", function() {
            loaded = false;
        });
        
        /***** Register and define API *****/
        
        /**
         * Vim mode for the Cloud9
         *
         * @author Sergi Mansilla <sergi@c9.io>
         * @copyright 2011, Ajax.org B.V.
         * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>
         */
        plugin.freezePublicAPI({
            
        });
        
        register(null, {
            keymaps: plugin
        });
    }
});