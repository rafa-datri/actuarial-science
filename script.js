document.addEventListener('DOMContentLoaded', function() {
  const expandableHeadings = document.querySelectorAll('.expandable-heading');

  expandableHeadings.forEach(heading => {
    heading.addEventListener('click', function() {
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains('expandable-submenu')) {
        submenu.classList.toggle('expanded');
      }
    });
  });
});
