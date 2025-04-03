export abstract class Subject {
  protected _id: string;
  protected _name: string;
  protected _credits: number;
  protected _weightMultiplier: number;

  constructor(
    id: string,
    name: string,
    credits: number,
    weightMultiplier: number = 1
  ) {
    this._id = id;
    this._name = name;
    this._credits = credits;
    this._weightMultiplier = weightMultiplier;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get credits(): number {
    return this._credits;
  }

  get weightMultiplier(): number {
    return this._weightMultiplier;
  }

  abstract getDescription(): string;

  getScoreWeight(): number {
    return this._weightMultiplier;
  }

  displayInfo(): string {
    return (
      `Subject: ${this._name} (${this._id})\n` +
      `Credits: ${this._credits}\n` +
      `Weight Multiplier: ${this._weightMultiplier}\n` +
      `Description: ${this.getDescription()}`
    );
  }
}
