window.onload = function() {
    const name = localStorage.getItem('nameData');
    const address = localStorage.getItem('addressData');
    const email = localStorage.getItem('emailData');
    const age = localStorage.getItem('ageData');
    const gender = localStorage.getItem('genderData');
    const date = localStorage.getItem('dateData');
    const appt = localStorage.getItem('apptData');

    // Check if the data exists and set it in the respective elements
    if (name) {
        document.getElementById('patient-name').textContent = name;
    }
    if (address) {
        document.getElementById('patient-address').textContent = address;
    }
    if (email) {
        document.getElementById('patient-email').textContent = email;
    }
    if (age) {
        document.getElementById('patient-age').textContent = age;
    }
    if (gender) {
        document.getElementById('patient-gender').textContent = gender;
    }
    if (date) {
        document.getElementById('patient-date').textContent = date;
    }
    if (appt) {
        document.getElementById('patient-appt').textContent = appt;
    }
}

//Doctor Image
