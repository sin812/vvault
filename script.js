document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    // Function to open the popup
    function openPopup() {
        popupOverlay.style.display = 'block'; // Display the overlay and popup
    }

    // Function to close the popup
    function closePopupFunc() {
        popupOverlay.style.display = 'none'; // Hide the overlay and popup
    }

    // Function to store values (currently unused, but can be expanded)
    function storeValues() {
        const albumName = document.getElementById("albname").value;
        const yearReleased = document.getElementById("albyear").value;
        const genre = document.getElementById("albgenre").value;
    }

    // Function to handle form submission
    function handleSubmit(event) { 
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        
        // Get input values
        const albumName = document.getElementById("albname").value;
        const yearReleased = document.getElementById("albyear").value;
        const genre = document.getElementById("albgenre").value;

        // Create a new row in the table
        const table = document.getElementById('table');
        const newRow = table.insertRow();
        
        // Insert cells with input values
        const nameCell = newRow.insertCell();
        nameCell.textContent = albumName;
        
        const yearCell = newRow.insertCell();
        yearCell.textContent = yearReleased;
        
        const genreCell = newRow.insertCell();
        genreCell.textContent = genre;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            // Remove the row from the table
            table.deleteRow(newRow.rowIndex);
        });

        // Insert the delete button into a cell
        const deleteCell = newRow.insertCell();
        deleteCell.appendChild(deleteButton);
    }

    // Add event listener to the form submit button
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', storeValues); // Store values (currently unused)
    submitButton.addEventListener('click', handleSubmit); // Handle form submission

    // Event listeners
    openPopup(); // Automatically open the popup for demonstration purposes

    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', closePopupFunc);

    // Close the popup when clicking outside the popup content
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupFunc();
        }
    });

    // Open the popup when the "Contact Form" button is clicked
    document.getElementById('openPopup').addEventListener('click', function() {
        openPopup();
    });

    // Function to show a notification with user input details
    function showNotification() {
        const useremail = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const userphone = document.getElementById("phone").value;
        const usertext = document.getElementById("message").value;

        const notification = document.createElement('div');
        notification.textContent = `Email: ${useremail}, Phone: ${userphone}, Message: ${usertext}, ${username}'s message has been sent successfully!`;
        notification.classList.add('notification');

        document.body.appendChild(notification);

        // Remove the notification after 6 seconds
        setTimeout(function() {
            document.body.removeChild(notification);
        }, 6000);
    }

    // Add event listeners to show the notification and close the popup upon form submission
    submitButton.addEventListener('click', showNotification);
    submitButton.addEventListener("click", closePopupFunc);

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    // Add event listener to the dark mode button
    var darkModeButton = document.getElementById("darkModeButton");
    darkModeButton.addEventListener("click", toggleDarkMode);

    // Function to sort the table by year in descending order
    function sortTableByYear() {
        const table = document.getElementById('table');
        const rows = Array.from(table.rows).slice(1); // Exclude the header row
        rows.sort((a, b) => {
            const yearA = parseInt(a.cells[1].textContent);
            const yearB = parseInt(b.cells[1].textContent);
            return yearB - yearA; // Sort in descending order
        });
        rows.forEach(row => table.appendChild(row)); // Reattach rows in sorted order
    }

    // Add event listener to the sort button
    const sortButton = document.getElementById('sortButton');
    sortButton.addEventListener('click', sortTableByYear);
});
