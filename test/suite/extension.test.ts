//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as path from 'path';
import { Config } from '../../src/lib/config';

const PMD_PATH = path.join(__dirname, '..', '..', '..', 'bin', 'pmd');
const RULESET_PATH = path.join(__dirname, '..', '..', '..', 'rulesets', 'apex_ruleset.xml');
const INVALID_RULESET_PATH = path.join(__dirname, '..', '..', '..', 'rulesets', 'apex_ruleset_invalid.xml');
const TEST_ASSETS_PATH = path.join(__dirname, '..', '..', '..', 'test', 'assets');
const TEST_APEX_PATH = path.join(TEST_ASSETS_PATH, 'test.cls');

const outputChannel = vscode.window.createOutputChannel('Apex PMD');

suite('Extension Tests', () => {
  test('check default paths', () => {
    assert.equal(true, true);
  });
});
