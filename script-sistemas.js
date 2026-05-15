document.addEventListener('DOMContentLoaded', function() {
  // Manejar sistemas desplegables
  const sistemaToggles = document.querySelectorAll('.sistema-toggle');

  sistemaToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.sistema-icon');

      if (content && content.classList.contains('sistema-content')) {
        content.classList.toggle('expanded');
        // Rotate icon
        if (content.classList.contains('expanded')) {
          icon.style.transform = 'rotate(180deg)';
        } else {
          icon.style.transform = 'rotate(0deg)';
        }
      }
    });
  });
});
