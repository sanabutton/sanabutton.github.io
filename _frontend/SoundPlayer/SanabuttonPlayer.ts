class Queue<T> {
  private queueArray: T[];

  public constructor(defaultValue: T[] = []) {
    this.queueArray = defaultValue;
  }

  public enqueue(...element: T[]) {
    this.queueArray.push(...element);
  }

  public dequeue(): T | null {
    return this.queueArray.shift() || null;
  }
}

export type PlaylistInterface = string[];

export default class SanabuttonPlayer {
  /**
   * 現在再生中のオーディオ
   */
  private playingElement: HTMLAudioElement;
  /**
   * 現在再生中のオーディオリスト（再生中のやつは含まれない）
   */
  private playQueue: Queue<string>;
}
