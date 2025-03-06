const gallery = document.querySelector('.gallery');
const searchInput = document.getElementById('search-input');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

const images = [
    'image/image1.jpg',
    'image/image2.jpg',
    'image/image3.jpg',
    'image/image4.jpg',
    'image/image5.jpg',
    'image/image6.jpg',
    'image/image7.jpg',
    'image/image8.jpg',
    'image/image9.jpg',
    'image/image10.jpg',
    'image/image11.jpg',
    'image/image12.jpg'
];

// Load images into the gallery
function loadImages() {
    gallery.innerHTML = '';
    images.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Image';
        img.loading = 'lazy';

        img.addEventListener('click', () => openLightbox(url));
        gallery.appendChild(img);
    });
}

// Filter images based on search input
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredImages = images.filter((url) => url.includes(query));
    gallery.innerHTML = '';
    filteredImages.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Image';
        img.loading = 'lazy';
        img.addEventListener('click', () => openLightbox(url));
        gallery.appendChild(img);
    });
});

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Open lightbox
function openLightbox(url) {
    lightbox.style.display = 'flex';
    lightboxImg.src = url;
}

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Initial load
loadImages();

