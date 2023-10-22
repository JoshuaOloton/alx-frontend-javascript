interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee : boolean;
  yearsOfExperience? : number;
  location: string;
  [key : string] : any;
}

interface Directors extends Teacher {
  numberOfReports : number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string) : string;
}

const printTeacher : printTeacherFunction = (firstName, lastName) => firstName[0] + '. ' + lastName;

interface StudentClassInterface {
  workOnHomework() : string;
  displayName() : string
}

interface StudentConstructor {
  new (firstName: string, lastName: string) : StudentClassInterface
}

class StudentClass implements StudentClassInterface {
  firstName : string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() : string {
    return 'Currently working';
  }

  displayName() : string {
    return this.firstName[0];
  }
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);