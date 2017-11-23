import { Topic } from '../ui/components/WordCloudApp/component';

interface WordCloudElementOptions {
  minVolume: number;
  maxVolume: number;
}

type WordColor = 'green' | 'gray' | 'red';

export default class WordCloudElement {

  constructor(readonly topic: Topic, private options: WordCloudElementOptions) {}

  public get size(): number {
    const {
      maxVolume,
      minVolume
    } = this.options;

    if (minVolume === maxVolume) {
      return 4;
    }

    // First we normalize the sentiment to a value between 0 and 1
    const normalized = (this.topic.volume - minVolume) / (maxVolume - minVolume);
    // Now we transform this value to a range between 1 and 6 so we have 6 different sizes
    return Math.round(normalized * 5) + 1;
  }

  public get color(): WordColor {
    const { sentimentScore } = this.topic;

    if (sentimentScore > 60) {
      return 'green';
    }

    if (sentimentScore < 40) {
      return 'red';
    }

    return 'gray';
  }

  public toString(): string {
    return this.topic.label;
  }

}
