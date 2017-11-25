import Component, { tracked } from '@glimmer/component';

export interface Topic {
  burst: number;
  days: any[];
  id: string;
  label: string;
  pageType: any;
  queries: any[];
  sentiment: {
    positive?: number;
    negative?: number;
    neutral?: number;
  };
  sentimentScore: number;
  type: string;
  volume: number;
}

export default class WordCloudApp extends Component {

  @tracked private topics: Topic[] = [];
  @tracked private selectedTopic: Topic | null;
  @tracked private topicInformationVisible: boolean = false;

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
    if (topic === this.selectedTopic && this.topicInformationVisible) {
      this.topicInformationVisible = false;
    } else {
      this.topicInformationVisible = true;
      this.selectedTopic = topic;
    }
  }
}
