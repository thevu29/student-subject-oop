"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
class Score {
    constructor(subject, rawScore, weight = 1) {
        if (rawScore < 0 || rawScore > 10) {
            throw new Error("Score must be between 0 and 10");
        }
        this._subject = subject;
        this._rawScore = rawScore;
        this._weight = weight;
    }
    get rawScore() {
        return this._rawScore;
    }
    get subject() {
        return this._subject;
    }
    get weight() {
        return this._weight;
    }
    set rawScore(value) {
        if (value < 0 || value > 10) {
            throw new Error("Score must be between 0 and 10");
        }
        this._rawScore = value;
    }
    set weight(value) {
        if (value <= 0) {
            throw new Error("Weight must be greater than 0");
        }
        this._weight = value;
    }
    getWeightedScore() {
        return this._rawScore * this._weight;
    }
    isPassed() {
        return this._rawScore >= 5;
    }
    getStatus() {
        return this.isPassed() ? "Passed" : "Failed";
    }
    displayInfo() {
        return (`Raw Score: ${this._rawScore}\n` +
            `Weight: ${this._weight}\n` +
            `Weighted Score: ${this.getWeightedScore()}\n` +
            `Status: ${this.getStatus()}`);
    }
}
exports.Score = Score;
