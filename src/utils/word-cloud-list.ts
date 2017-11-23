import { Topic } from '../ui/components/WordCloudApp/component';
import WordCloudElement from './word-cloud-element';

/**
 * The WordCloudList creates a list of WordCloudElements from a list of topics.
 * The list extracts maximum and minimum volume from the list of topics which are
 * required to generate WordCloudElements.
 */
export default class WordCloudList {
  private topics: Topic[] = [];

  constructor(topics: Topic[]) {
    this.topics = topics;
  }

  get volumes(): number[] {
    return this.topics.map((topic) => topic.volume);
  }

  get maxVolume(): number {
    return Math.max(...this.volumes);
  }

  get minVolume(): number {
    return Math.min(...this.volumes);
  }

  get elements(): WordCloudElement[] {
    const options = {
      maxVolume: this.maxVolume,
      minVolume: this.minVolume
    };

    return this.topics.map((topic) => new WordCloudElement(topic, options));
  }

}
