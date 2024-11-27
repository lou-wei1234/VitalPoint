function handleRowClick(name, specialty, hours, gender) {
    console.log("Redirecting with:", name, specialty, hours, gender);

    // Define doctor's available days and time slots based on the doctor's name
    let allowedDays, startHour, endHour;

    if (name === "Dr. Emma Smith") {
        allowedDays = ["Mon", "Tue", "Wed", "Thu"];
        startHour = 9;
        endHour = 17;
    } else if (name === "Dr. Liam Johnson") {
        allowedDays = ["Tue", "Wed", "Thu"];
        startHour = 10;
        endHour = 16;
    } else if (name === "Dr. Sophia Davis") {
        allowedDays = ["Mon", "Tue", "Wed"];
        startHour = 11;
        endHour = 15;
    }

    // Store doctor data in localStorage as an object
    const doctorData = {
        name,
        specialty,
        hours,
        gender,
        allowedDays,
        startHour,
        endHour
    };
    localStorage.setItem('doctorData', JSON.stringify(doctorData));

    // Redirect to the forms.html page
    window.location.href = '../forms/forms.html';
}


//ilter and search elements
const specialtySelect = document.getElementById('specialty-select');
const searchInput = document.getElementById('doctor-search');
const doctorTable = document.getElementById('doctor-table');
const doctorRows = doctorTable.getElementsByTagName('tr');

//specialty dropdown change
specialtySelect.addEventListener('change', filterDoctors);
searchInput.addEventListener('input', filterDoctors);

//filter doctors
function filterDoctors() {
    const selectedSpecialty = specialtySelect.value.toLowerCase();
    const searchTerm = searchInput.value.toLowerCase();

    // Loop through all rows (except the header) to filter them
    for (let i = 1; i < doctorRows.length; i++) {
        const row = doctorRows[i];
        const name = row.cells[0].textContent.toLowerCase();
        const specialty = row.cells[1].textContent.toLowerCase();

        // Check if the row matches the filter criteria
        const matchesSpecialty = selectedSpecialty === 'all' || specialty.includes(selectedSpecialty);
        const matchesSearchTerm = name.includes(searchTerm);

        // Show or hide the row based on the filters
        if (matchesSpecialty && matchesSearchTerm) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}