"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Physics = void 0;
const Subject_1 = require("./Subject");
class Physics extends Subject_1.Subject {
    constructor(id, name, credits, hasLab, field) {
        super(id, name, credits, 1);
        this._hasLab = hasLab;
        this._field = field;
    }
    get hasLab() {
        return this._hasLab;
    }
    get field() {
        return this._field;
    }
    getDescription() {
        return `A physics course focusing on ${this._field} ${this._hasLab ? "with laboratory sessions" : "without laboratory sessions"}.`;
    }
    conductExperiment(experimentName) {
        if (this._hasLab) {
            return `Conducting "${experimentName}" experiment in ${this._field} physics`;
        }
        return `Cannot conduct experiments as this course doesn't have a lab component.`;
    }
}
exports.Physics = Physics;
