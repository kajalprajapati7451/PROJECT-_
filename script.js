// Navbar hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu function (called from inline onclick)
function closeMenu() {
  navLinks.classList.remove('active');
  hamburger.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const sliderTrack = document.querySelector('.slider-track');
  const cards = document.querySelectorAll('.slider-track .card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 20; // card width + margin

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) { // Show 3 cards in viewport
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  // Optional: Auto slide every 5 seconds
  setInterval(() => {
    if (currentIndex < cards.length - 3) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }, 5000);
});


// Create Prev and Next buttons dynamically (if not present)
if (!document.querySelector('.slider-btn.prev')) {
  const prevBtn = document.createElement('button');
  prevBtn.className = 'slider-btn prev';
  prevBtn.innerHTML = '&#10094;'; // left arrow
  document.querySelector('.slider-container').prepend(prevBtn);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'slider-btn next';
  nextBtn.innerHTML = '&#10095;'; // right arrow
  document.querySelector('.slider-container').append(nextBtn);

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

document.getElementById('scrollToBottomIcon').addEventListener('click', () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

document.getElementById('scrollToTopIcon').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Download Brochure modal popup
const brochureBtn = document.getElementById('brochureBtn');
const loginModal = document.getElementById('loginModal');
const closeModalBtn = loginModal.querySelector('.close');

brochureBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Login form submission (basic, just demo)
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Here you can add your login logic
  alert('Login successful! You can now download the brochure.');
  loginModal.style.display = 'none';
});
