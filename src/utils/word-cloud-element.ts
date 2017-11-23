import { Topic } from '../ui/components/WordCloudApp/component';

interface WordCloudElementOptions {
  minVolume: number;
  maxVolume: number;
}

type WordColor = 'positive' | 'neutral' | 'negative';

/**
 * A WordCloudElement is based upon a topic and information about min and maximum volume.
 * It provides a couple of properties that simplify rendering the words into a word cloud
 * like the size and color of the word.
 */
export default class WordCloudElement {

  constructor(readonly topic: Topic, private options: WordCloudElementOptions) {}

  /**
   * The size of a word can be an integer between 1 and 6 (while 1 is the smallest, 6 is the biggest).
   * A size of 1 is achieved if the volume is the same as the provided minimum volume, while
   * a size of 6 is achieved if the volume is the same as the maximum value. For values inbetween
   * the size will be calculated linear.
   * If the provided minimum and maximum volume are the same, the size will be 4.
   */
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

  /**
   * The sentimentLevel is calculated based on the `sentimentScore` of the topic and
   * can either be:
   * - `positive`: `sentimentScore` > 60
   * - `negative`: `sentimentScore` < 40
   * - `negative`: for all other `sentimentScore` values
   */
  public get sentimentLevel(): WordColor {
    const { sentimentScore } = this.topic;

    if (sentimentScore > 60) {
      return 'positive';
    }

    if (sentimentScore < 40) {
      return 'negative';
    }

    return 'neutral';
  }

  public toString(): string {
    return this.topic.label;
  }

}
