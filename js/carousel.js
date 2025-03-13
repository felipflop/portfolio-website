document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.project-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const timelineContainer = document.querySelector('.timeline-markers');
    
    // Create timeline markers
    projectItems.forEach((item, index) => {
        const marker = document.createElement('div');
        marker.classList.add('timeline-marker');
        
        // Calculate position (evenly spaced)
        const position = index / (projectItems.length - 1) * 100;
        marker.style.left = `${position}%`;
        
        // Add date if available
        const date = item.getAttribute('data-date');
        if (date) {
            const dateSpan = document.createElement('span');
            dateSpan.classList.add('timeline-date');
            dateSpan.textContent = date;
            marker.appendChild(dateSpan);
        }
        
        // Add click event to scroll to item
        marker.addEventListener('click', () => {
            carousel.scrollLeft = item.offsetLeft - carousel.offsetLeft;
            updateActiveMarker();
        });
        
        timelineContainer.appendChild(marker);
    });
    
    // Update active marker based on scroll position
    function updateActiveMarker() {
        const scrollPosition = carousel.scrollLeft;
        const markers = document.querySelectorAll('.timeline-marker');
        
        projectItems.forEach((item, index) => {
            const itemPosition = item.offsetLeft - carousel.offsetLeft;
            const marker = markers[index];
            
            // If this item is in view, make its marker active
            if (scrollPosition >= itemPosition - 50 && 
                scrollPosition < itemPosition + item.offsetWidth - 50) {
                marker.classList.add('active');
            } else {
                marker.classList.remove('active');
            }
        });
    }
    
    // Navigation buttons
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: carousel.offsetWidth * 0.8, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -carousel.offsetWidth * 0.8, behavior: 'smooth' });
    });
    
    // Update active marker on scroll
    carousel.addEventListener('scroll', () => {
        updateActiveMarker();
    });
    
    // Initialize active marker
    updateActiveMarker();
});