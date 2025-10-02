function sayHello() {
  alert("Hello from your first website!");
}

// Select all clickable images
const images = document.querySelectorAll('.clickable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';  // show overlay
    lightboxImg.src = img.src;         // set clicked image
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';    // hide overlay
}
