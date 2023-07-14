const cards = document.querySelectorAll('.card-container');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const link = card.querySelector('a');
        if (link) {
            link.click();
        }
    });
});
