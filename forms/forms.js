function displayDetails() {
    console.log("Current URL:", window.location.href);

    const doctorData = JSON.parse(localStorage.getItem('doctorData'));
    if (doctorData) {
        console.log("Doctor Data:", doctorData);

        document.getElementById('doctor-name').textContent = doctorData.name;
        document.getElementById('doctor-specialty').textContent = doctorData.specialty;
        document.getElementById('clinic-hours').textContent = doctorData.hours;

        const doctorImage = document.getElementById('doctor-image');
        if (doctorData.gender.toLowerCase() === "male") {
            doctorImage.src = "../resources/male.jpg";
            doctorImage.alt = "Male Doctor";
        } else if (doctorData.gender.toLowerCase() === "female") {
            doctorImage.src = "../resources/female.png";
            doctorImage.alt = "Female Doctor";
        }

        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today); // Disable past dates
        dateInput.disabled = false;

        // Generate time slots based on doctor’s available hours
        const timeInput = document.getElementById('appt');
        const generateTimeSlots = (start, end) => {
            const times = [];
            for (let hour = start; hour < end; hour++) {
                times.push(`${hour}:00`, `${hour}:30`);
            }
            return times;
        };

        const timeSlots = generateTimeSlots(doctorData.startHour, doctorData.endHour);

        // Populate time dropdown
        timeSlots.forEach((time) => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeInput.appendChild(option);
        });

        // Validate selected date
        dateInput.addEventListener('change', function () {
            const selectedDate = new Date(this.value);
            const day = selectedDate.toLocaleString('en-US', { weekday: 'short' });

            if (!doctorData.allowedDays.includes(day)) {
                alert(`The doctor is only available on: ${doctorData.allowedDays.join(', ')}`);
                this.value = '';
                timeInput.disabled = true;
            } else {
                timeInput.disabled = false;
            }
        });
    } else {
        console.error("No doctor data found in localStorage.");
    }
}

// Modal references
var modal = document.getElementById("myModal");
var btn = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];

// When the submit button is clicked
btn.addEventListener("click", function(event) {
    event.preventDefault();

    // Check if all fields have values
    if (validateForm()) {
        modal.style.display = "block"; // Show the modal if all inputs are valid
    } else {
        alert("Please fill in all the fields.");
    }
});

// When the "X" button is clicked to close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// make sure all input has data
function validateForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;
    const appt = document.getElementById('appt').value;

    // Only check the age if it's not empty
    if (age && age < 1) {
        alert("Age must be 1 or greater.");
        return false;
    }

    return name && address && email && age && gender && date && appt;
}

function storeData() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;
    const appt = document.getElementById('appt').value;

    localStorage.setItem('nameData', name);
    localStorage.setItem('addressData', address);
    localStorage.setItem('emailData', email);
    localStorage.setItem('ageData', age);
    localStorage.setItem('genderData', gender);
    localStorage.setItem('dateData', date);
    localStorage.setItem('apptData', appt);

    window.location.href = '../confirmation/confirmation.html';
}
