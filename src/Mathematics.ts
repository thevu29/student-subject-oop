import { Subject } from "./Subject";

export class Mathematics extends Subject {
  private _level: string;

  constructor(id: string, name: string, credits: number, level: string) {
    super(id, name, credits, 2);
    this._level = level;
  }

  get level(): string {
    return this._level;
  }

  getDescription(): string {
    return `A ${this._level} level mathematics course covering fundamental mathematical concepts.`;
  }

  solveEquation(equation: string): string {
    return `Solving equation: ${equation} using ${this._level} mathematics techniques`;
  }
}
