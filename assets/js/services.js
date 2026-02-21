// Animation apparition douce au scroll
const cards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }
});
});
// Initial state
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
});