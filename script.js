// Function to show success message on form submission
function showSuccessMessage(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    // Display the success popup
    document.getElementById('successPopup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
}