$("#inputPhone").mask("(99) 9999-99999");

var students = [
    {
        id: 1,
        name: "Pedro Antonio",
        email: "pedro.antonio@abutua.com",
        phone: "(15) 9999-9999",
        course: "Angular",
        shift: "Tarde"
    },
    {
        id: 2,
        name: "Matheus Calvo",
        email: "matheus.calvo@gmail.com",
        phone: "(11) 9999-9999",
        course: "Java",
        shift: "Noite"
    }
];

//OnLoad
loadStudents();

//Load all students
function loadStudents() {
    for (let student of students) {
        addNewRow(student);
    }
}

//Add new Row
function addNewRow(student) {
    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();

    //Insert id student
    var idNode = document.createTextNode(student.id);
    newRow.insertCell().appendChild(idNode);

    //Insert name student
    var nameNode = document.createTextNode(student.name);
    newRow.insertCell().appendChild(nameNode);

    //Insert email student
    var emailNode = document.createTextNode(student.email);
    newRow.insertCell().appendChild(emailNode);

    //Insert phone student
    var phoneNode = document.createTextNode(student.phone);
    newRow.insertCell().appendChild(phoneNode);

    //Insert course student
    var courseNode = document.createTextNode(student.course);
    newRow.insertCell().appendChild(courseNode);

    //Insert shift student
    var shiftNode = document.createTextNode(student.shift);
    newRow.insertCell().appendChild(shiftNode);
}