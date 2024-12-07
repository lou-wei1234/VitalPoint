document.addEventListener('DOMContentLoaded', async () => {
/*     const response = await fetch('http://localhost:3000/admin/dashboard');
    const users = response.json();
    console.log(users) */
    try {
        // Fetch user data from the server
        const response = await fetch('http://localhost:3000/admin/dashboard');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log(data)
        const users = data.users;

        // Get the table body element
        const tableBody = document.querySelector('#userTable tbody');
        tableBody.innerHTML = ''; // Clear any existing content

        // Populate the table with user data
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user._id}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to load user data.');
    }
});
