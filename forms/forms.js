function displayDetails() {
    console.log("Current URL:", window.location.href);

    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const specialty = params.get('specialty');
    const hours = params.get('hours');
    const gender = params.get('gender');
    const allowedDays = params.get('days') ? params.get('days').split(',') : [];
    const startHour = parseInt(params.get('start'), 10);
    const endHour = parseInt(params.get('end'), 10);

    console.log("Extracted Parameters:", { name, specialty, hours, gender, allowedDays, startHour, endHour });

    if (name && specialty && hours) {
        // Update doctor details
        document.getElementById('doctor-name').textContent = name;
        document.getElementById('doctor-specialty').textContent = specialty;
        document.getElementById('clinic-hours').textContent = hours;

        // Doctor gender
        const doctorImage = document.getElementById('doctor-image');
        if (gender.toLowerCase() === "male") {
            doctorImage.src = "../resources/male.jpg";
            doctorImage.alt = "Male Doctor";
        } else if (gender.toLowerCase() === "female") {
            doctorImage.src = "../resources/female.png";
            doctorImage.alt = "Female Doctor";
        }

        // Enable date input and set min to today's date
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today); // Disable past dates
        dateInput.disabled = false;

        // Generate time slots
        const timeInput = document.getElementById('appt');
        const generateTimeSlots = (start, end) => {
            const times = [];
            for (let hour = start; hour < end; hour++) {
                times.push(`${hour}:00`, `${hour}:30`);
            }
            return times;
        };

        const timeSlots = generateTimeSlots(startHour, endHour);

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

            if (!allowedDays.includes(day)) {
                alert(`The doctor is only available on: ${allowedDays.join(', ')}`);
                this.value = '';
                timeInput.disabled = true;
            } else {
                timeInput.disabled = false;
            }
        });

        // Validate time input
        timeInput.addEventListener('change', function () {
            const selectedTime = this.value;
            if (!timeSlots.includes(selectedTime)) {
                alert(`Please select a valid time slot.`);
                this.value = '';
            }
        });
    } else {
        console.error("Missing parameters or incorrect URL structure.");
    }
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("submit");

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

//Transfer text
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
