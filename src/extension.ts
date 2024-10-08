import * as path from 'path';
import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
  // Register a command that runs the Java program
  const runJavaCommand = vscode.commands.registerCommand('extension.runJava', (uri: vscode.Uri) => {
    if (uri && uri.fsPath) {
      // Get the selected file path
      const selectedFilePath = uri.fsPath;
      console.log(`Selected File: ${selectedFilePath}`);

      // Get the directory of the current script
      const currentPath = __dirname;
      console.log(`Current Script Directory: ${currentPath}`);

      // Set up the classpath and command to run the Java program
      const javaClassPath = [
        path.join(currentPath, '..', 'bin', 'java'),
        path.join(currentPath, '..', 'bin', 'pmd', 'lib', '*')
      ].join(path.delimiter);
      const javaCommand = `java -cp "${javaClassPath}" HelloWorld ${selectedFilePath}`;

      // Execute the Java program
      exec(javaCommand, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error: ${stderr}`);
          vscode.window.showErrorMessage(`Java Error: ${stderr}`);
        } else {
          console.log(`Output: ${stdout}`);
          vscode.window.showInformationMessage(`Java Output: ${stdout}`);
        }
      });
    } else {
      vscode.window.showErrorMessage('No file selected to run the Java program.');
    }
  });

  // Add the command to the extension's subscriptions
  context.subscriptions.push(runJavaCommand);
}

export function deactivate() {}
