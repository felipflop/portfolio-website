document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item .content');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    let scrollPosition = 0;

    timelineItems.forEach((item) => {
        item.addEventListener('click', function() {
            // Store the current scroll position before opening modal
            scrollPosition = window.pageYOffset;

            // Grab data from the clicked item
            const title = this.querySelector('.project-info h3').innerText;
            const description = this.querySelector('.project-info p').innerText;
            const imgSrc = this.querySelector('.project-image-container img').src;
            const date = this.closest('.timeline-item').querySelector('.date').innerText;
            
            // Technology tags - this would be dynamic in a real implementation
            const techTags = ['HTML', 'CSS', 'JavaScript', 'React'];
            const techStackHTML = techTags.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
            
            // Create expanded content with enhanced structure
            const expandedContent = `
                <div class="modal-image">
                    <img src="${imgSrc}" alt="${title}">
                </div>
                <div class="modal-header">
                    <h2>${title}</h2>
                    <div id="close-modal" class="close">&times;</div>
                </div>
                <div class="modal-body">
                    <p class="project-description">${description}</p>
                    <div class="tech-stack">
                        ${techStackHTML}
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec purus vel leo pretium ultrices. Cras non purus vitae felis consequat fermentum.</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean blandit dolor a metus efficitur bibendum.</p>
                    <div class="project-links">
                        <a href="#" class="btn btn-primary">View Project</a>
                        <a href="#" class="btn btn-secondary">GitHub</a>
                    </div>
                </div>
            `;
            
            // Update modal content
            modalContent.innerHTML = expandedContent;
            
            // Display modal with animation
            modal.style.display = 'block';
            void modal.offsetWidth;
            modal.classList.add('active');
            
            // Prevent background scrolling and add fade
            document.body.classList.add('modal-open');

            // Setup close button
            document.getElementById('close-modal').addEventListener('click', closeModal);
        });
    });

    // Function to close modal with animation
    function closeModal() {
        modal.classList.remove('active');
        
        // Remove modal-open class IMMEDIATELY to start the background fade-in
        document.body.classList.remove('modal-open');
        
        // Wait for animation to complete before hiding modal element
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }

    // Close when clicking outside modal content
    window.addEventListener('click', function(e) {
        if(e.target === modal || e.target.classList.contains('modal-backdrop')) {
            closeModal();
        }
    });
    
    // Add ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Make sure modal clicks don't propagate to nav when clicking in modal area
    document.querySelector('.modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});