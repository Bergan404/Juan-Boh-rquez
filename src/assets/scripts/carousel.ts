let currentSlide: number = 1;
let isPaused: boolean = false; // Variable to check if the slideshow is paused

// Function to change the slide
const changeSlide: () => void = () => {
    if (!isPaused) {
        // Remove 'can-zoom' class from all slides
        document.querySelectorAll('.zoom-container').forEach((container: HTMLElement) => {
            container.classList.remove('can-zoom');
        });

        // Set the active slide
        const activeSlide: HTMLInputElement | null = document.getElementById(`s${currentSlide}`);
        if (activeSlide) {
            activeSlide.checked = true;
        }

        // Add 'can-zoom' class to the active slide
        const activeContainer: HTMLElement | null = document.querySelector(`.zoom-container[data-slide="${currentSlide}"]`);
        if (activeContainer) {
            activeContainer.classList.add('can-zoom');
        }

        // Move to the next slide
        currentSlide++;
        if (currentSlide > 5) {
            currentSlide = 1;
        }
    }
};

// Start the auto-scroll
let slideInterval: NodeJS.Timeout = setInterval(changeSlide, 5000);

// Function to pause the auto-scroll
const pauseSlide: () => void = () => {
    isPaused = true;
};

// Function to resume the auto-scroll
const resumeSlide: () => void = () => {
    isPaused = false;
};

// Adding event listeners to pause and resume auto-scroll on hover
document.querySelectorAll('.zoom-container').forEach((container: HTMLElement) => {
    container.addEventListener('mouseover', () => {
        if (!container.classList.contains('can-zoom')) {
            return;
        }
        pauseSlide();
    });
    container.addEventListener('mouseout', () => {
        resumeSlide();
    });
});
