"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programming = void 0;
const Subject_1 = require("./Subject");
class Programming extends Subject_1.Subject {
    constructor(id, name, credits, language, projectsRequired) {
        super(id, name, credits, 1.5);
        this._language = language;
        this._projectsRequired = projectsRequired;
    }
    get language() {
        return this._language;
    }
    get projectsRequired() {
        return this._projectsRequired;
    }
    getDescription() {
        return `A programming course focusing on ${this._language} language with ${this._projectsRequired} required projects.`;
    }
    writeCode(featureName) {
        return `Writing code for "${featureName}" in ${this._language} language`;
    }
}
exports.Programming = Programming;
