document.addEventListener('DOMContentLoaded', () => {
    const videoCardContainer = document.getElementById('videoCardContainer');
    const video = document.getElementById('video');
    const videoDescription = document.getElementById('videoDescription');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = getVideoIndexFromURL();
    const totalCards = 243;

    function showCard(index) {
        updateURL(index);  // Pass the index to the updateURL function
        // Update the src of the video element
        video.src = `Videos/${index + 1}.mp4`;
        
        // Update the text content of the video description
        videoDescription.textContent = `Video No - ${index}`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
        showCard(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
        showCard(currentIndex);
    });

    // Initialize the first card to be shown
    showCard(currentIndex);
});

// Function to get video index from URL parameter
function getVideoIndexFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    // Ensure the URL parameter name matches the one used in updateURL
    return parseInt(urlParams.get('videoIndex'), 10) || 0;  // Default to 0 if the parameter is not present
}

// Function to update the URL with the current video index
function updateURL(index) {
    const url = new URL(window.location);
    // Ensure the URL parameter name matches the one used in getVideoIndexFromURL
    url.searchParams.set('videoIndex', index);
    window.history.pushState({}, '', url);
}
