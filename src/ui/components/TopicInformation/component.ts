import Component, { tracked } from '@glimmer/component';
import { Topic } from '../WordCloudApp/component';

export default class TopicInformation extends Component {

  public args: {
    topic: Topic
  };

  @tracked('args')
  get sentiments() {
    const { topic } = this.args;

    if (!topic) {
      return {};
    }

    const { sentiment } = topic;

    return {
      negative: sentiment.negative || 0,
      neutral: sentiment.neutral || 0,
      positive: sentiment.positive || 0
    };
  }
}
