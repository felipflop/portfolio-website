let currentModal = null;

function showModal(card) {
    const modal = document.querySelector('.modal-overlay');
    const modalBody = modal.querySelector('.modal-body');
    const content = card.querySelector('.exp-content').cloneNode(true);
    
    // Get header content
    const header = card.querySelector('.exp-header').cloneNode(true);
    
    // Create modal content
    modalBody.innerHTML = '';
    modalBody.appendChild(header);
    modalBody.appendChild(content);
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    currentModal = modal;
    
    // Add animation class
    content.style.display = 'block';
}

function closeModal() {
    if (currentModal) {
        currentModal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
        currentModal = null;
    }
}

// Update click handler
function toggleExpand(header) {
    const card = header.closest('.experience-card');
    showModal(card);
}

// Close modal when clicking escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
}); 