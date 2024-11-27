var modal = document.getElementById("myModal");
var btn = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];

// Modal function to check form validity and show modal if valid
function modalFunction(event) {
    event.preventDefault(); // Prevent form submission

    var form = document.getElementById("addDoctorForm");
    var inputs = form.querySelectorAll("input, select");
    var allValid = true;

    // Check if all inputs are filled
    inputs.forEach(function (input) {
        if (!input.value) {
            allValid = false; // If any input is empty, set to false
        }
    });

    // If all inputs are valid, show the modal
    if (allValid) {
        modal.style.display = "block";
    } else {
        alert("Please fill in all the fields.");
    }
}
btn.addEventListener("click", modalFunction);

// Pressed X
span.onclick = function () {
    modal.style.display = "none";
};