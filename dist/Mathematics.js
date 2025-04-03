"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mathematics = void 0;
const Subject_1 = require("./Subject");
class Mathematics extends Subject_1.Subject {
    constructor(id, name, credits, level) {
        super(id, name, credits, 2);
        this._level = level;
    }
    get level() {
        return this._level;
    }
    getDescription() {
        return `A ${this._level} level mathematics course covering fundamental mathematical concepts.`;
    }
    solveEquation(equation) {
        return `Solving equation: ${equation} using ${this._level} mathematics techniques`;
    }
}
exports.Mathematics = Mathematics;
