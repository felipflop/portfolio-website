document.addEventListener('DOMContentLoaded', function() {
    const expandButton = document.querySelector('.expand-button');
    const languageSection = document.querySelector('.language-progression');

    expandButton.addEventListener('click', function() {
        if (languageSection.style.display === 'none' || languageSection.style.display === '') {
            languageSection.style.display = 'block';
            expandButton.textContent = 'Hide Programming Languages';
        } else {
            languageSection.style.display = 'none';
            expandButton.textContent = 'Show Programming Languages';
        }
    });
});