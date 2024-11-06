// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Mobile Navigation Menu
const navToggle = document.querySelector('.cta a');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});

// Popup Modal for Registration
const registerBtn = document.querySelectorAll('.btn-primary');
const popupModal = document.createElement('div');
popupModal.classList.add('popup-modal');
popupModal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>Regístrate Gratis</h2>
        <p>Accede a nuestros recursos de bienestar y herramientas exclusivas.</p>
        <form id="registration-form">
            <input type="text" placeholder="Nombre completo" required>
            <input type="email" placeholder="Correo electrónico" required>
            <button type="submit" class="btn btn-primary">Registrar</button>
        </form>
    </div>
`;
document.body.appendChild(popupModal);

registerBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popupModal.style.display = 'flex';
    });
});

// Close Modal on Click
popupModal.querySelector('.close-modal').addEventListener('click', () => {
    popupModal.style.display = 'none';
});

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === popupModal) {
        popupModal.style.display = 'none';
    }
});

// Form Submission
document.getElementById('registration-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Gracias por registrarte! Pronto recibirás más información.");
    popupModal.style.display = 'none';
});
