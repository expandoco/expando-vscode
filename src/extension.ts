'use strict';
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
    var expando = require('expando-core');

    let disposable = vscode.commands.registerCommand('expando.expand', () => {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        if (!editor.selection.isEmpty) {
            expand();
        }
        else {
            vscode.commands.executeCommand("cursorHomeSelect").then(expand);
        }

        function expand() {
            var selection = editor.selection;
            var text = editor.document.getText(selection);
            var output = expando.transform(text);

            editor.edit((edit) => {
                edit.delete(selection);
                edit.insert(selection.start, output.body);
            });
        }
    });
    context.subscriptions.push(disposable);
}
export function deactivate() {
}