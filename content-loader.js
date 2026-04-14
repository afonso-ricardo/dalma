// Content Loader Script
// This script loads content from content-config.js and updates the HTML dynamically

document.addEventListener('DOMContentLoaded', function() {
    // Load services content
    loadServicesContent();
    loadSpaceContent();
    loadGalleryContent();
    loadHeroContent();
    loadSectionTitles();
});

function loadServicesContent() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid || !services) return;

    // Clear existing content
    servicesGrid.innerHTML = '';

    // Generate service cards from config
    Object.keys(services).forEach(serviceKey => {
        const service = services[serviceKey];
        
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <h3>${service.title}</h3>
            <p>${service.shortDescription}</p>
            <button class="learn-more-btn" onclick="openServiceModal('${serviceKey}')">Saber mais</button>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

function loadSpaceContent() {
    const spaceGrid = document.querySelector('.space-grid');
    if (!spaceGrid || !spaceImages) return;

    // Clear existing content
    spaceGrid.innerHTML = '';

    // Generate space items from config
    Object.keys(spaceImages).forEach(spaceKey => {
        const space = spaceImages[spaceKey];
        
        const spaceItem = document.createElement('div');
        spaceItem.className = 'space-item';
        spaceItem.innerHTML = `
            <div class="space-image">
                <img src="${space.image}" alt="${space.alt}">
            </div>
        `;
        
        spaceGrid.appendChild(spaceItem);
    });
}

function loadGalleryContent() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid || !galleryImages) return;

    // Clear existing content
    galleryGrid.innerHTML = '';

    // Get all gallery image keys
    const imageKeys = Object.keys(galleryImages);
    
    // Show only first 6 images initially
    const initialImages = imageKeys.slice(0, 6);
    const hiddenImages = imageKeys.slice(6);
    
    // Generate initial gallery items
    initialImages.forEach(galleryKey => {
        const gallery = galleryImages[galleryKey];
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-image">
                <img src="${gallery.image}" alt="${gallery.alt}">
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
    
    // Add "Show More" button if there are more images
    if (hiddenImages.length > 0) {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.className = 'show-more-btn';
        showMoreBtn.textContent = 'Mostrar Mais';
        showMoreBtn.onclick = function() {
            showMoreImages(hiddenImages, showMoreBtn);
        };
        
        galleryGrid.appendChild(showMoreBtn);
    }
}

function showMoreImages(hiddenImages, button) {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Add remaining images
    hiddenImages.forEach(galleryKey => {
        const gallery = galleryImages[galleryKey];
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-image">
                <img src="${gallery.image}" alt="${gallery.alt}">
            </div>
        `;
        
        galleryGrid.insertBefore(galleryItem, button);
    });
    
    // Remove the "Show More" button
    button.remove();
}

function loadHeroContent() {
    if (!heroContent) return;

    // Update hero title
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.textContent = heroContent.title;
    }

    // Update hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = heroContent.subtitle;
    }

    // Update primary button
    const primaryButton = document.querySelector('.cta-button.primary');
    if (primaryButton) {
        primaryButton.textContent = heroContent.primaryButtonText;
    }

    // Update secondary button
    const secondaryButton = document.querySelector('.cta-button.secondary');
    if (secondaryButton) {
        secondaryButton.textContent = heroContent.secondaryButtonText;
    }

    // Update hero image
    const heroBanner = document.getElementById('hero-banner');
    if (heroBanner && heroContent.backgroundImage) {
        heroBanner.src = heroContent.backgroundImage;
        heroBanner.alt = heroContent.backgroundAlt;
    }
}

function loadSectionTitles() {
    if (!sectionTitles) return;

    // Update services section title
    const servicesTitle = document.querySelector('#services h2');
    if (servicesTitle) {
        servicesTitle.textContent = sectionTitles.services;
    }

    // Update our space section title
    const spaceTitle = document.querySelector('#our-space h2');
    if (spaceTitle) {
        spaceTitle.textContent = sectionTitles.ourSpace;
    }

    // Update gallery section title
    const galleryTitle = document.querySelector('#gallery h2');
    if (galleryTitle) {
        galleryTitle.textContent = sectionTitles.gallery;
    }

    // Update contact section title
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) {
        contactTitle.textContent = sectionTitles.contact;
    }
}

// Update service data for modal functionality
function updateServiceData() {
    if (typeof services !== 'undefined') {
        // Update the global serviceData object used by modal
        window.serviceData = services;
    }
}

// Make openServiceModal use the updated serviceData
function updateModalFunction() {
    // This function will be called after content is loaded
    if (typeof window.openServiceModal === 'function') {
        // Store original function
        const originalOpenServiceModal = window.openServiceModal;
        
        // Replace with new function that uses updated serviceData
        window.openServiceModal = function(serviceType) {
            const modal = document.getElementById('serviceModal');
            const service = window.serviceData[serviceType];
            
            if (!service) return;
            
            // Update modal content
            document.getElementById('modalTitle').textContent = service.title;
            document.getElementById('modalImage').src = service.image;
            document.getElementById('modalImage').alt = service.title;
            document.getElementById('modalDescription').textContent = service.fullDescription;
            
            // Update benefits list
            const benefitsList = document.getElementById('benefitsList');
            benefitsList.innerHTML = '';
            service.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                benefitsList.appendChild(li);
            });
            
            // Update duration
            document.getElementById('durationText').textContent = service.duration;
            
            // Show modal with animation
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        };
    }
}

// Initialize service data and update modal function
updateServiceData();
updateModalFunction();

// Lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // Add click event to space images
    document.querySelectorAll('.space-image img').forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
    
    // Add click event to gallery images
    document.querySelectorAll('.gallery-image img').forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

function openLightbox(imageSrc, imageAlt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize lightbox when DOM is loaded
document.addEventListener('DOMContentLoaded', initLightbox);
