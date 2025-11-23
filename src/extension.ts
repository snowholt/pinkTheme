import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Soft Pink Theme is now active!');

	const increaseFont = vscode.commands.registerCommand('softpink.increaseFontSize', () => {
		const config = vscode.workspace.getConfiguration('editor');
		const currentSize = config.get<number>('fontSize') || 14;
		config.update('fontSize', currentSize + 1, vscode.ConfigurationTarget.Global);
		vscode.window.showInformationMessage(`Font size increased to ${currentSize + 1}`);
	});

	const decreaseFont = vscode.commands.registerCommand('softpink.decreaseFontSize', () => {
		const config = vscode.workspace.getConfiguration('editor');
		const currentSize = config.get<number>('fontSize') || 14;
		if (currentSize > 6) {
			config.update('fontSize', currentSize - 1, vscode.ConfigurationTarget.Global);
			vscode.window.showInformationMessage(`Font size decreased to ${currentSize - 1}`);
		}
	});

	const resetFont = vscode.commands.registerCommand('softpink.resetFontSize', () => {
		const config = vscode.workspace.getConfiguration('editor');
		config.update('fontSize', 14, vscode.ConfigurationTarget.Global);
		vscode.window.showInformationMessage('Font size reset to 14');
	});

	context.subscriptions.push(increaseFont, decreaseFont, resetFont);
}

export function deactivate() {}