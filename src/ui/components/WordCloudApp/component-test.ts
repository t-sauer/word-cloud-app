import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: WordCloudApp', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<WordCloudApp />`);
    assert.equal(this.containerElement.textContent.trim(), 'Word Cloud');
  });
});
