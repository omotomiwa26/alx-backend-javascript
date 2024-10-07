export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((std) => std.location === city)
    .map((students) => {
      const grades = newGrades.filter((std) => std.studentId === students.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...students,
        grade,
      };
    });
}
