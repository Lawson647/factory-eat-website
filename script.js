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

        // ---- La Réole — Premier Partenaire (pulsing pin) ----
        const laReoleIcon = L.divIcon({
            html: '<div style="width:24px;height:24px;background:#FF6B35;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 0 rgba(255,107,53,0.6);animation:pulse-pin 2s ease infinite;"></div><style>@keyframes pulse-pin{0%,100%{box-shadow:0 0 0 0 rgba(255,107,53,0.6)}50%{box-shadow:0 0 0 12px rgba(255,107,53,0)}}</style>',
            iconSize: [24, 24],
            className: ''
        });

        L.marker([44.58, -0.03], { icon: laReoleIcon })
            .addTo(map)
            .bindPopup('<strong style="color:#FF6B35;">★ Premier partenaire !</strong><br><strong>Biba\'s Come</strong><br>Grillades & Rôtisserie<br>La Réole (Gironde)<br><a href="partenaires.html" style="color:#FF6B35;font-weight:600;">Voir la page Partenaires →</a>')
            .openPopup();
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

    // ---- Active Nav Link ----
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-menu a, .mobile-menu a').forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;
        const hrefPage = href.split('/').pop();
        if (hrefPage === currentPage || (currentPage === '' && hrefPage === 'index.html') ||
            (currentPage === 'index.html' && href.startsWith('#'))) {
            // Don't mark hash links as active on inner pages
        } else if (hrefPage === currentPage) {
            a.classList.add('active');
        }
    });

    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const wasActive = item.classList.contains('active');
            // Close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        });
    });

    // ---- Partner Filters ----
    const filterCity = document.getElementById('filter-city');
    const filterCuisine = document.getElementById('filter-cuisine');
    const partnerCards = document.querySelectorAll('.partner-card[data-city]');

    function applyFilters() {
        if (!filterCity || !partnerCards.length) return;
        const city = filterCity.value;
        const cuisine = filterCuisine?.value || 'all';
        partnerCards.forEach(card => {
            const matchCity = city === 'all' || card.dataset.city === city;
            const matchCuisine = cuisine === 'all' || card.dataset.cuisine === cuisine;
            card.style.display = (matchCity && matchCuisine) ? '' : 'none';
        });
    }

    filterCity?.addEventListener('change', applyFilters);
    filterCuisine?.addEventListener('change', applyFilters);

    // ---- Chart.js Pricing ----
    const chartCanvas = document.getElementById('pricing-chart');
    if (chartCanvas && typeof Chart !== 'undefined') {
        const ctx = chartCanvas.getContext('2d');
        const simSalesChart = document.getElementById('chart-sales');
        const simCommChart = document.getElementById('chart-commission');

        function updateChart() {
            const sales = parseFloat(simSalesChart?.value) || 30;
            const comm = parseFloat(simCommChart?.value) || 15;
            const monthlyData = [];
            for (let m = 1; m <= 12; m++) {
                // Growth: +5% per month compound
                const growth = Math.pow(1.05, m - 1);
                monthlyData.push(Math.round(sales * 12 * (comm / 100) * 22 * growth));
            }

            if (window._pricingChart) window._pricingChart.destroy();
            window._pricingChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                    datasets: [{
                        label: 'Gain mensuel (€)',
                        data: monthlyData,
                        borderColor: '#FF6B35',
                        backgroundColor: 'rgba(255,107,53,0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#FF6B35',
                        pointRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, ticks: { callback: v => v + '€' } }
                    }
                }
            });
        }

        simSalesChart?.addEventListener('input', updateChart);
        simCommChart?.addEventListener('input', updateChart);
        updateChart();
    }

    // ---- Contact Form ----
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', e => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const origText = btn.textContent;
        btn.textContent = '✓ Message envoyé !';
        btn.style.background = '#27AE60';
        btn.style.color = '#fff';
        setTimeout(() => {
            btn.textContent = origText;
            btn.style.background = '';
            btn.style.color = '';
            contactForm.reset();
        }, 3000);
    });

    // ---- Newsletter Form ----
    const nlForm = document.getElementById('newsletter-form');
    nlForm?.addEventListener('submit', e => {
        e.preventDefault();
        const btn = nlForm.querySelector('button');
        btn.textContent = '✓ Inscrit !';
        setTimeout(() => { btn.textContent = "S'inscrire"; nlForm.reset(); }, 2500);
    });

    // ============================================
    //  PROMO BANNER DISMISS
    // ============================================
    const promoBanner = document.getElementById('promo-banner');
    const bannerClose = document.getElementById('banner-close');
    if (promoBanner) {
        if (sessionStorage.getItem('banner-dismissed') === 'true') {
            promoBanner.classList.add('hidden');
        } else {
            document.body.classList.add('has-banner');
        }
        bannerClose?.addEventListener('click', () => {
            promoBanner.classList.add('hidden');
            document.body.classList.remove('has-banner');
            sessionStorage.setItem('banner-dismissed', 'true');
        });
    }

    // ============================================
    //  INLINE CALCULATOR (Homepage)
    // ============================================
    const homeCalcSales = document.getElementById('home-calc-sales');
    const homeCalcPrice = document.getElementById('home-calc-price');
    const homeCalcSalesVal = document.getElementById('home-calc-sales-val');
    const homeCalcPriceVal = document.getElementById('home-calc-price-val');
    const homeSaving = document.getElementById('home-saving');

    function updateHomeCalc() {
        if (!homeCalcSales || !homeCalcPrice) return;
        const sales = parseFloat(homeCalcSales.value);
        const price = parseFloat(homeCalcPrice.value);
        if (homeCalcSalesVal) homeCalcSalesVal.textContent = sales;
        if (homeCalcPriceVal) homeCalcPriceVal.textContent = price + '€';
        // Saving = sales * price * 30 days * (30% - 25%) = sales * price * 30 * 0.05
        const saving = Math.round(sales * price * 30 * 0.05);
        if (homeSaving) homeSaving.textContent = saving + '€';
    }

    homeCalcSales?.addEventListener('input', updateHomeCalc);
    homeCalcPrice?.addEventListener('input', updateHomeCalc);
    updateHomeCalc();

    // ============================================
    //  INLINE CALCULATOR (Offre Restaurants page)
    // ============================================
    const uberCalcSales = document.getElementById('sim-uber-sales');
    const uberCalcPrice = document.getElementById('sim-uber-price');
    const uberCalcSalesVal = document.getElementById('sim-uber-sales-val');
    const uberCalcPriceVal = document.getElementById('sim-uber-price-val');
    const uberSaving = document.getElementById('uber-saving');

    function updateUberCalc() {
        if (!uberCalcSales || !uberCalcPrice) return;
        const sales = parseFloat(uberCalcSales.value);
        const price = parseFloat(uberCalcPrice.value);
        if (uberCalcSalesVal) uberCalcSalesVal.textContent = sales;
        if (uberCalcPriceVal) uberCalcPriceVal.textContent = price + '€';
        const saving = Math.round(sales * price * 30 * 0.05);
        if (uberSaving) uberSaving.textContent = saving + '€';
    }

    uberCalcSales?.addEventListener('input', updateUberCalc);
    uberCalcPrice?.addEventListener('input', updateUberCalc);
    updateUberCalc();

    // Uber simulator form
    const uberSimForm = document.getElementById('uber-sim-form');
    uberSimForm?.addEventListener('submit', e => {
        e.preventDefault();
        const ville = document.getElementById('sim-ville')?.value || 'Votre ville';
        const ventes = parseInt(document.getElementById('sim-ventes')?.value) || 30;
        const saving = Math.round(ventes * 12 * 30 * 0.05);
        const btn = uberSimForm.querySelector('button');
        btn.innerHTML = `✅ ${ville} : ~${saving}€/mois d'économie !`;
        btn.style.background = '#27AE60';
        setTimeout(() => {
            btn.innerHTML = 'Recevoir mon estimation personnalisée <span class="btn-arrow">→</span>';
            btn.style.background = '';
        }, 4000);
    });

    // Contact Uber form
    const contactUberForm = document.getElementById('contact-uber-form');
    contactUberForm?.addEventListener('submit', e => {
        e.preventDefault();
        const btn = contactUberForm.querySelector('button');
        btn.innerHTML = '✅ Demande envoyée ! On vous recontacte sous 24h.';
        btn.style.background = '#27AE60';
        setTimeout(() => {
            btn.innerHTML = 'Je veux 25% Uber Eats <span class="btn-arrow">→</span>';
            btn.style.background = '';
            contactUberForm.reset();
        }, 4000);
    });

    // ============================================
    //  COMPARISON CHART (Tarifs page - Chart.js)
    // ============================================
    const compChartEl = document.getElementById('comparison-chart');
    if (compChartEl && typeof Chart !== 'undefined') {
        const dailySales = 30;
        const avgPrice = 12;
        const monthlyRevenue = dailySales * avgPrice * 30;

        // Solo 30%: net revenue after commission
        const soloData = [];
        const factoryData = [];
        const labels = ['Mois 1', 'Mois 2', 'Mois 3', 'Mois 4', 'Mois 5', 'Mois 6'];

        for (let i = 1; i <= 6; i++) {
            const growth = 1 + (i - 1) * 0.05; // 5% growth per month
            const soloNet = Math.round(monthlyRevenue * growth * 0.70);
            const factoryNet = Math.round(monthlyRevenue * growth * 0.75 * 1.10); // 25% + volume boost
            soloData.push(soloNet);
            factoryData.push(factoryNet);
        }

        new Chart(compChartEl, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Solo Uber 30%',
                        data: soloData,
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.08)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 5,
                        pointBackgroundColor: '#e74c3c',
                        borderWidth: 3
                    },
                    {
                        label: 'Factory Eat 25%',
                        data: factoryData,
                        borderColor: '#27AE60',
                        backgroundColor: 'rgba(39, 174, 96, 0.08)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 5,
                        pointBackgroundColor: '#27AE60',
                        borderWidth: 3
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top', labels: { font: { family: 'Inter', weight: '600' } } },
                    tooltip: {
                        callbacks: {
                            label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y.toLocaleString('fr-FR') + '€'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: v => v.toLocaleString('fr-FR') + '€',
                            font: { family: 'Inter' }
                        },
                        grid: { color: 'rgba(0,0,0,0.05)' }
                    },
                    x: {
                        ticks: { font: { family: 'Inter' } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

});
