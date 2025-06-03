document.addEventListener('DOMContentLoaded', function() {
  // Set up all read more buttons
  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  
  readMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
          const card = this.closest('.character-card');
          const dots = card.querySelector('.dots');
          const moreText = card.querySelector('.more-text');
          const btnText = card.querySelector('.read-more-btn');
          
          if (moreText.style.display === 'inline' || moreText.style.display === '') {
              dots.style.display = 'inline';
              btnText.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
              moreText.style.display = 'none';
          } else {
              dots.style.display = 'none';
              btnText.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
              moreText.style.display = 'inline';
          }
      });
  });
});