// Professional AI Agent Landing Page JavaScript

// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.init();
    }

    init() {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
        
        // Add click event listener
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    setTheme(theme) {
        if (theme === 'dark') {
            this.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            this.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleTheme() {
        const isDark = this.body.classList.contains('dark-mode');
        this.setTheme(isDark ? 'light' : 'dark');
    }
}

// Mobile Menu Functionality
class MobileMenu {
    constructor() {
        this.menuBtn = document.getElementById('mobileMenuBtn');
        this.mobileNav = document.getElementById('mobileNav');
        this.mobileLinks = document.querySelectorAll('.nav-mobile-link');
        this.init();
    }

    init() {
        // Toggle menu on button click
        this.menuBtn.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close menu when clicking on links
        this.mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.menuBtn.contains(e.target) && !this.mobileNav.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isOpen = this.mobileNav.classList.contains('active');
        if (isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.mobileNav.classList.add('active');
        this.menuBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeMenu() {
        this.mobileNav.classList.remove('active');
        this.menuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Smooth Scrolling for Anchor Links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Floating Animation Enhancement
class FloatingAnimations {
    constructor() {
        this.floatingElements = document.querySelectorAll('.floating-icon');
        this.init();
    }

    init() {
        // Add mouse movement parallax effect to floating icons
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 100;
            mouseY = (e.clientY / window.innerHeight) * 100;
            
            this.updateFloatingElements(mouseX, mouseY);
        });
    }

    updateFloatingElements(mouseX, mouseY) {
        this.floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 50) * speed * 0.02;
            const y = (mouseY - 50) * speed * 0.02;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
}

// Intersection Observer for Animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        // Create intersection observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, this.observerOptions);

        // Observe elements
        this.observeElements();
    }

    observeElements() {
        const elementsToAnimate = [
            '.feature-card',
            '.testimonial-card',
            '.stat-item',
            '.hero-image',
            '.section-header'
        ];

        elementsToAnimate.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.classList.add('animate-ready');
                this.observer.observe(el);
            });
        });
    }
}

// Form Handling (for future forms)
class FormHandler {
    constructor() {
        this.init();
    }

    init() {
        // Handle CTA buttons
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Prevent default if it's a button, not a link
                if (btn.tagName === 'BUTTON') {
                    e.preventDefault();
                    this.handleCTAClick(btn);
                }
            });
        });
    }

    handleCTAClick(button) {
        // Add loading state
        const originalText = button.innerHTML;
        button.innerHTML = 'Loading...';
        button.disabled = true;

        // Simulate API call
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            
            // Show success message (you can customize this)
            this.showNotification('Thanks for your interest! We\'ll be in touch soon.', 'success');
        }, 2000);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 1rem;
            box-shadow: var(--shadow-card);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Handle close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.hideNotification(notification);
        });

        // Auto hide after 5 seconds
        setTimeout(() => {
            this.hideNotification(notification);
        }, 5000);
    }

    hideNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        this.lazyLoadImages();
        
        // Optimize scroll events
        this.optimizeScrollEvents();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    optimizeScrollEvents() {
        let ticking = false;

        function updateScrollElements() {
            // Update header transparency based on scroll
            const header = document.querySelector('.header');
            const scrolled = window.scrollY > 50;
            
            if (scrolled) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollElements);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core functionality
    new ThemeManager();
    new MobileMenu();
    new SmoothScroll();
    new FloatingAnimations();
    new ScrollAnimations();
    new FormHandler();
    new PerformanceOptimizer();

    console.log('🚀 AI Agent Landing Page initialized successfully!');
});

// Add CSS for scroll animations
const animationStyles = `
    .animate-ready {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .header.scrolled {
        backdrop-filter: blur(20px);
        background: hsl(0, 0%, 100%, 0.95);
    }

    body.dark-mode .header.scrolled {
        background: hsl(0, 0%, 0%, 0.8);
    }

    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .notification-close {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: var(--muted-foreground);
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .notification-close:hover {
        color: var(--foreground);
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);