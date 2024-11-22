function validateLogin() {
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    if (username === "admin" && password === "adminpass") {
        window.location.href = "../appointments/appointments.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}