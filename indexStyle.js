// Video Modal Functionality
const modal = document.getElementById('videoModal');
const trailerBtn = document.getElementById('trailerBtn');
const closeModal = document.getElementById('closeModal');
const videoFrame = document.getElementById('trailerVideo');

trailerBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Pause the video when closing
    videoFrame.src += "&enablejsapi=1";
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Pause the video when closing
        videoFrame.src += "&enablejsapi=1";
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // Only prevent default for same-page anchors
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // Otherwise, allow normal navigation
    });
});

// Character card interaction
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', function() {
        // In a full implementation, this would navigate to character details
        console.log('Navigating to character page');
    });
});