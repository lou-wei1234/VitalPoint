// Get modal and buttons
var modal = document.getElementById("myModal");
var btn = document.getElementById("submitbtn");
var span = document.getElementsByClassName("close")[0];

// Show the modal when the DELETE button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
span.onclick = function() {
    modal.style.display = "none";
}

document.getElementById("confirmBtn").onclick = function() {
    var doctorID = document.getElementById("doctorID").value;
    if (doctorID) {
        console.log("Doctor with ID " + doctorID + " will be deleted.");
        modal.style.display = "none"; // Close the modal after confirming
    } else {
        alert("Please enter a doctor ID.");
    }
}


