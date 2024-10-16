document.addEventListener('DOMContentLoaded', function() {
    // Fetch visited places from localStorage or use an empty array if none are stored
    const visitedPlaces = JSON.parse(localStorage.getItem('visitedPlaces')) || [];
    const placesList = document.getElementById('places-list');

    // Dynamically create a div for each place and append to the placesList
    visitedPlaces.forEach(place => {
        const placeDiv = document.createElement('div');
        placeDiv.textContent = place; // Set the place name inside the div

        // Add event listener for click to redirect to 'chatroom.html'
        placeDiv.addEventListener('click', function() {
            // Redirect to chatroom.html with the place name as a query parameter
            window.location.href = `../public/index.html?place=${encodeURIComponent(place)}`;
        });

        // Append the place div to the places list
        placesList.appendChild(placeDiv);
    });
});

function togglePlacesSidebar() {
    // Toggle the sidebar visibility
    const sidebar = document.getElementById('sidebar-places');
    sidebar.classList.toggle('active'); // Toggle the 'active' class
}

function toggleMenu() {
    // Get the sidebar element
    const sidebar = document.querySelector('.sidebar');
    
    // Toggle between showing and hiding the sidebar by adjusting the 'left' CSS property
    if (sidebar.style.left === '-80px') {
        sidebar.style.left = '0';  // Show the sidebar
    } else {
        sidebar.style.left = '-80px';  // Hide the sidebar
    }
}
