let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent() {
    let id = document.getElementById("studentId").value;
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (id === "" || name === "") {
        alert("Please enter Student ID and Name");
        return;
    }

    let student = {
        id,
        name,
        course,
        email,
        phone
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("studentId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}