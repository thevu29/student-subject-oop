"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    constructor(id, name, credits, weightMultiplier = 1) {
        this._id = id;
        this._name = name;
        this._credits = credits;
        this._weightMultiplier = weightMultiplier;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get credits() {
        return this._credits;
    }
    get weightMultiplier() {
        return this._weightMultiplier;
    }
    getScoreWeight() {
        return this._weightMultiplier;
    }
    displayInfo() {
        return (`Subject: ${this._name} (${this._id})\n` +
            `Credits: ${this._credits}\n` +
            `Weight Multiplier: ${this._weightMultiplier}\n` +
            `Description: ${this.getDescription()}`);
    }
}
exports.Subject = Subject;
