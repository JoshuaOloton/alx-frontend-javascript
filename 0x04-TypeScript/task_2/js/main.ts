interface DirectorInterface {
  workFromHome() : string;
  getCoffeeBreak() : string;
  workDirectorTasks() : string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() : string {
    return 'Working from home';
  }

  getCoffeeBreak() : string {
    return 'Getting a coffee break';
  }

  workDirectorTasks() : string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) : DirectorInterface | TeacherInterface {
  return (typeof salary === "number" && salary < 500) ? new Teacher() : new Director()
}

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));

const isDirector = (employee : Director | Teacher) : boolean => employee instanceof Director;

function executeWork(employee : Director | Teacher) {
  if (isDirector(employee)) {
    console.log((employee as Director).workDirectorTasks());
  } else {
    console.log((employee as Teacher).workTeacherTasks());
  }
}

type Subjects = "Math" | "History";

const teachClass = (todayClass : Subjects) : string => todayClass === "Math" ? "Teaching Math" : "Teaching History";

console.log(teachClass("Math"));

console.log(teachClass("History"));