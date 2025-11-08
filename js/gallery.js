// When the page loads, show all images by default
window.onload = function() {
    filterSelection('all'); // Default view shows all images
}

function filterSelection(topic) {
    var images = document.getElementsByClassName("gallery-item");
    
    // Remove the "active" class from all buttons
    var buttons = document.getElementsByClassName("btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    
    // Add the "active" class to the clicked button
    var clickedButton = document.querySelector(`button[onclick="filterSelection('${topic}')"]`);
    clickedButton.classList.add("active");

    // Loop through all images and show/hide based on the topic
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none"; // Hide all images by default
        
        // If "all" is selected, show all images, otherwise show only the relevant ones
        if (topic == "all" || images[i].classList.contains(topic)) {
            images[i].style.display = "block";
        }
    }
}
