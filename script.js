let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let grade = document.getElementById("grade").value;

  if (name && id && grade) {
    students.push({ name, id, grade });
    displayStudents();
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("grade").value = "";
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function displayStudents() {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";

  students.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.grade}</td>
        <td><button onclick="deleteStudent(${index})">Delete</button></td>
      </tr>
    `;
  });
}
