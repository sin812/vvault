
		const carousel = document.querySelector('.carousel');
		const carouselImg = document.querySelector('.carouselimg');
		const testimonial = document.querySelector('.testimonial');
		const prevButton = document.querySelector('#prevButton');
		const nextButton = document.querySelector('#nextButton');

		const images = [
			'/catalog.jpg',
			'/image1.jpg',
			'/image2.jpg',
			'/image3.jpg'
		];

		let currentIndex = 0;

        

		function showImage(index) {
			carouselImg.src = images[index];
		}

		function showPrevImage() {
			currentIndex = (currentIndex - 1 + images.length) % images.length;
			showImage(currentIndex);
			showTestimonial(currentIndex);
		}

		function showNextImage() {
			currentIndex = (currentIndex + 1) % images.length;
			showImage(currentIndex);
			showTestimonial(currentIndex);
		}

		prevButton.addEventListener('click', showPrevImage);
		nextButton.addEventListener('click', showNextImage);

		showImage(currentIndex);
		showTestimonial(currentIndex);