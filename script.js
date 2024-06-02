document.addEventListener('DOMContentLoaded', function () {

    const popupOverlay = document.getElementById('popupOverlay');

    const popup = document.getElementById('popup');

    const closePopup = document.getElementById('closePopup');







    // Function to open the popup

    function openPopup() {
        
        popupOverlay.style.display = 'block';

    }

    // Function to close the popup

    function closePopupFunc() {

        popupOverlay.style.display = 'none';

    }

    
    function storeValues() {
      const albumName = document.getElementById("albname").value;
      const yearReleased = document.getElementById("albyear").value;
      const genre = document.getElementById("albgenre").value;
    }

    // Function to handle form submission
    
    function handleSubmit(event) { 
        event.preventDefault(); // Prevent form from submitting and refreshing the page
        
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
    submitButton.addEventListener('click', storeValues);
    submitButton.addEventListener('click', handleSubmit);
    


    // Event listeners

    // Trigger the popup to open (you can call this function on a button click or any other event)

    openPopup();

    // Close the popup when the close button is clicked

    closePopup.addEventListener('click', closePopupFunc);

    // Close the popup when clicking outside the popup content

    popupOverlay.addEventListener('click', function (event) {

        if (event.target === popupOverlay) {

            closePopupFunc();

        }

    });

    document.getElementById('openPopup').addEventListener('click', function() {
        openPopup();
    })

    // You can customize and expand these functions based on your specific requirements.

    function showNotification() {
        const useremail = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const userphone = document.getElementById("phone").value;
        const usertext = document.getElementById("message").value;

        const notification = document.createElement('div');
        notification.textContent = `Email: ${useremail}, Phone: ${userphone}, Message: ${usertext}, ${username}'s message has been sent successfully!`;
        notification.classList.add('notification');

        document.body.appendChild(notification);

        setTimeout(function() {
            document.body.removeChild(notification);
        }, 6000);
    }

    
    submitButton.addEventListener('click', showNotification);
    submitButton.addEventListener("click", closePopupFunc);


    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        document.instructions.classList.toggle('dark-mode');
    }

    // Add event listener to the dark mode button
    

    function toggleDarkMode() {
            var body = document.body;
            body.classList.toggle("dark-mode");
        }

        // Event listener for dark mode button
        var darkModeButton = document.getElementById("darkModeButton");
        darkModeButton.addEventListener("click", toggleDarkMode);
        
        
        function sortTableByYear() {
            const table = document.getElementById('table');
            const rows = Array.from(table.rows).slice(1); // Exclude the header row
            rows.sort((a, b) => {
            const yearA = parseInt(a.cells[1].textContent);
            const yearB = parseInt(b.cells[1].textContent);
            return yearB - yearA; // Sort in descending order
            });
            rows.forEach(row => table.appendChild(row));
        }

        const sortButton = document.getElementById('sortButton');
        sortButton.addEventListener('click', sortTableByYear);
});




