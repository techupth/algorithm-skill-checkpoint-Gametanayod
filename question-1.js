function findStudentById(students, id) {
  let midIndex;
  let leftIndex = 0;
  let rightIndex = students.length - 1;
  while (leftIndex <= rightIndex) {
    midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (students[midIndex].id === id) {
      return students[midIndex];
    } else if (students[midIndex].id < id) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  if (id > students.length) {
    return null;
  }
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
