interface MajorCredits {
  credits: number;
  brand: "Major Credits";
}

interface MinorCredits {
  credits: number;
  brand: "Minor Credits";
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major Credits"
  }
}

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor Credits"
  }
}