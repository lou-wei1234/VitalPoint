var modal = document.getElementById("myModal");

// Get the Submit button
var btn = document.getElementById("submitbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// clicked "submit"
btn.onclick = function() {
    modal.style.display = "block"; 
}

// x button
span.onclick = function() {
    modal.style.display = "none";
}

//close
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
