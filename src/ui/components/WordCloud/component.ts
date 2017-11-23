import Component from '@glimmer/component';
import WordCloud2 from 'wordcloud';
import WordCloudElement from '../../../utils/word-cloud-element';
import WordCloudList from '../../../utils/word-cloud-list';
import { Topic } from '../WordCloudApp/component';

export default class WordCloud extends Component {

  public args: {
    topics: Topic[];
    ontopicselect: (topic: Topic) => void;
  };

  private lastRenderedTopics: Topic[];

  public didUpdate() {
    this.renderCloud();
  }

  public didInsertElement() {
    this.renderCloud();
  }

  private wordClicked = ([word]: [WordCloudElement]) => {
    this.args.ontopicselect(word.topic);
  }

  /**
   * Renders the wordcloud into the DOM element of the component.
   * The rendering of the actual cloud is done by wordcloud2.js
   *
   * Since Glimmer.js is currently lacking a hook like `didReceiveAttributes`,
   * we have to rely on the `didUpdate` hook, which might be called to often.
   * To prevent rerenderings of the cloud if the actual data has not changed,
   * we do a quick check if the reference of the topics argument has changed.
   */
  private renderCloud() {
    if (this.lastRenderedTopics === this.args.topics) {
      return;
    }

    const wordList = new WordCloudList(this.args.topics);

    const { element } = this;

    const list = wordList.elements.map((wordElement) => {
      return [wordElement, wordElement.size * 30];
    });

    WordCloud2(element, {
      click: this.wordClicked,
      color: (wordElement: WordCloudElement) => {
        switch (wordElement.sentimentLevel) {
          case 'positive':
            return 'green';
          case 'negative':
            return 'red';
          case 'neutral':
            return 'gray';
        }
      },
      list,
      maxRotation: 0,
      minRotation: 0,
      shuffle: false
    });

    this.lastRenderedTopics = this.args.topics;
  }
}
