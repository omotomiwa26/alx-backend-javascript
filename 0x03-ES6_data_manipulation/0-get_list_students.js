export default function getListStudents() {
  const Students = (id, firstName, location) => ({
    id,
    firstName,
    location,
  });

  return [
    Students(1, 'Guillaume', 'San Francisco'),
    Students(2, 'James', 'Columbia'),
    Students(5, 'Serena', 'San Francisco'),
  ];
}
