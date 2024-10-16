// Use this function to populate the sidebar with visited places
function loadVisitedPlaces() {
    const visitedPlaces = JSON.parse(localStorage.getItem('visitedPlaces')) || [];
    const placesList = document.getElementById('places-list');

    // Clear the places list to prevent duplicates
    placesList.innerHTML = '';

    visitedPlaces.forEach(place => {
        const placeDiv = document.createElement('div');
        placeDiv.textContent = place;

        // Add a click event listener to navigate to chatroom.html
        placeDiv.addEventListener('click', function() {
            window.location.href = `chatroom.html?place=${encodeURIComponent(place)}`;
        });

        placesList.appendChild(placeDiv);
    });
}

// Call the function only once
document.addEventListener('DOMContentLoaded', loadVisitedPlaces);

function togglePlacesSidebar() {
    const sidebar = document.getElementById('sidebar-places');
    sidebar.classList.toggle('active'); // Toggle visibility
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-80px' : '0px'; // Toggle sidebar visibility
}
