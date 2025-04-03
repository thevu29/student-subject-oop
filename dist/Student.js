"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Score_1 = require("./Score");
class Student {
    constructor(id, name, age) {
        this._subjects = new Map();
        this._scores = new Map();
        this._id = id;
        this._name = name;
        this._age = age;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get subjects() {
        return this._subjects;
    }
    get scores() {
        return this._scores;
    }
    enrollSubject(subject) {
        this._subjects.set(subject.id, subject);
        console.log(`${this._name} enrolled in ${subject.name}`);
    }
    dropSubject(subjectId) {
        const result = this._subjects.delete(subjectId);
        if (result) {
            this._scores.delete(subjectId);
            console.log(`${this._name} dropped subject with ID ${subjectId}`);
        }
        else {
            console.log(`Subject with ID ${subjectId} not found in ${this._name}'s enrollment`);
        }
        return result;
    }
    getSubject(subjectId) {
        return this._subjects.get(subjectId);
    }
    setScore(subjectId, rawScore) {
        const subject = this._subjects.get(subjectId);
        if (subject) {
            const score = new Score_1.Score(subjectId, rawScore, subject.weightMultiplier);
            this._scores.set(subjectId, score);
            console.log(`Score ${rawScore} set for ${subject.name} (weighted: ${score.getWeightedScore()})`);
            return true;
        }
        console.log(`Subject with ID ${subjectId} not found`);
        return false;
    }
    getScore(subjectId) {
        return this._scores.get(subjectId);
    }
    calculateGPA() {
        let totalWeightedPoints = 0;
        let totalCredits = 0;
        this._subjects.forEach((subject) => {
            const score = this._scores.get(subject.id);
            if (score) {
                totalWeightedPoints += score.getWeightedScore() * subject.credits;
                totalCredits += subject.credits;
            }
        });
        if (totalCredits === 0) {
            return null;
        }
        return totalWeightedPoints / totalCredits;
    }
    displayStudentInfo() {
        let info = `Student ID: ${this._id}\n`;
        info += `Name: ${this._name}\n`;
        info += `Age: ${this._age}\n`;
        const gpa = this.calculateGPA();
        info += `GPA: ${gpa !== null ? gpa.toFixed(2) : "N/A"}\n`;
        info += `Enrolled Subjects: ${this._subjects.size}\n`;
        info += `Scored Subjects: ${this._scores.size}\n`;
        return info;
    }
    displayDetailedInfo() {
        let info = this.displayStudentInfo();
        info += "\nSubjects and Scores:\n";
        if (this._subjects.size === 0) {
            info += "No subjects enrolled.\n";
        }
        else {
            this._subjects.forEach((subject) => {
                info += "------------------------------\n";
                info += subject.displayInfo() + "\n";
                const score = this._scores.get(subject.id);
                if (score) {
                    info += "Score Information:\n";
                    info += score.displayInfo() + "\n";
                }
                else {
                    info += "Score: Not graded yet\n";
                }
            });
        }
        return info;
    }
}
exports.Student = Student;
