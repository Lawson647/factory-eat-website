// ============================================
// Factory Eat - Advanced Interactions
// Micro-interactions et effets avancés
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // Magnetic Buttons Effect
    // ============================================
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-magnetic');

    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const moveX = x * 0.3;
            const moveY = y * 0.3;

            this.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translate(0, 0)';
        });
    });

    // ============================================
    // 3D Tilt Effect on Cards
    // ============================================
    const tiltCards = document.querySelectorAll('.card, .glass-card, .pricing-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            if (window.innerWidth < 768) return; // Disable on mobile

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // ============================================
    // Smooth Input Focus Animations
    // ============================================
    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        // Create floating label effect
        const parent = input.parentElement;
        if (parent && !parent.classList.contains('input-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'input-wrapper';
            parent.insertBefore(wrapper, input);
            wrapper.appendChild(input);
        }

        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });

    // ============================================
    // Loading States for Buttons
    // ============================================
    window.setButtonLoading = function (button, loading = true) {
        if (loading) {
            button.dataset.originalText = button.innerHTML;
            button.disabled = true;
            button.innerHTML = `
                <span class="spinner"></span>
                <span>Chargement...</span>
            `;
            button.classList.add('loading');
        } else {
            button.disabled = false;
            button.innerHTML = button.dataset.originalText;
            button.classList.remove('loading');
        }
    };

    // ============================================
    // Toast Notification System
    // ============================================
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    window.showToast = function (message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        toast.innerHTML = `
            <div class="toast-icon">${icons[type] || icons.info}</div>
            <div class="toast-content">
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;

        toastContainer.appendChild(toast);

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);

        // Auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    };

    // ============================================
    // Accordion Functionality
    // ============================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const wasActive = item.classList.contains('active');

            // Close all other accordions in the same group
            const accordion = item.closest('.accordion');
            if (accordion) {
                accordion.querySelectorAll('.accordion-item').forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
            }

            // Toggle current item
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });

    // ============================================
    // Modal System
    // ============================================
    window.openModal = function (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(overlay => {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });

    // ============================================
    // Carousel/Slider
    // ============================================
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-arrow.prev');
        const nextBtn = carousel.querySelector('.carousel-arrow.next');

        let currentSlide = 0;
        const totalSlides = slides.length;

        function goToSlide(index) {
            currentSlide = (index + totalSlides) % totalSlides;
            track.style.transform = `translateX(-${currentSlide * 100}%)`;

            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Auto-play (optional)
        if (carousel.dataset.autoplay === 'true') {
            setInterval(() => goToSlide(currentSlide + 1), 5000);
        }
    });

    // ============================================
    // Lazy Loading Images
    // ============================================
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // ============================================
    // Parallax Background Elements
    // ============================================
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    function updateParallax() {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallax) || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    }

    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', FactoryEat.debounce(updateParallax, 10));
    }

    // ============================================
    // Custom Cursor (Desktop only)
    // ============================================
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'custom-cursor-follower';
        document.body.appendChild(cursorFollower);

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        // Smooth follower
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Cursor effects on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });
    }

    // ============================================
    // Particle Background Generator
    // ============================================
    window.createParticles = function (container, count = 50) {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }

        container.appendChild(particlesContainer);
    };

    // ============================================
    // Progress Bar Animation
    // ============================================
    const progressBars = document.querySelectorAll('.progress-bar');

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.dataset.progress || '0';
                setTimeout(() => {
                    bar.style.width = targetWidth + '%';
                }, 100);
                progressObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => progressObserver.observe(bar));

    // ============================================
    // Add CSS for custom cursor and loading spinner
    // ============================================
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor,
        .custom-cursor-follower {
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
        }
        
        .custom-cursor {
            width: 10px;
            height: 10px;
            background: var(--color-primary);
            border-radius: 50%;
            transform-origin: center;
            transition: transform 0.15s ease;
        }
        
        .custom-cursor.hover {
            transform: scale(2);
        }
        
        .custom-cursor-follower {
            width: 40px;
            height: 40px;
            border: 2px solid var(--color-primary);
            border-radius: 50%;
            opacity: 0.5;
        }
        
        .custom-cursor-follower.hover {
            transform: scale(1.5);
        }
        
        .spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
            margin-right: 8px;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .input-wrapper {
            position: relative;
        }
        
        .input-wrapper.focused input,
        .input-wrapper.focused textarea {
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }
        
        img[data-src] {
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        img.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Console message
    console.log('%c✨ Interactions avancées chargées', 'color: #FF6B35; font-weight: bold;');
});

// Export functions globally
window.FactoryEatInteractions = {
    showToast: window.showToast,
    openModal: window.openModal,
    closeModal: window.closeModal,
    setButtonLoading: window.setButtonLoading,
    createParticles: window.createParticles
};
