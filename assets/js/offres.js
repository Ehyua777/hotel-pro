// Animation apparition douce
const offerCards = document.querySelectorAll('.offer-card');

window.addEventListener('scroll', () => {
    offerCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }
});
});

offerCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
});