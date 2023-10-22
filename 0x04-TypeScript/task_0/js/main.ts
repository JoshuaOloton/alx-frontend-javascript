interface Student {
  firstname: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 : Student = {
  firstname: "Adebimpe",
  lastName: "Oyawole",
  age: 21,
  location: "Ifako"
};

const student2 : Student = {
  firstname: "Damilola",
  lastName: "Oso",
  age: 23,
  location: "Ikeja"
};

const studentList: Student[] = [student1, student2];

function renderTable()
{
  const table = document.createElement('table');
  studentList.forEach((student) => {
    const row = document.createElement('tr');
    const firstname = document.createElement('td');
    firstname.innerHTML = student.firstname;
    row.appendChild(firstname);
    const location = document.createElement('td');
    location.innerHTML = student.location;
    row.appendChild(location);
    table.appendChild(row);
  });

  document.body.appendChild(table);

}

renderTable();