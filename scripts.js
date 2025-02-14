// Toggle content visibility
function toggleContent(btn, contentId) {
    const expandedContent = document.getElementById(contentId);
    btn.classList.toggle('active');
    expandedContent.classList.toggle('show');

    if (expandedContent.classList.contains('show')) {
        btn.textContent = 'קראי פחות';
    } else {
        btn.textContent = 'קראי עוד';
    }
}
