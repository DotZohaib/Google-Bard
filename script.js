// Select your elements
let barsIcon = document.querySelector('#bars');
let crossIcon = document.querySelector('#cross'); // Assuming you have a cross icon
let searchBox = document.querySelector('#search-body');
let homeBody = document.querySelector('#home-body');

// Add click event listener to bars icon
barsIcon.addEventListener('click', function () {
    homeBody.style.marginLeft = '0'; // Show the home body
    searchBox.style.marginLeft = '-100vw'; // Hide the search box
});

// Add click event listener to cross icon
crossIcon.addEventListener('click', function () {
    homeBody.style.marginLeft = '-100vw'; // Hide the home body
    searchBox.style.marginLeft = '0'; // Show the search box
});


document.querySelector('.voice-button').addEventListener('click', function() {
    alert('Voice search activated.');
});
document.querySelector('.image-button').addEventListener('click', function() {
    alert('Image search activated.');
});