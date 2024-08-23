document.addEventListener('DOMContentLoaded', () => {
  const themeToggleCheckbox = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggleCheckbox.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
  });

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  const sections = document.querySelectorAll('section');
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // const projectModal = document.querySelector('.project-modal');
  // const modalContent = document.querySelector('.modal-body');
  // const closeBtn = document.querySelector('.close-btn');
  // const projectLinks = document.querySelectorAll('.project-link');

  // projectLinks.forEach(link => {
  //   link.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     const projectDetails = link.parentElement.querySelector('p').innerText;
  //     modalContent.innerHTML = `<p>${projectDetails}</p>`;
  //     projectModal.classList.add('active');
  //   });
  // });

  closeBtn.addEventListener('click', () => {
    projectModal.classList.remove('active');
  });

  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('active');
    }
  });
});
