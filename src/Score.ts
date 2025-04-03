export class Score {
  private _rawScore: number;
  private _subject: string;
  private _weight: number;

  constructor(subject: string, rawScore: number, weight: number = 1) {
    if (rawScore < 0 || rawScore > 10) {
      throw new Error("Score must be between 0 and 10");
    }
    this._subject = subject;
    this._rawScore = rawScore;
    this._weight = weight;
  }

  get rawScore(): number {
    return this._rawScore;
  }

  get subject(): string {
    return this._subject;
  }

  get weight(): number {
    return this._weight;
  }

  set rawScore(value: number) {
    if (value < 0 || value > 10) {
      throw new Error("Score must be between 0 and 10");
    }
    this._rawScore = value;
  }

  set weight(value: number) {
    if (value <= 0) {
      throw new Error("Weight must be greater than 0");
    }
    this._weight = value;
  }

  getWeightedScore(): number {
    return this._rawScore * this._weight;
  }

  isPassed(): boolean {
    return this._rawScore >= 5;
  }

  getStatus(): string {
    return this.isPassed() ? "Passed" : "Failed";
  }

  displayInfo(): string {
    return (
      `Raw Score: ${this._rawScore}\n` +
      `Weight: ${this._weight}\n` +
      `Weighted Score: ${this.getWeightedScore()}\n` +
      `Status: ${this.getStatus()}`
    );
  }
}
