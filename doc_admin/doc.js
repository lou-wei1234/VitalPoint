var modal = document.getElementById("myModal");
var btn = document.getElementById("delbtn");
var span = document.getElementsByClassName("close")[0];
var confirmBtn = document.getElementById("confirmBtn");
var cancelBtn = document.getElementById("cancelBtn");
var selectedRow = null; // To store the row to be deleted

// Show the modal when any "DELETE" button in the table is clicked
document.querySelectorAll('.delete-btn').forEach(function(button) {
    button.onclick = function() {
        selectedRow = button.closest('tr'); // Get the row that contains the clicked button
        modal.style.display = "block"; // Show the modal
    };
});

// Close the modal when the 'x' is clicked
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the 'Cancel' button is clicked
cancelBtn.onclick = function() {
    modal.style.display = "none";
}

// Confirm deletion when the 'Confirm' button is clicked
confirmBtn.onclick = function() {
    if (selectedRow) {
        // Remove the row from the table
        selectedRow.remove();
        modal.style.display = "none"; // Close the modal
    }
}
