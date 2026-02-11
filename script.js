/* ============================================
   Factory Eat — Premium V2 JavaScript
   Hero carousel, Leaflet map, particles, dark mode,
   simulation calculator, testimonials, form
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Smooth scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(link.getAttribute('href'));
            if (t) {
                window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
            }
            mobileMenu?.classList.remove('active');
            burgerBtn?.classList.remove('active');
        });
    });

    // ---- Sticky Navbar ----
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ---- Burger ----
    const burgerBtn = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    burgerBtn?.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        mobileMenu?.classList.toggle('active');
    });
    document.addEventListener('click', e => {
        if (mobileMenu?.classList.contains('active') && !mobileMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            burgerBtn.classList.remove('active');
        }
    });

    // ---- Dark Mode ----
    const darkBtn = document.getElementById('dark-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

    darkBtn?.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        darkBtn.textContent = next === 'dark' ? '☀️' : '🌙';
    });

    // ---- Hero Carousel ----
    const heroSlides = document.querySelectorAll('.hero-slide');
    let heroIndex = 0;

    function nextHeroSlide() {
        heroSlides[heroIndex]?.classList.remove('active');
        heroIndex = (heroIndex + 1) % heroSlides.length;
        heroSlides[heroIndex]?.classList.add('active');
    }

    if (heroSlides.length > 0) {
        setInterval(nextHeroSlide, 5000);
    }

    // ---- Particles Canvas ----
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const PARTICLE_COUNT = 30;

        function resizeCanvas() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 2 + 1,
                    dx: (Math.random() - 0.5) * 0.5,
                    dy: (Math.random() - 0.5) * 0.5,
                    alpha: Math.random() * 0.3 + 0.1
                });
            }
        }

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,107,53,${p.alpha})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            requestAnimationFrame(drawParticles);
        }

        resizeCanvas();
        createParticles();
        drawParticles();
        window.addEventListener('resize', () => { resizeCanvas(); createParticles(); });
    }

    // ---- Fade-up on scroll ----
    const fadeEls = document.querySelectorAll('.fade-up, .fade-up-group');
    if (fadeEls.length > 0) {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
        fadeEls.forEach(el => obs.observe(el));
    }

    // ---- Animated Counters ----
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length > 0) {
        const cobs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    const suffix = el.dataset.suffix || '';
                    const prefix = el.dataset.prefix || '';
                    const start = Date.now();
                    const duration = 2200;
                    (function animate() {
                        const progress = Math.min((Date.now() - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = prefix + Math.round(eased * target) + suffix;
                        if (progress < 1) requestAnimationFrame(animate);
                    })();
                    cobs.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(el => cobs.observe(el));
    }

    // ---- Leaflet Map ----
    const mapEl = document.getElementById('france-map');
    if (mapEl && typeof L !== 'undefined') {
        const map = L.map('france-map', {
            center: [46.5, 2.5],
            zoom: 6,
            scrollWheelZoom: false,
            zoomControl: true
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap',
            maxZoom: 12
        }).addTo(map);

        const orangeIcon = L.divIcon({
            html: '<div style="width:18px;height:18px;background:#FF6B35;border-radius:50%;border:3px solid #fff;box-shadow:0 0 8px rgba(255,107,53,0.5);"></div>',
            iconSize: [18, 18],
            className: ''
        });

        const cities = [
            { lat: 48.8566, lng: 2.3522, name: 'Paris', count: 15 },
            { lat: 45.764, lng: 4.8357, name: 'Lyon', count: 8 },
            { lat: 43.2965, lng: 5.3698, name: 'Marseille', count: 12 },
            { lat: 44.8378, lng: -0.5792, name: 'Bordeaux', count: 6 },
            { lat: 43.6047, lng: 1.4442, name: 'Toulouse', count: 9 },
            { lat: 50.6292, lng: 3.0573, name: 'Lille', count: 5 },
            { lat: 43.7102, lng: 7.2620, name: 'Nice', count: 4 },
            { lat: 47.2184, lng: -1.5536, name: 'Nantes', count: 7 },
            { lat: 48.5734, lng: 7.7521, name: 'Strasbourg', count: 3 },
            { lat: 48.1173, lng: -1.6778, name: 'Rennes', count: 4 },
            { lat: 43.1242, lng: -0.0014, name: 'Tarbes', count: 2 },
            { lat: 43.2333, lng: 0.0833, name: 'Aureilhan', count: 1 }
        ];

        cities.forEach(c => {
            L.marker([c.lat, c.lng], { icon: orangeIcon })
                .addTo(map)
                .bindPopup(`<strong>${c.name}</strong><br>${c.count} partenaire${c.count > 1 ? 's' : ''} actif${c.count > 1 ? 's' : ''}<br><em>Contactez pour rejoindre !</em>`);
        });
    }

    // ---- Simulation Calculator ----
    const simSales = document.getElementById('sim-sales');
    const simPrice = document.getElementById('sim-price');
    const simCommission = document.getElementById('sim-commission');
    const simOutput = document.getElementById('sim-output');
    const simDetail = document.getElementById('sim-detail');

    function updateSim() {
        if (!simSales || !simPrice || !simCommission) return;
        const sales = parseFloat(simSales.value) || 0;
        const price = parseFloat(simPrice.value) || 0;
        const commission = parseFloat(simCommission.value) || 0;
        const daily = sales * price * (commission / 100);
        const monthly = daily * 22;

        if (simOutput) simOutput.textContent = '+' + Math.round(monthly).toLocaleString('fr-FR') + '€/mois';
        if (simDetail) simDetail.textContent = `${sales} ventes × ${price}€ × ${commission}% × 22 jours`;
    }

    [simSales, simPrice, simCommission].forEach(el => el?.addEventListener('input', updateSim));
    updateSim();

    // ---- Testimonials Carousel ----
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    let currentSlide = 0;
    let autoTimer;

    function goToSlide(i) {
        if (!track || !slides.length) return;
        currentSlide = ((i % slides.length) + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((d, j) => d.classList.toggle('active', j === currentSlide));
    }

    nextBtn?.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAuto(); });
    prevBtn?.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAuto(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { goToSlide(i); resetAuto(); }));

    function startAuto() { autoTimer = setInterval(() => goToSlide(currentSlide + 1), 5500); }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }
    if (slides.length > 0) startAuto();

    // ---- Form submit (placeholder) ----
    const ctaForm = document.getElementById('cta-form');
    ctaForm?.addEventListener('submit', e => {
        e.preventDefault();
        const btn = ctaForm.querySelector('button');
        const origText = btn.textContent;
        btn.textContent = '✓ Message envoyé !';
        btn.style.background = '#27AE60';
        btn.style.color = '#fff';
        setTimeout(() => {
            btn.textContent = origText;
            btn.style.background = '';
            btn.style.color = '';
            ctaForm.reset();
        }, 3000);
    });

});
