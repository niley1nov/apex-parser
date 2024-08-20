import * as path from 'path';
import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
  // Register a command that runs the Java program
  const runJavaCommand = vscode.commands.registerCommand('extension.runJava', () => {
    // Get the directory of the current script
    const currentPath = __dirname;
    console.log(`Current Script Directory: ${currentPath}`);

    // Set up the classpath and command to run the Java program
    const javaClassPath = [
      path.join(currentPath, '..', 'bin', 'java'), 
      path.join(currentPath, '..', 'src', 'antlr'), 
      path.join(currentPath, '..', 'src', 'antlr', 'antlr4-runtime-4.13.2.jar'), 
      path.join(currentPath, '..', 'src', 'antlr', 'antlr-4.13.2-complete.jar'),
      path.join(currentPath, '..', 'bin', 'pmd', 'lib', 'summit-ast-2.2.0.jar')
    ].join(path.delimiter);
    const javaCommand = `java -cp "${javaClassPath}" HelloWorld`;

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
  });

  // Add the command to the extension's subscriptions
  context.subscriptions.push(runJavaCommand);
}

export function deactivate() {}
