//This code uses the getElementById method to get references to the DOM elements for the popup overlay, popup, close button, and form submit button. 
// It is the wrong method to use because the querySelector method is more versatile and can be used to select elements by class, tag, or attribute. 
//Also it creates serious security issues, something to be avoided.


 
document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements, BAD PRACTICE
    const popupOverlay = document.querySelector('#popupOverlay');
    const popup = document.querySelector('#popup');
    const closePopup = document.querySelector('#closePopup');

    // Function to open the popup

    //Updated to JQuery
    function openPopup() {
        $('#popupOverlay').css('display', 'block');
    }

    // Function to close the popup

    //Updated to JQuery
    function closePopupFunc() {
        $('#popupOverlay').css('display', 'none');
    }

    // Function to store values (currently unused, but can be expanded)
    function storeValues() {
        const albumname = $('#albname').val();
        const yearReleased = $('#albyear').val();
        const genre = $('#albgenre').val();
    }

    // Function to handle form submission

    //Updated to JQuery
    function handleSubmit(event) { 
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        
        // Get input values
        const albumname = $('#albname').val();
        const yearReleased = $('#albyear').val();
        const genre = $('#albgenre').val();

        // Create a new row in the table
        const table = $('#table');
        const newRow = $('<tr></tr>').appendTo(table);
        
        // Insert cells with input values
        const nameCell = $('<td></td>').text(albumname).appendTo(newRow);
        const yearCell = $('<td></td>').text(yearReleased).appendTo(newRow);
        const genreCell = $('<td></td>').text(genre).appendTo(newRow);

        // Create a delete button
        const deleteButton = $('<button></button>').text('Delete').appendTo(newRow);
        deleteButton.on('click', function() {
            // Remove the row from the table
            newRow.remove();
        });
    }

    // Add event listener to the form submit button
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', storeValues); // Store values (currently unused)
    submitButton.addEventListener('click', handleSubmit); // Handle form submission

    // Event listeners
    openPopup(); // Automatically open the popup for demonstration purposes

    // Close the popup when the close button is clicked
    $('#closePopup').on('click', function() {
        closePopupFunc();
    });
    
    // Close the popup when clicking outside the popup content
    $('#popupOverlay').on('click', function(event) {
        if (event.target === this) {
            closePopupFunc();
        }
    });

    // Open the popup when the "Contact Form" button is clicked
    document.getElementById('openPopup').addEventListener('click', function() {
        openPopup();
    });


    //-----------------------------------------------

    // Function to show a notification with user input details
    function showNotification() {
        //example of a bad practice, if user input is not properly sanitized and is directly inserted into the DOM using getElementById, it can lead to XSS attacks.  
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

    //Updated to JQuery
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
