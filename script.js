document.addEventListener('DOMContentLoaded', function() {
    // Resume submit button click event
    const submitResumeBtn = document.querySelector('.submit-resume');
    if (submitResumeBtn) {
        submitResumeBtn.addEventListener('click', function() {
            alert('Thank you for submitting your resume! We will contact you soon.');
        });
    }

    // Dismiss button click event
    const dismissBtn = document.querySelector('.dismiss');
    if (dismissBtn) {
        dismissBtn.addEventListener('click', function() {
            const notification = document.querySelector('.notification');
            if (notification) {
                notification.style.display = 'none';
            }
        });
    }

    // Search input focus event
    const searchInput = document.querySelector('.search-input input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.placeholder = '';
        });
        
        searchInput.addEventListener('blur', function() {
            this.placeholder = 'Search in Google Play';
        });
    }

    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                this.classList.add('active');
            });
        });
    }
});
