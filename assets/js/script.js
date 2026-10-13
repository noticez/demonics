document.querySelector('.hero-button-links').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});