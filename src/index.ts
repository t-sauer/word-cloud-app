// tslint:disable:ordered-imports
import 'babel-polyfill/browser';
import 'whatwg-fetch';
import { ComponentManager, setPropertyDidChange } from '@glimmer/component';
import App from './main';
import { classnames } from '@css-blocks/glimmer/dist/cjs/src/helpers/classnames';

const app = new App();
const containerElement = document.getElementById('app');

setPropertyDidChange(() => {
  app.scheduleRerender();
});

app.registerInitializer({
  initialize(registry) {
    registry.register(`component-manager:/${app.rootName}/component-managers/main`, ComponentManager);
    (registry as any)._resolver.registry._entries[
      `helper:/${app.rootName}/components/-css-blocks-classnames`
    ] = classnames;
  }
});

app.renderComponent('WordCloudApp', containerElement!, null);

app.boot();
