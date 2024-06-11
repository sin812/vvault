// Get references to DOM elements for the carousel
const carousel = document.querySelector('.carousel'); // Carousel container
const carouselImg = document.querySelector('.carouselimg'); // Image element in the carousel
const testimonial = document.querySelector('.testimonial'); // Testimonial element (assuming it's for showing text related to images)
const prevButton = document.querySelector('#prevButton'); // Previous button element
const nextButton = document.querySelector('#nextButton'); // Next button element

// Array of image sources
const images = [
    '/catalog.jpg',
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg'
];

// Index to keep track of the current image
let currentIndex = 0;

// Function to display the image based on the provided index
function showImage(index) {
    carouselImg.src = images[index]; // Set the image source to the corresponding image in the array
}

// Function to display the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Calculate the new index for the previous image, wrapping around if necessary
    showImage(currentIndex); // Show the image at the new index
    showTestimonial(currentIndex); // Show the testimonial for the new index
}

// Function to display the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Calculate the new index for the next image, wrapping around if necessary
    showImage(currentIndex); // Show the image at the new index
    showTestimonial(currentIndex); // Show the testimonial for the new index
}

// Event listeners for the previous and next buttons
prevButton.addEventListener('click', showPrevImage); // Show the previous image when the previous button is clicked
nextButton.addEventListener('click', showNextImage); // Show the next image when the next button is clicked

// Initially show the first image and testimonial
showImage(currentIndex); // Show the first image
showTestimonial(currentIndex); // Show the first testimonial

