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

        // Icons
        const orangeIcon = L.divIcon({
            html: '<div style="width:18px;height:18px;background:#FF6B35;border-radius:50%;border:3px solid #fff;box-shadow:0 0 8px rgba(255,107,53,0.5);"></div>',
            iconSize: [18, 18],
            className: ''
        });

        const truckIcon = L.divIcon({
            html: '<div style="font-size:24px; text-shadow:0 2px 5px rgba(0,0,0,0.2);">🚚</div>',
            iconSize: [24, 24],
            className: ''
        });

        const sushiIcon = L.divIcon({
            html: '<div style="font-size:24px; text-shadow:0 2px 5px rgba(0,0,0,0.2);">🍣</div>',
            iconSize: [24, 24],
            className: ''
        });

        const cities = [
            { lat: 48.8566, lng: 2.3522, name: 'Paris', count: 15, type: 'sushi' },
            { lat: 45.764, lng: 4.8357, name: 'Lyon', count: 8, type: 'standard' },
            { lat: 43.2965, lng: 5.3698, name: 'Marseille', count: 12, type: 'truck' },
            { lat: 44.8378, lng: -0.5792, name: 'Bordeaux', count: 6, type: 'standard' },
            { lat: 43.6047, lng: 1.4442, name: 'Toulouse', count: 9, type: 'standard' },
            { lat: 50.6292, lng: 3.0573, name: 'Lille', count: 5, type: 'standard' },
            { lat: 43.7102, lng: 7.2620, name: 'Nice', count: 4, type: 'sushi' },
            { lat: 47.2184, lng: -1.5536, name: 'Nantes', count: 7, type: 'truck' },
            { lat: 48.5734, lng: 7.7521, name: 'Strasbourg', count: 3, type: 'standard' },
            { lat: 48.1173, lng: -1.6778, name: 'Rennes', count: 4, type: 'standard' },
            { lat: 43.1242, lng: -0.0014, name: 'Tarbes', count: 2, type: 'standard' },
            { lat: 43.2333, lng: 0.0833, name: 'Aureilhan', count: 1, type: 'standard' },
            { lat: 44.58, lng: -0.03, name: 'La Réole', count: 1, type: 'special' }
        ];

        cities.forEach(c => {
            let icon = orangeIcon;
            let popupHtml = `<strong>${c.name}</strong><br>${c.count} partenaire${c.count > 1 ? 's' : ''} actif${c.count > 1 ? 's' : ''}`;

            if (c.type === 'truck') {
                icon = truckIcon;
                popupHtml += `<br><em>Spécial Foodtrucks !</em>`;
            } else if (c.type === 'sushi') {
                icon = sushiIcon;
                popupHtml += `<br><em>Spécial Asian / Sushi !</em>`;
            } else if (c.type === 'special') { // La Réole
                icon = L.divIcon({
                    html: '<div style="font-size:28px; animation:pulse-emoji 2s infinite;">🚚</div><style>@keyframes pulse-emoji{0%,100%{transform:scale(1);}50%{transform:scale(1.2);}}</style>',
                    iconSize: [28, 28],
                    className: ''
                });
                popupHtml = '<strong style="color:#FF6B35;">★ Premier partenaire Truck !</strong><br><strong>Biba\'s Come</strong><br>La Réole (Gironde)<br><a href="partenaires.html" style="color:#FF6B35;font-weight:600;">Voir succès →</a>';
            }

            const marker = L.marker([c.lat, c.lng], { icon: icon }).addTo(map);
            marker.bindPopup(popupHtml);
            if (c.type === 'special') marker.openPopup();
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

        // Logic: 
        // Solo = Sales * Price * 30 * 0.70 (30% comm)
        // Multi = (Sales * 2) * Price * 30 * 0.75 (Volume x2, 25% comm)

        const revenue = sales * price * 30;
        const soloNet = Math.round(revenue * 0.70);
        const multiNet = Math.round((revenue * 2) * 0.75); // Volume x2
        const saving = multiNet - soloNet;

        // Update UI if elements exist (custom logic for your specific HTML structure)
        const soloEl = document.querySelector('.calc-res-row:first-child strong');
        const multiEl = document.querySelector('.calc-res-row.highlight strong');

        if (soloEl) soloEl.textContent = soloNet.toLocaleString('fr-FR') + ' €';
        if (multiEl) multiEl.textContent = multiNet.toLocaleString('fr-FR') + ' €';
        if (homeSaving) homeSaving.textContent = saving.toLocaleString('fr-FR') + '€';
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
    const uberSimForm = document.getElementById('uber-sim-form'); // Kept for legacy if present

    // Multi Simulator Form (offre-restaurants.html)
    const multiSimForm = document.getElementById('multi-sim-form');
    multiSimForm?.addEventListener('submit', e => {
        e.preventDefault();
        const ville = document.getElementById('sim-ville')?.value || 'Votre ville';
        const ventes = parseInt(document.getElementById('sim-ventes')?.value) || 30;

        // Visual feedback
        const btn = multiSimForm.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = `✅ Analyse en cours pour ${ville}...`;
        btn.style.background = '#27AE60';

        setTimeout(() => {
            alert(`Potentiel à ${ville} : \n\n🚀 Volume estimé : +${Math.round(ventes * 0.8)} commandes/semaine\n💰 Gain potentiel : ~${Math.round(ventes * 15 * 30 * 0.2)}€/mois\n\nUn expert va vous contacter pour valider ce potentiel.`);
            btn.innerHTML = originalText;
            btn.style.background = '';
            multiSimForm.reset();
        }, 1500);
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
    // ============================================
    //  MULTI-CHART (Offre Restaurants)
    // ============================================
    const multiChartEl = document.getElementById('multi-chart');
    if (multiChartEl && typeof Chart !== 'undefined') {
        const labels = ['Mois 1', 'Mois 2', 'Mois 3', 'Mois 4', 'Mois 5', 'Mois 6'];

        // Scenario: 
        // Solo: Growth 5% per month. 30% comm.
        // Multi: Growth 5% M1-M2. Jump 50% M3 (Volume). Comm drops to 25% M4.

        const baseRev = 5000; // Base revenue
        const soloData = labels.map((_, i) => Math.round(baseRev * (1 + i * 0.05) * 0.70));

        const multiData = labels.map((_, i) => {
            let volume = 1 + i * 0.05;
            let comm = 0.70; // 30%

            if (i >= 2) volume *= 1.5; // +50% volume from M3
            if (i >= 3) comm = 0.75;   // 25% comm from M4 (Nego)

            return Math.round(baseRev * volume * comm);
        });

        new Chart(multiChartEl, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Solo (Uber seul)',
                        data: soloData,
                        borderColor: '#95a5a6',
                        borderDash: [5, 5],
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: 'Factory Multi-Plateformes',
                        data: multiData,
                        borderColor: '#FF6B35',
                        backgroundColor: 'rgba(255, 107, 53, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' },
                    tooltip: { callbacks: { label: c => c.formattedValue + ' €' } }
                }
            }
        });
    }

    // ============================================
    //  COMPARISON CHART (Tarifs page - Chart.js)
    // ============================================
    const compChartEl = document.getElementById('comparison-chart');
    if (compChartEl && typeof Chart !== 'undefined') {
        const labels = ['Mois 1', 'Mois 2', 'Mois 3', 'Mois 4', 'Mois 5', 'Mois 6'];
        // Comparison: Standard vs Multi Strategy

        const soloData = [2100, 2150, 2200, 2250, 2300, 2350]; // ~Flat growth
        const factoryData = [2100, 2200, 3100, 3500, 3600, 3700]; // Jump M3 + Nego M4

        new Chart(compChartEl, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Solo (1 plateforme)',
                        data: soloData,
                        backgroundColor: '#bdc3c7',
                        borderRadius: 4
                    },
                    {
                        label: 'Factory Eat (Multi + Négo)',
                        data: factoryData,
                        backgroundColor: '#00CCBC', // Deliveroo Teal inspired
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    // ============================================
    //  FOODTRUCK SIMULATOR (foodtrucks.html)
    // ============================================
    const truckSimForm = document.getElementById('truck-sim-form');
    truckSimForm?.addEventListener('submit', e => {
        e.preventDefault();
        const days = parseInt(document.getElementById('sim-days')?.value) || 5;
        const sales = parseInt(document.getElementById('sim-spot-sales')?.value) || 30;
        const price = parseInt(document.getElementById('sim-truck-price')?.value) || 13;

        // Logic: Avg monthly = Sales * Price * Days/week * 4.33 weeks
        const monthlyCA = Math.round(sales * price * days * 4.33);
        const resultDiv = document.getElementById('truck-sim-result');

        if (resultDiv) {
            resultDiv.style.opacity = '0';
            setTimeout(() => {
                resultDiv.innerHTML = `CA Est. : <span style="font-size:1.4rem">${monthlyCA.toLocaleString()}€</span> / mois<br><span style="font-size:0.9rem;color:#27AE60">✅ Négo Commission 25% possible dès Mois 3</span>`;
                resultDiv.style.opacity = '1';
                resultDiv.style.transition = 'opacity 0.5s ease';
            }, 200);
        }
    });

});
