/* ============================================
   Factory Eat — One-Page JavaScript
   Vanilla JS: scroll, carousel, slider, burger
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const offset = 70;
                const y = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
            // Close mobile menu
            mobileMenu?.classList.remove('active');
            burgerBtn?.classList.remove('active');
        });
    });

    // ---- Sticky Navbar ----
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    }, { passive: true });

    // ---- Burger menu ----
    const burgerBtn = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerBtn?.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        mobileMenu?.classList.toggle('active');
    });

    // Close on outside click
    document.addEventListener('click', e => {
        if (mobileMenu?.classList.contains('active') &&
            !mobileMenu.contains(e.target) &&
            !burgerBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            burgerBtn.classList.remove('active');
        }
    });

    // ---- Fade-in on scroll (IntersectionObserver) ----
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-group');

    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));
    }

    // ---- Simulation Slider ----
    const slider = document.getElementById('sim-slider');
    const sliderValue = document.getElementById('sim-slider-value');
    const dailyRevenue = document.getElementById('sim-daily');
    const monthlyRevenue = document.getElementById('sim-monthly');

    function updateSimulation() {
        if (!slider) return;
        const qty = parseInt(slider.value, 10);
        const margin = 2.30;
        const workDays = 22;

        sliderValue.textContent = qty;
        const daily = (qty * margin).toFixed(0);
        const monthly = (qty * margin * workDays).toFixed(0);

        dailyRevenue.textContent = daily + '€/j';
        monthlyRevenue.textContent = '+' + monthly + '€/mois';
    }

    slider?.addEventListener('input', updateSimulation);
    updateSimulation();

    // ---- Testimonials Carousel ----
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    let currentSlide = 0;
    let autoPlayTimer;

    function goToSlide(index) {
        if (!track || slides.length === 0) return;
        currentSlide = ((index % slides.length) + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    nextBtn?.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn?.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetAutoPlay();
        });
    });

    function startAutoPlay() {
        autoPlayTimer = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }

    if (slides.length > 0) {
        startAutoPlay();
    }

    // ---- Animated Counter (for stats) ----
    const counters = document.querySelectorAll('[data-count]');

    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    const suffix = el.dataset.suffix || '';
                    const prefix = el.dataset.prefix || '';
                    const duration = 2000;
                    const start = Date.now();

                    function animate() {
                        const elapsed = Date.now() - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(eased * target);
                        el.textContent = prefix + current + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    }

                    animate();
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(el => counterObserver.observe(el));
    }

});
