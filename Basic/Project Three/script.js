// Function to calculate the average grade
function calculateAverage() {
    // Get all the elements with class "grade"
    var grades = document.getElementsByClassName("grade");
    var sum = 0;

    // Loop through all grade elements and add their values to sum
    for (var i = 0; i < grades.length; i++) {
        sum += parseInt(grades[i].textContent);
    }

    // Calculate the average by dividing sum by the number of grades
    var average = sum / grades.length;

    // Display the average grade in the paragraph with id "averageGrade"
    document.getElementById("averageGrade").textContent = "Average Grade: " + average;
}
