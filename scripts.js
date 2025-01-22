// Toggle content visibility
function toggleContent(btn, contentId) {
    const expandedContent = document.getElementById(contentId);
    btn.classList.toggle('active');
    expandedContent.classList.toggle('show');

    if (expandedContent.classList.contains('show')) {
        btn.textContent = 'קרא פחות';
    } else {
        btn.textContent = 'קרא עוד';
    }
}
