import { Topic } from '../ui/components/WordCloudApp/component';
import WordCloudElement from './word-cloud-element';

const { module, test } = QUnit;

module('Util: WordCloudElement', function(hooks) {
  test('it outputs the correct string', function(assert) {
    const topic = {
      label: 'Berlin',
      sentimentScore: 65
    };
    const element = new WordCloudElement(topic as Topic, { minVolume: 0, maxVolume: 65 });
    const label = String(element);
    assert.equal(label, 'Berlin');
  });

  test('it returns the correct color if sentiment is above 60', function(assert) {
    const topic = {
      label: 'Berlin',
      sentimentScore: 65
    };
    const element = new WordCloudElement(topic as Topic, { minVolume: 0, maxVolume: 65 });
    assert.equal(element.color, 'green');
  });

  test('it returns the correct color if sentiment is below 40', function(assert) {
    const topic = {
      label: 'Berlin',
      sentimentScore: 10
    };
    const element = new WordCloudElement(topic as Topic, { minVolume: 0, maxVolume: 65 });
    assert.equal(element.color, 'red');
  });

  test('it returns the correct color if sentiment is between 40 and 60', function(assert) {
    const topic = {
      label: 'Berlin',
      sentimentScore: 50
    };
    const element = new WordCloudElement(topic as Topic, { minVolume: 0, maxVolume: 65 });
    assert.equal(element.color, 'gray');
  });

  test('it returns the biggest size if the volume is the maximum', function(assert) {
    const topic = {
      label: 'Berlin',
      volume: 60
    };
    const element = new WordCloudElement(topic as Topic, { minVolume: 10, maxVolume: 60 });
    assert.equal(element.size, 6);
  });

  test('it returns the smallest size if the volume is the minimum', function(assert) {
    const topic = {
      label: 'Berlin',
      volume: 10
    };
    const element = new WordCloudElement(topic as Topic, { minVolume: 10, maxVolume: 60 });
    assert.equal(element.size, 1);
  });

  test('it returns the correct size if the volume is in between min and max', function(assert) {
    const topic = {
      label: 'Berlin',
      volume: 35
    };
    const element = new WordCloudElement(topic as Topic, { minVolume: 10, maxVolume: 60 });
    assert.equal(element.size, 4);
  });

  test('it returns the correct size if min and max volume are the same', function(assert) {
    const topic = {
      label: 'Berlin',
      volume: 10
    };
    const element = new WordCloudElement(topic as Topic, { minVolume: 10, maxVolume: 10 });
    assert.equal(element.size, 4);
  });
});
