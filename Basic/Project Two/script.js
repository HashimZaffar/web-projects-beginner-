// Select the form element by its ID
const form = document.getElementById('contactForm');

// Add an event listener to the form for when it is submitted
form.addEventListener('submit', function (event) {
    // Prevent the form from submitting the usual way
    event.preventDefault();
    // Get the values of the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    // Check if the name is empty
    if (name === '') {
        alert('Name is required'); // Show an alert if the name is empty
        return; // Stop the form from submitting
    }


    // Check if the email is empty or not a valid email
    if (email === '' || !validateEmail(email)) {
        alert('Valid email is required'); // Show an alert if the email is empty or invalid
        return; // Stop the form from submitting
    }

    // Check if the message is empty
    if (message === '') {
        alert('Message is required'); // Show an alert if the message is empty
        return; // Stop the form from submitting
    }

    // If all inputs are valid, show a success message
    alert('Form submitted successfully');

});


// Function to validate email format
function validateEmail(email) {
    // Regular expression to check if the email format is correct
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email); // Return true if the email matches the regex, false otherwise
}