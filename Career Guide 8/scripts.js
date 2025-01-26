// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Scroll to "Career Options" on Start button click
  const startButton = document.getElementById('start-btn');

  startButton.addEventListener('click', () => {
    const careerSection = document.getElementById('career-options');
    careerSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Add functionality to career cards
  const careerCards = document.querySelectorAll('.career-card');

  careerCards.forEach(card => {
    card.addEventListener('click', () => {
      const careerTitle = card.querySelector('h3').innerText;
      const careerDescription = card.querySelector('p').innerText;

      // Display information about the career
      alert(`Career: ${careerTitle}\nDescription: ${careerDescription}`);
    });
  });
});
