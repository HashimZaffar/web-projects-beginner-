// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the favorite link element by its ID
    const favoriteLink = document.getElementById("favorite-link");

    // Function to display an alert when the link is clicked
    favoriteLink.addEventListener("click", function(event) {
        // Prevent the default action of the link
        event.preventDefault();
        // Show an alert box
        alert("You are about to visit my favorite website!");
        // After alert, go to the website
        window.location.href = favoriteLink.href;
    });
});
