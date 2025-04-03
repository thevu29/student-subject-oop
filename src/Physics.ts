import { Subject } from "./Subject";

export class Physics extends Subject {
  private _hasLab: boolean;
  private _field: string;

  constructor(
    id: string,
    name: string,
    credits: number,
    hasLab: boolean,
    field: string
  ) {
    super(id, name, credits, 1);
    this._hasLab = hasLab;
    this._field = field;
  }

  get hasLab(): boolean {
    return this._hasLab;
  }

  get field(): string {
    return this._field;
  }

  getDescription(): string {
    return `A physics course focusing on ${this._field} ${
      this._hasLab ? "with laboratory sessions" : "without laboratory sessions"
    }.`;
  }

  conductExperiment(experimentName: string): string {
    if (this._hasLab) {
      return `Conducting "${experimentName}" experiment in ${this._field} physics`;
    }
    return `Cannot conduct experiments as this course doesn't have a lab component.`;
  }
}
