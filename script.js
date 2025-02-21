function createFloatingHearts() {
    const container = document.createElement('div');
    container.className = 'floating-hearts';
    document.body.appendChild(container);

    // Create sections for more uniform distribution
    const sections = 8; // Divide screen into 8 sections
    let currentSection = 0;

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        
        // Calculate position based on sections for more uniform distribution
        const sectionWidth = 100 / sections;
        const minX = (currentSection * sectionWidth);
        const maxX = ((currentSection + 1) * sectionWidth);
        const randomX = minX + (Math.random() * (maxX - minX));
        
        heart.style.left = randomX + 'vw';
        heart.style.top = '-50px';
        
        // Animation duration and other effects
        heart.style.animationDuration = 8 + Math.random() * 4 + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(heart);
        
        // Move to next section
        currentSection = (currentSection + 1) % sections;
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }, 800);
}

// Start creating hearts when the page loads
document.addEventListener('DOMContentLoaded', createFloatingHearts);

function initializePhotoGallery() {
    const photos = document.querySelectorAll('.photo-item');
    
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            const img = photo.querySelector('img');
            const fullscreen = document.createElement('div');
            fullscreen.className = 'fullscreen-photo';
            fullscreen.innerHTML = `
                <div class="fullscreen-content">
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            
            document.body.appendChild(fullscreen);
            
            fullscreen.addEventListener('click', () => {
                fullscreen.remove();
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initializePhotoGallery); 