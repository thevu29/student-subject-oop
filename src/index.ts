import { Student } from "./Student";
import { Mathematics } from "./Mathematics";
import { Programming } from "./Programming";
import { Physics } from "./Physics";

const student = new Student("S001", "Victor", 22);
console.log("Created a new student:");
console.log(student.displayStudentInfo());

const mathSubject = new Mathematics("MATH101", "Calculus I", 4, "intermediate");

const programmingSubject = new Programming(
  "CS101",
  "Introduction to Programming",
  3,
  "TypeScript",
  5
);

const physicsSubject = new Physics(
  "PHYS101",
  "Classical Mechanics",
  4,
  true,
  "Newtonian mechanics"
);

student.enrollSubject(mathSubject);
student.enrollSubject(programmingSubject);
student.enrollSubject(physicsSubject);

console.log("\nAfter enrolling in subjects:");
console.log(student.displayStudentInfo());

console.log("\nSubject-specific operations:");
console.log(mathSubject.solveEquation("2x + 5 = 15"));
console.log(programmingSubject.writeCode("Student Management System"));
console.log(physicsSubject.conductExperiment("Pendulum Motion"));

student.setScore("MATH101", 8.5);
student.setScore("CS101", 9.0);
student.setScore("PHYS101", 7.5);

console.log("\nDetailed Student Information after scores assigned:");
console.log(student.displayDetailedInfo());

const gpa = student.calculateGPA();
console.log(
  `\nOverall GPA with weighted scores: ${gpa !== null ? gpa.toFixed(2) : "N/A"}`
);

let totalRawPoints = 0;
let totalCredits = 0;
student.subjects.forEach((subject) => {
  const score = student.getScore(subject.id);
  if (score) {
    totalRawPoints += score.rawScore * subject.credits;
    totalCredits += subject.credits;
  }
});
const unweightedGPA = totalCredits > 0 ? totalRawPoints / totalCredits : null;
console.log(
  `GPA without weights (all subjects equal): ${
    unweightedGPA !== null ? unweightedGPA.toFixed(2) : "N/A"
  }`
);

student.dropSubject("PHYS101");

console.log("\nFinal Student Information after dropping a subject:");
console.log(student.displayDetailedInfo());
