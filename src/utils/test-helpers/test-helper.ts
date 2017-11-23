// tslint:disable:ordered-imports
import 'babel-polyfill/browser';
import 'whatwg-fetch';
import { setApp, start } from '@glimmer/test-helpers';
import App from '../../main';

QUnit.config.autostart = false;
setApp(App);
import '../../../tests';
start();
