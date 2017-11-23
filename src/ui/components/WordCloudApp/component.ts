import Component, { tracked } from '@glimmer/component';

interface Topic {
  burst: number;
  days: any;
  id: string;
  label: string;
  pageType: any;
  queries: any;
  sentiment: any;
  sentimentScore: number;
  type: string;
  volume: number;
}

export default class WordCloudApp extends Component {

  @tracked private topics: Topic[];
  @tracked private selectedTopic: Topic;

  constructor(options) {
    super(options);

    this.loadTopics();
  }

  private async loadTopics() {
    const request = await fetch('./topics.json');
    const data = await request.json();

    this.topics = data.topics;
  }

  private selectTopic(topic: Topic) {
    this.selectedTopic = topic;
  }
}
