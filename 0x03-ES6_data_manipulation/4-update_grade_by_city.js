export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (typeof studentList !== 'object' || typeof city !== 'string' || typeof newGrades !== 'object') {
    return [];
  }
  const filteredStudents = studentList.filter((student) => student.location === city);
  return filteredStudents.map((filteredStudent) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === filteredStudent.id);
    return {
      ...filteredStudent,
      grade: studentGrade == null ? 'N/A' : studentGrade.grade,
    };
  });
}
