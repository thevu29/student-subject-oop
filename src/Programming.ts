import { Subject } from "./Subject";

export class Programming extends Subject {
  private _language: string;
  private _projectsRequired: number;

  constructor(
    id: string,
    name: string,
    credits: number,
    language: string,
    projectsRequired: number
  ) {
    super(id, name, credits, 1.5);
    this._language = language;
    this._projectsRequired = projectsRequired;
  }

  get language(): string {
    return this._language;
  }

  get projectsRequired(): number {
    return this._projectsRequired;
  }

  getDescription(): string {
    return `A programming course focusing on ${this._language} language with ${this._projectsRequired} required projects.`;
  }

  writeCode(featureName: string): string {
    return `Writing code for "${featureName}" in ${this._language} language`;
  }
}
