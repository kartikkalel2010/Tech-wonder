// Contact Modal Elements
const contactModal = document.getElementById('contactModal');
const openContactModalBtn = document.getElementById('openContactModalBtn');
const contactModalCloseBtn = document.getElementById('contactModalCloseBtn');
const contactModalForm = document.getElementById('contactModalForm');
const contactModalSuccess = document.getElementById('contactModalSuccess');

function openContactModal() {
  contactModal.classList.add('active');
  contactModal.focus();
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeContactModal() {
  contactModal.classList.remove('active');
  document.body.style.overflow = '';
}

openContactModalBtn.addEventListener('click', openContactModal);
contactModalCloseBtn.addEventListener('click', closeContactModal);

// Close modal by clicking on overlay (outside modal)
contactModal.addEventListener('click', e => {
  if (e.target === contactModal) closeContactModal();
});

// Close modal by ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && contactModal.classList.contains('active')) {
    closeContactModal();
  }
});

// Handle form submission with success message
contactModalForm.onsubmit = function(e) {
  e.preventDefault();
  contactModalSuccess.style.display = 'block';
  contactModalForm.reset();
  setTimeout(() => {
    contactModalSuccess.style.display = 'none';
    closeContactModal();
  }, 2500);
};
