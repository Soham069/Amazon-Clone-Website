// Get the button and popup elements
const signInButton = document.getElementById('signInButton');
const popupContainer = document.getElementById('popupContainer');
const closePopup = document.getElementById('closePopup');

// Show the popup when the "Sign In" button is clicked
signInButton.addEventListener('click', () => {
    popupContainer.style.display = 'block';
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

// Close the popup when the user clicks outside the popup
window.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});
