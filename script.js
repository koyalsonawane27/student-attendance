let attendance = {};

function markAttendance(student, status) {
    attendance[student] = status;
}

function submitAttendance() {
    let output = "Attendance Submitted:<br>";
    for (let student in attendance) {
        output += "Student " + student + ": " + attendance[student] + "<br>";
    }
    document.getElementById("result").innerHTML = output;
}