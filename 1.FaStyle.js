document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // Gallery Image Selection
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            galleryItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Here you would update the main character image
            // based on which gallery item was clicked
            // const newImageSrc = this.querySelector('img').src;
            // document.querySelector('.main-character-image').src = newImageSrc;
        });
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mainNav.classList.remove('active');
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.padding = '20px 0';
        }
    });
    
    // Character Stats Animation
    const statBars = document.querySelectorAll('.bar-fill');
    
    function animateStats() {
        statBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
                bar.style.transition = 'width 1s ease';
            }, 100);
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('character-stats')) {
                    animateStats();
                }
                
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.character-stats, .ability-card, .relation-card').forEach(el => {
        observer.observe(el);
    });
});