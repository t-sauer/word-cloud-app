import { Topic } from '../ui/components/WordCloudApp/component';
import WordCloudElement from './word-cloud-element';
import WordCloudList from './word-cloud-list';

const { module, test } = QUnit;

const TOPICS = [{
  label: 'Berlin',
  volume: 65
}, {
  label: 'DJ',
  volume: 48
}, {
  label: 'Code',
  volume: 68
}] as Topic[];

module('Util: WordCloudList', function(hooks) {
  test('it calculates the correct maxVolume', function(assert) {
    const list = new WordCloudList(TOPICS);
    assert.equal(list.maxVolume, 68);
  });

  test('it calculates the correct minVolume', function(assert) {
    const list = new WordCloudList(TOPICS);
    assert.equal(list.minVolume, 48);
  });

  test('it returns a list of WordCloudElements', function(assert) {
    const list = new WordCloudList(TOPICS);
    const elements = list.elements;
    assert.ok(elements[0] instanceof WordCloudElement);
  });
});
