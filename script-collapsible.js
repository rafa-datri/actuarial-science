document.addEventListener('DOMContentLoaded', function() {
  // Manejar descripciones desplegables
  const collapsibleToggles = document.querySelectorAll('.collapsible-toggle');

  collapsibleToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.toggle-icon');

      if (content && content.classList.contains('collapsible-content')) {
        content.classList.toggle('expanded');
        // Rotate icon
        if (content.classList.contains('expanded')) {
          icon.style.transform = 'rotate(180deg)';
        } else {
          icon.style.transform = 'rotate(0deg)';
        }
      }
    });

    // Open by default
    const content = toggle.nextElementSibling;
    if (content && content.classList.contains('collapsible-content')) {
      content.classList.add('expanded');
      const icon = toggle.querySelector('.toggle-icon');
      icon.style.transform = 'rotate(180deg)';
    }
  });

  // Manejar ejercicios desplegables
  const exerciseToggles = document.querySelectorAll('.exercise-toggle');

  exerciseToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.exercise-icon');

      if (content && content.classList.contains('exercise-content')) {
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
