
document.addEventListener('DOMContentLoaded', () => {
    const viewMoreBtn = document.getElementById('view-more-btn');
    const hiddenItems = document.querySelectorAll('.itembox.hidden');

    let isExpanded = false;

    viewMoreBtn.addEventListener('click', () => {
        if (isExpanded) {
            // Hide the extra items
            hiddenItems.forEach(item => item.classList.add('hidden'));
            viewMoreBtn.textContent = 'View More';
        } else {
            // Show all items
            hiddenItems.forEach(item => item.classList.remove('hidden'));
            viewMoreBtn.textContent = 'View Less';
        }
        isExpanded = !isExpanded;
    });
});