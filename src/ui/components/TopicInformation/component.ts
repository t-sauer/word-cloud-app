import Component, { tracked } from '@glimmer/component';
import { Topic } from '../WordCloudApp/component';

export default class TopicInformation extends Component {
  public args: {
    topic: Topic,
    topicInformationVisible: boolean
  };
}
