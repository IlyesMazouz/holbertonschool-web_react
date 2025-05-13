interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'Major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'Minor' };
}

const majorSubject1: MajorCredits = { credits: 5, brand: 'Major' };
const majorSubject2: MajorCredits = { credits: 3, brand: 'Major' };

const minorSubject1: MinorCredits = { credits: 2, brand: 'Minor' };
const minorSubject2: MinorCredits = { credits: 1, brand: 'Minor' };

console.log(sumMajorCredits(majorSubject1, majorSubject2));
console.log(sumMinorCredits(minorSubject1, minorSubject2));
