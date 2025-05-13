"use strict";
function sumMajorCredits(subject1, subject2) {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'Major' };
}
function sumMinorCredits(subject1, subject2) {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'Minor' };
}
const majorSubject1 = { credits: 5, brand: 'Major' };
const majorSubject2 = { credits: 3, brand: 'Major' };
const minorSubject1 = { credits: 2, brand: 'Minor' };
const minorSubject2 = { credits: 1, brand: 'Minor' };
console.log(sumMajorCredits(majorSubject1, majorSubject2));
console.log(sumMinorCredits(minorSubject1, minorSubject2));
