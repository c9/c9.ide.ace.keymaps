define(function(require, exports, module) {

module.exports = [
/* ide commands */
{
    bindKey: {mac: "cmd-w", win: "ctrl-w"},
    name: "close"
}, {
    bindKey: {mac: "cmd-shift-w", win: "ctrl-shift-w"},
    name: "close_window"
}, {
    bindKey: {win: "ctrl-f4"},
    name: "close_file"
}, {
    bindKey: {mac: "cmd-k cmd-down", win: "ctrl-k ctrl-down"},
    name: "close_pane"
}, {
    bindKey: {mac: "cmd-alt-.", win: "alt-."},
    name: "close_tag"
}, {
    bindKey: {linux: "ctrl-q"},
    name: "exit"
}, {
    bindKey: {mac: "cmd-o", win: "ctrl-o"},
    name: "prompt_open_file"
}, {
    bindKey: {mac: "cmd-shift-s", win: "ctrl-shift-s"},
    name: "prompt_save_as"
}, {
    bindKey: {mac: "cmd-ctrl-p", win: "ctrl-alt-p"},
    name: "prompt_select_workspace"
}, {
    bindKey: {mac: "cmd-shift-t", win: "ctrl-shift-t"},
    name: "reopen_last_file"
}, {
    bindKey: {mac: "cmd-s", win: "ctrl-s"},
    name: "save"
}, {
    bindKey: {mac: "cmd-alt-s"},
    name: "save_all"
}, {
    bindKey: {mac: "cmd-shift-n", win: "ctrl-shift-n"},
    name: "new_window"
}, 

{
    bindKey: {mac: "f7|cmd-b", win: "f7|ctrl-b"},
    name: "build"
}, {
    bindKey: {mac: "cmd-shift-b", win: "ctrl-shift-b"},
    name: "build",
    args: {variant: "Run"}
}, {
    bindKey: {mac: "ctrl-c", win: "ctrl-break"},
    name: "exec",
    args: {kill: true}
}, 

{
    bindKey: {mac: "cmd-t|cmd-p", win: "ctrl-p"},
    name: "show_overlay",
    args: {overlay: "goto", show_files: true}
}, {
    bindKey: {mac: "cmd-r", win: "ctrl-r"},
    name: "show_overlay",
    args: {overlay: "goto", text: "@"}
}, {
    bindKey: {mac: "ctrl-g", win: "ctrl-g"},
    name: "show_overlay",
    args: {overlay: "goto", text: ":"}
}, {
    bindKey: {win: "ctrl-;"},
    name: "show_overlay",
    args: {overlay: "goto", text: "#"}
}, {
    bindKey: {mac: "cmd-shift-p", win: "ctrl-shift-p"},
    name: "show_overlay",
    args: {overlay: "command_palette"}
}, {
    bindKey: {mac: "ctrl-backquote", win: "ctrl-`"},
    name: "show_panel",
    args: {panel: "console", toggle: true}
}, 

/* panels */
{
    bindKey: {mac: "ctrl-1", win: "ctrl-1"},
    name: "focus_group",
    args: {group: 0}
}, {
    bindKey: {mac: "ctrl-9", win: "ctrl-9"},
    name: "focus_group",
    args: {group: 8}
}, {
    bindKey: {mac: "ctrl-2", win: "ctrl-2"},
    name: "focus_group",
    args: {group: 1}
}, {
    bindKey: {mac: "ctrl-3", win: "ctrl-3"},
    name: "focus_group",
    args: {group: 2}
}, {
    bindKey: {mac: "ctrl-4", win: "ctrl-4"},
    name: "focus_group",
    args: {group: 3}
}, {
    bindKey: {mac: "ctrl-5", win: "ctrl-5"},
    name: "focus_group",
    args: {group: 4}
}, {
    bindKey: {mac: "ctrl-6", win: "ctrl-6"},
    name: "focus_group",
    args: {group: 5}
}, {
    bindKey: {mac: "ctrl-8", win: "ctrl-8"},
    name: "focus_group",
    args: {group: 7}
}, {
    bindKey: {mac: "ctrl-7", win: "ctrl-7"},
    name: "focus_group",
    args: {group: 6}
}, {
    bindKey: {mac: "cmd-k cmd-right", win: "ctrl-k ctrl-right"},
    name: "focus_neighboring_group"
}, {
    bindKey: {mac: "cmd-k cmd-left", win: "ctrl-k ctrl-left"},
    name: "focus_neighboring_group",
    args: {forward: false}
}, {
    bindKey: {mac: "ctrl-0", win: "ctrl-0"},
    name: "focus_side_bar"
}, {
    bindKey: {mac: "f12|cmd-alt-down", win: "f12"},
    name: "goto_definition"
}, {
    bindKey: {mac: "cmd-shift-r", win: "ctrl-shift-r"},
    name: "goto_symbol_in_project"
}, {
    bindKey: {mac: "ctrl-shift-9", win: "ctrl-shift-9"},
    name: "move_to_group",
    args: {group: 8}
}, {
    bindKey: {mac: "ctrl-shift-2", win: "ctrl-shift-2"},
    name: "move_to_group",
    args: {group: 1}
}, {
    bindKey: {mac: "ctrl-shift-8", win: "ctrl-shift-8"},
    name: "move_to_group",
    args: {group: 7}
}, {
    bindKey: {mac: "ctrl-shift-7", win: "ctrl-shift-7"},
    name: "move_to_group",
    args: {group: 6}
}, {
    bindKey: {mac: "ctrl-shift-1", win: "ctrl-shift-1"},
    name: "move_to_group",
    args: {group: 0}
}, {
    bindKey: {mac: "ctrl-shift-6", win: "ctrl-shift-6"},
    name: "move_to_group",
    args: {group: 5}
}, {
    bindKey: {mac: "ctrl-shift-5", win: "ctrl-shift-5"},
    name: "move_to_group",
    args: {group: 4}
}, {
    bindKey: {mac: "ctrl-shift-4", win: "ctrl-shift-4"},
    name: "move_to_group",
    args: {group: 3}
}, {
    bindKey: {mac: "ctrl-shift-3", win: "ctrl-shift-3"},
    name: "move_to_group",
    args: {group: 2}
}, {
    bindKey: {mac: "cmd-9", win: "alt-9"},
    name: "select_by_index",
    args: {index: 8}
}, {
    bindKey: {mac: "cmd-1", win: "alt-1"},
    name: "select_by_index",
    args: {index: 0}
}, {
    bindKey: {mac: "cmd-0", win: "alt-0"},
    name: "select_by_index",
    args: {index: 9}
}, {
    bindKey: {mac: "cmd-8", win: "alt-8"},
    name: "select_by_index",
    args: {index: 7}
}, {
    bindKey: {mac: "cmd-3", win: "alt-3"},
    name: "select_by_index",
    args: {index: 2}
}, {
    bindKey: {mac: "cmd-7", win: "alt-7"},
    name: "select_by_index",
    args: {index: 6}
}, {
    bindKey: {mac: "cmd-2", win: "alt-2"},
    name: "select_by_index",
    args: {index: 1}
}, {
    bindKey: {mac: "cmd-6", win: "alt-6"},
    name: "select_by_index",
    args: {index: 5}
}, {
    bindKey: {mac: "cmd-5", win: "alt-5"},
    name: "select_by_index",
    args: {index: 4}
}, {
    bindKey: {mac: "cmd-4", win: "alt-4"},
    name: "select_by_index",
    args: {index: 3}
}, {
    bindKey: {mac: "cmd-k cmd-shift-right", win: "ctrl-k ctrl-shift-right"},
    name: "move_to_neighboring_group"
}, {
    bindKey: {mac: "cmd-k cmd-shift-left", win: "ctrl-k ctrl-shift-left"},
    name: "move_to_neighboring_group",
    args: {forward: false}
}, {
    bindKey: {mac: "cmd-n", win: "ctrl-n"},
    name: "new_file"
}, {
    bindKey: {mac: "cmd-k cmd-up", win: "ctrl-k ctrl-up"},
    name: "new_pane"
}, {
    bindKey: {mac: "cmd-k cmd-shift-up", win: "ctrl-k ctrl-shift-up"},
    name: "new_pane",
    args: {move: false}
}, {
    bindKey: {mac: "cmd-alt-4", win: "alt-shift-4"},
    name: "set_layout",
    args: {cols: [0, 0.25, 0.5, 0.75, 1], rows: [0, 1], cells: [[0, 0, 1, 1], [1, 0, 2, 1], [2, 0, 3, 1], [3, 0, 4, 1] ]}
}, {
    bindKey: {mac: "cmd-alt-shift-2", win: "alt-shift-8"},
    name: "set_layout",
    args: {cols: [0, 1], rows: [0, 0.5, 1], cells: [[0, 0, 1, 1], [0, 1, 1, 2] ]}
}, {
    bindKey: {mac: "cmd-alt-shift-3", win: "alt-shift-9"},
    name: "set_layout",
    args: {cols: [0, 1], rows: [0, 0.33, 0.66, 1], cells: [[0, 0, 1, 1], [0, 1, 1, 2], [0, 2, 1, 3] ]}
}, {
    bindKey: {mac: "cmd-alt-5", win: "alt-shift-5"},
    name: "set_layout",
    args: {cols: [0, 0.5, 1], rows: [0, 0.5, 1], cells: [[0, 0, 1, 1], [1, 0, 2, 1], [0, 1, 1, 2], [1, 1, 2, 2] ]}
}, {
    bindKey: {mac: "cmd-alt-3", win: "alt-shift-3"},
    name: "set_layout",
    args: {cols: [0, 0.33, 0.66, 1], rows: [0, 1], cells: [[0, 0, 1, 1], [1, 0, 2, 1], [2, 0, 3, 1] ]}
}, {
    bindKey: {mac: "cmd-alt-2", win: "alt-shift-2"},
    name: "set_layout",
    args: {cols: [0, 0.5, 1], rows: [0, 1], cells: [[0, 0, 1, 1], [1, 0, 2, 1] ]}
}, {
    bindKey: {mac: "cmd-alt-1", win: "alt-shift-1"},
    name: "set_layout",
    args: {cols: [0, 1], rows: [0, 1], cells: [[0, 0, 1, 1] ]}
}, 

{
    bindKey: {mac: "cmd-ctrl-shift-f", win: "shift-f11"},
    name: "toggle_distraction_free"
}, {
    bindKey: {mac: "cmd-ctrl-f", win: "f11"},
    name: "toggle_full_screen"
}, 

{
    bindKey: {mac: "cmd-shift-]|cmd-alt-right", win: "ctrl-pagedown"},
    name: "next_view"
}, {
    bindKey: {mac: "cmd-shift-[|cmd-alt-left", win: "ctrl-pageup"},
    name: "prev_view"
}, {
    bindKey: {mac: "ctrl-tab", win: "ctrl-tab"},
    name: "next_view_in_stack"
}, {
    bindKey: {mac: "ctrl-shift-tab", win: "ctrl-shift-tab"},
    name: "prev_view_in_stack"
}, 

{
    bindKey: {mac: "cmd-alt-up", win: "alt-o"},
    name: "switch_file",
    args: {extensions: ["cpp", "cxx", "cc", "c", "hpp", "hxx", "h", "ipp", "inl", "m", "mm"] }
}, 

{
    bindKey: {linux: "ctrl--", mac: "cmd-minus", win: "ctrl--|ctrl-shift-=|ctrl-shift-+"},
    name: "decrease_font_size"
}, {
    bindKey: {linux: "ctrl--|ctrl-=", mac: "cmd-=|cmd-+", win: "ctrl--|ctrl-=|ctrl-+"},
    name: "increase_font_size"
}, 


/* bookmarks */
// {
//     bindKey: {mac: "cmd-shift-f2", win: "ctrl-shift-f2"},
//     name: "clear_bookmarks"
// }, {
//     bindKey: {mac: "cmd-k cmd-g", win: "ctrl-k ctrl-g"},
//     name: "clear_bookmarks",
//     args: {name: "mark"}
// }, {
//     bindKey: {mac: "f2", win: "f2"},
//     name: "next_bookmark"
// }, {
//     bindKey: {mac: "shift-f2", win: "shift-f2"},
//     name: "prev_bookmark"
// }, {
//     bindKey: {mac: "alt-f2", win: "alt-f2"},
//     name: "select_all_bookmarks"
// }, {
//     bindKey: {mac: "cmd-f2", win: "ctrl-f2"},
//     name: "toggle_bookmark"
// }, 


/* find replace */
{
    bindKey: {mac: "cmd-alt-f", win: "ctrl-h"},
    name: "show_panel",
    args: {panel: "replace", reverse: false}
}, {
    bindKey: {mac: "cmd-alt-e", win: "ctrl-shift-h"},
    name: "replace_next"
}, {
    bindKey: {mac: "cmd-e", win: "ctrl-e"},
    name: "slurp_find_string"
}, {
    bindKey: {mac: "cmd-shift-e", win: "ctrl-shift-e"},
    name: "slurp_replace_string"
}, {
    bindKey: {mac: "ctrl-alt-enter", win: "ctrl-alt-enter"},
    name: "replace_all",
    context: [{key: "panel", operand: "replace"}, {key: "panel_has_focus"}],
    args: {close_panel: true}
}, {
    bindKey: {mac: "cmd-f", win: "ctrl-f"},
    name: "show_panel",
    args: {panel: "find", reverse: false}
}, {
    bindKey: {mac: "cmd-i", win: "ctrl-i"},
    name: "show_panel",
    args: {panel: "incremental_find", reverse: false}
}, {
    bindKey: {mac: "cmd-shift-i", win: "ctrl-shift-i"},
    name: "show_panel",
    args: {panel: "incremental_find", reverse: true}
}, {
    bindKey: {mac: "cmd-shift-f", win: "ctrl-shift-f"},
    name: "show_panel",
    args: {panel: "find_in_files"}
}, {
    bindKey: {mac: "f4", win: "f4"},
    name: "next_result"
}, {
    bindKey: {mac: "shift-f4", win: "shift-f4"},
    name: "prev_result"
}, 
// todo incremental_find
// {
//     bindKey: {mac: "cmd-alt-c", win: "alt-c"},
//     name: "toggle_case_sensitive",
// }, {
//     bindKey: {mac: "cmd-alt-a", win: "alt-a"},
//     name: "toggle_preserve_case",
// }, {
//     bindKey: {mac: "cmd-alt-r", win: "alt-r"},
//     name: "toggle_regex",
// }, {
//     bindKey: {mac: "cmd-alt-w", win: "alt-w"},
//     name: "toggle_whole_word",
// }, 


/* editor commands */
{
    bindKey: {linux: "alt-/", mac: "ctrl-space", win: "ctrl-space"},
    name: "complete"
}, {
    bindKey: {mac: "alt-f2", win: "context_menu"},
    name: "context_menu"
}, {
    bindKey: {mac: "cmd-c", win: "ctrl-insert|ctrl-c"},
    name: "copy"
}, {
    bindKey: {mac: "cmd-x", win: "shift-delete|ctrl-x"},
    name: "cut"
},


// {
//     bindKey: {mac: "cmd-k cmd-w", win: "ctrl-k ctrl-w"},
//     name: "delete_to_mark"
// }, {
//     bindKey: {mac: "cmd-k cmd-a", win: "ctrl-k ctrl-a"},
//     name: "select_to_mark"
// }, {
//     bindKey: {mac: "cmd-k cmd-space", win: "ctrl-k ctrl-space"},
//     name: "set_mark"
// }, {
//     bindKey: {mac: "cmd-k cmd-x", win: "ctrl-k ctrl-x"},
//     name: "swap_with_mark"
// }, 

{
    bindKey: {win: "ctrl-delete"},
    name: "delete_word",
    args: {forward: true}
}, {
    bindKey: {mac: "ctrl-backspace"},
    name: "delete_word",
    args: {forward: false, sub_words: true}
}, {
    bindKey: {mac: "ctrl-delete"},
    name: "delete_word",
    args: {forward: true, sub_words: true}
}, {
    bindKey: {win: "ctrl-backspace"},
    name: "delete_word",
    args: {forward: false}
}, {
    bindKey: {win: "backspace|shift-backspace|ctrl-shift-backspace"},
    name: "left_delete"
}, {
    bindKey: {win: "delete"},
    name: "right_delete"
}, {
    bindKey: {mac: "cmd-k cmd-backspace|cmd-backspace", win: "ctrl-shift-backspace|ctrl-k ctrl-backspace"},
    name: "delete_to_hard_bol"
}, {
    bindKey: {mac: "cmd-k cmd-k|cmd-delete|ctrl-k", win: "ctrl-shift-delete|ctrl-k ctrl-k"},
    name: "delete_to_hard_eol"
}, 

{
    bindKey: {mac: "cmd-shift-d", win: "ctrl-shift-d"},
    name: "duplicate_line"
}, {
    bindKey: {mac: "cmd-l", win: "ctrl-l"},
    name: "expand_selection",
    args: {to: "line"}
}, {
    bindKey: {mac: "cmd-shift-a", win: "ctrl-shift-a"},
    name: "expand_selection",
    args: {to: "tag"}
}, {
    bindKey: {mac: "cmd-shift-j", win: "ctrl-shift-j"},
    name: "expand_selection",
    args: {to: "indentation"}
}, {
    bindKey: {mac: "ctrl-shift-m", win: "ctrl-shift-m"},
    name: "expand_selection",
    args: {to: "brackets"}
}, {
    bindKey: {mac: "cmd-shift-space", win: "ctrl-shift-space"},
    name: "expand_selection",
    args: {to: "scope"}
}, {
    bindKey: {mac: "ctrl-cmd-g", win: "alt-f3"},
    name: "find_all_under"
}, {
    bindKey: {mac: "alt-cmd-g", win: "ctrl-f3"},
    name: "find_under"
}, {
    bindKey: {mac: "cmd-d", win: "ctrl-d"},
    name: "find_under_expand"
}, {
    bindKey: {mac: "cmd-k cmd-d", win: "ctrl-k ctrl-d"},
    name: "find_under_expand_skip"
}, {
    bindKey: {mac: "shift-alt-cmd-g", win: "ctrl-shift-f3"},
    name: "find_under_prev"
}, 
/* fold */
{
    bindKey: {mac: "cmd-alt-[", win: "ctrl-shift-["},
    name: "fold"
}, {
    bindKey: {mac: "cmd-alt-]", win: "ctrl-shift-]"},
    name: "unfold"
}, {
    bindKey: {mac: "cmd-k cmd-0|cmd-k cmd-j", win: "ctrl-k ctrl-0|ctrl-k ctrl-j"},
    name: "unfold_all"
}, {
    bindKey: {mac: "cmd-k cmd-1", win: "ctrl-k ctrl-1"},
    name: "fold_by_level",
    args: {level: 1}
}, {
    bindKey: {mac: "cmd-k cmd-2", win: "ctrl-k ctrl-2"},
    name: "fold_by_level",
    args: {level: 2}
}, {
    bindKey: {mac: "cmd-k cmd-3", win: "ctrl-k ctrl-3"},
    name: "fold_by_level",
    args: {level: 3}
}, {
    bindKey: {mac: "cmd-k cmd-4", win: "ctrl-k ctrl-4"},
    name: "fold_by_level",
    args: {level: 4}
}, {
    bindKey: {mac: "cmd-k cmd-5", win: "ctrl-k ctrl-5"},
    name: "fold_by_level",
    args: {level: 5}
}, {
    bindKey: {mac: "cmd-k cmd-6", win: "ctrl-k ctrl-6"},
    name: "fold_by_level",
    args: {level: 6}
}, {
    bindKey: {mac: "cmd-k cmd-7", win: "ctrl-k ctrl-7"},
    name: "fold_by_level",
    args: {level: 7}
}, {
    bindKey: {mac: "cmd-k cmd-8", win: "ctrl-k ctrl-8"},
    name: "fold_by_level",
    args: {level: 8}
}, {
    bindKey: {mac: "cmd-k cmd-9", win: "ctrl-k ctrl-9"},
    name: "fold_by_level",
    args: {level: 9}
}, {
    bindKey: {mac: "cmd-k cmd-t", win: "ctrl-k ctrl-t"},
    name: "fold_tag_attributes"
}, 

/* move */
{
    bindKey: {win: "left"},
    name: "move",
    args: {by: "characters", forward: false}
}, {
    bindKey: {win: "up"},
    name: "move",
    args: {by: "lines", forward: false}
}, {
    bindKey: {win: "down"},
    name: "move",
    args: {by: "lines", forward: true}
}, {
    bindKey: {win: "shift-left"},
    name: "move",
    args: {by: "characters", forward: false, extend: true}
}, {
    bindKey: {win: "shift-right"},
    name: "move",
    args: {by: "characters", forward: true, extend: true}
}, {
    bindKey: {win: "shift-up"},
    name: "move",
    args: {by: "lines", forward: false, extend: true}
}, {
    bindKey: {win: "shift-down"},
    name: "move",
    args: {by: "lines", forward: true, extend: true}
}, {
    bindKey: {win: "shift-pageup"},
    name: "move",
    args: {by: "pages", forward: false, extend: true}
}, {
    bindKey: {win: "ctrl-left"},
    name: "move",
    args: {by: "words", forward: false}
}, {
    bindKey: {win: "ctrl-right"},
    name: "move",
    args: {by: "word_ends", forward: true}
}, {
    bindKey: {win: "ctrl-shift-left"},
    name: "move",
    args: {by: "words", forward: false, extend: true}
}, {
    bindKey: {win: "shift-pagedown"},
    name: "move",
    args: {by: "pages", forward: true, extend: true}
}, {
    bindKey: {win: "pagedown"},
    name: "move",
    args: {by: "pages", forward: true}
}, {
    bindKey: {mac: "ctrl-alt-shift-right|ctrl-shift-right", win: "alt-shift-right"},
    name: "move",
    args: {by: "subword_ends", forward: true, extend: true}
}, {
    bindKey: {mac: "ctrl-alt-shift-left|ctrl-shift-left", win: "alt-shift-left"},
    name: "move",
    args: {by: "subwords", forward: false, extend: true}
}, {
    bindKey: {mac: "ctrl-alt-right|ctrl-right", win: "alt-right"},
    name: "move",
    args: {by: "subword_ends", forward: true}
}, {
    bindKey: {win: "pageup"},
    name: "move",
    args: {by: "pages", forward: false}
}, {
    bindKey: {mac: "ctrl-alt-left|ctrl-left", win: "alt-left"},
    name: "move",
    args: {by: "subwords", forward: false}
}, {
    bindKey: {win: "ctrl-shift-right"},
    name: "move",
    args: {by: "word_ends", forward: true, extend: true}
}, {
    bindKey: {mac: "ctrl-m", win: "ctrl-m"},
    name: "move_to",
    args: {to: "brackets"}
}, {
    bindKey: {win: "ctrl-end"},
    name: "move_to",
    args: {to: "eof", extend: false}
}, {
    bindKey: {win: "ctrl-shift-home"},
    name: "move_to",
    args: {to: "bof", extend: true}
}, {
    bindKey: {win: "ctrl-shift-end"},
    name: "move_to",
    args: {to: "eof", extend: true}
}, {
    bindKey: {win: "ctrl-home"},
    name: "move_to",
    args: {to: "bof", extend: false}
}, {
    bindKey: {win: "shift-end"},
    name: "move_to",
    args: {to: "eol", extend: true}
}, {
    bindKey: {win: "shift-home"},
    name: "move_to",
    args: {to: "bol", extend: true}
}, {
    bindKey: {win: "end"},
    name: "move_to",
    args: {to: "eol", extend: false}
}, {
    bindKey: {win: "home"},
    name: "move_to",
    args: {to: "bol", extend: false}
}, 
/* other */
{
    bindKey: {mac: "ctrl-f6", win: "ctrl-f6"},
    name: "next_misspelling"
}, {
    bindKey: {mac: "ctrl-shift-f6", win: "ctrl-shift-f6"},
    name: "prev_misspelling"
},

{
    bindKey: {linux: "enter|shift-enter|numpadEnter|shift-numpadEnter", win: "enter|shift-enter"},
    name: "insert",
    args: {characters: "\n"}
}, {
    bindKey: {mac: "shift-tab", win: "shift-tab"},
    name: "insert",
    args: {characters: "\t"}
}, {
    bindKey: {mac: "ctrl-o"},
    name: "insert_snippet",
    args: {contents: "$0\n"}
}, {
    bindKey: {mac: "ctrl-shift-w", win: "alt-shift-w"},
    name: "insert_snippet",
    args: {name: "Packages/XML/long-tag.sublime-snippet"}
}, {
    bindKey: {mac: "cmd-j", win: "ctrl-j"},
    name: "join_lines"
}, {
    bindKey: {mac: "ctrl-minus", win: "alt--"},
    name: "jump_back"
}, {
    bindKey: {mac: "ctrl-shift-minus", win: "alt-shift--"},
    name: "jump_forward"
}, {
    bindKey: {mac: "cmd-k cmd-l", win: "ctrl-k ctrl-l"},
    name: "lower_case"
}, {
    bindKey: {mac: "cmd-k cmd-u", win: "ctrl-k ctrl-u"},
    name: "upper_case"
}, 

{
    bindKey: {mac: "cmd-v", win: "shift-insert|ctrl-v"},
    name: "paste"
}, {
    bindKey: {mac: "cmd-shift-v", win: "ctrl-shift-v"},
    name: "paste_and_indent"
}, {
    bindKey: {mac: "cmd-k cmd-v|cmd-option-v", win: "ctrl-k ctrl-v"},
    name: "paste_from_history"
}, 


{
    bindKey: {mac: "cmd-z", win: "ctrl-z"},
    name: "undo"
}, {
    bindKey: {mac: "cmd-shift-z", win: "ctrl-shift-z"},
    name: "redo"
}, {
    bindKey: {mac: "cmd-y", win: "ctrl-y"},
    name: "redo_or_repeat"
}, {
    bindKey: {mac: "cmd-shift-u", win: "ctrl-shift-u"},
    name: "soft_redo"
}, {
    bindKey: {mac: "cmd-u", win: "ctrl-u"},
    name: "soft_undo"
}, 

{
    bindKey: {mac: "cmd-shift-enter", win: "ctrl-shift-enter"},
    name: "add_line_before"
}, {
    bindKey: {mac: "cmd-enter", win: "ctrl-enter"},
    name: "add_line_after"
}, {
    bindKey: {mac: "ctrl-shift-k", win: "ctrl-shift-k"},
    name: "delete_line"
}, {
    bindKey: {mac: "ctrl-alt-up", win: "ctrl-up"},
    name: "scroll_lines",
    args: {amount: 1}
}, {
    bindKey: {mac: "ctrl-alt-down", win: "ctrl-down"},
    name: "scroll_lines",
    args: {amount: -1}
}, {
    bindKey: {mac: "cmd-a", win: "ctrl-a"},
    name: "select_all"
}, {
    bindKey: {linux: "alt-shift-down", mac: "ctrl-shift-down", win: "ctrl-alt-down"},
    name: "select_lines",
    args: {forward: true}
}, {
    bindKey: {linux: "alt-shift-up", mac: "ctrl-shift-up", win: "ctrl-alt-up"},
    name: "select_lines",
    args: {forward: false}
}, {
    bindKey: {mac: "cmd-k cmd-b", win: "ctrl-k ctrl-b"},
    name: "toggle_side_bar"
}, 


{
    bindKey: {mac: "cmd-k cmd-c|ctrl-l", win: "ctrl-k ctrl-c"},
    name: "show_at_center"
}, 

{
    bindKey: {mac: "f5", win: "f9"},
    name: "sort_lines",
    args: {case_sensitive: false}
}, {
    bindKey: {mac: "ctrl-f5", win: "ctrl-f9"},
    name: "sort_lines",
    args: {case_sensitive: true}
}, {
    bindKey: {mac: "cmd-shift-l", win: "ctrl-shift-l"},
    name: "split_selection_into_lines"
}, {
    bindKey: {mac: "ctrl-cmd-down", win: "ctrl-shift-down"},
    name: "swap_line_down"
}, {
    bindKey: {mac: "ctrl-cmd-up", win: "ctrl-shift-up"},
    name: "swap_line_up"
}, {
    bindKey: {mac: "cmd-/", win: "ctrl-/"},
    name: "toggle_comment",
    args: {block: false}
}, {
    bindKey: {mac: "cmd-alt-/", win: "ctrl-shift-/"},
    name: "toggle_comment",
    args: {block: true}
},

// {
//     bindKey: {mac: "cmd-alt-o", win: "insert"},
//     name: "toggle_overwrite"
// },

{
    bindKey: {linux: "ctrl-alt-q", mac: "ctrl-q", win: "ctrl-q"},
    name: "toggle_record_macro"
}, {
    bindKey: {linux: "ctrl-alt-shift-q", mac: "ctrl-shift-q", win: "ctrl-shift-q"},
    name: "run_macro"
}, 


{
    bindKey: {mac: "ctrl-t", win: "ctrl-t"},
    name: "transpose"
}, {
    bindKey: {mac: "cmd-alt-q", win: "alt-q"},
    name: "wrap_lines"
}, {
    bindKey: {mac: "cmd-k cmd-y|ctrl-y", win: "ctrl-k ctrl-y"},
    name: "yank"
}, 

{
    bindKey: {mac: "cmd-]|tab", win: "tab|ctrl-]"},
    name: "indent"
}, {
    bindKey: {mac: "cmd-[|shift-tab", win: "shift-tab|ctrl-["},
    name: "unindent"
}];


});


// won't implement

// {
//     bindKey: {mac: "f6", win: "f6"},
//     name: "toggle_setting",
//     args: {setting: "spell_check"}
// }, {
//     bindKey: {mac: "cmd-alt-p|ctrl-shift-p", win: "ctrl-alt-shift-p"},
//     name: "show_scope_name"
// }, 

