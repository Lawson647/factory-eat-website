// ============================================
// Factory Eat - Google Maps Integration
// Interactive Partners Map
// ============================================

// Restaurant partners data
const restaurantPartners = [
    {
        id: 1,
        name: 'Le Gourmet Parisien',
        city: 'paris',
        cityDisplay: 'Paris',
        position: { lat: 48.8566, lng: 2.3522 },
        stats: '+45% ventes Uber Eats',
        type: 'Gastronomique'
    },
    {
        id: 2,
        name: 'Pizzeria Bella Lyon',
        city: 'lyon',
        cityDisplay: 'Lyon',
        position: { lat: 45.7640, lng: 4.8357 },
        stats: '+52% ventes Uber Eats',
        type: 'Pizzeria'
    },
    {
        id: 3,
        name: 'Burger House Marseille',
        city: 'marseille',
        cityDisplay: 'Marseille',
        position: { lat: 43.2965, lng: 5.3698 },
        stats: '+38% ventes Uber Eats',
        type: 'Burgers'
    },
    {
        id: 4,
        name: 'Sushi Master Lille',
        city: 'lille',
        cityDisplay: 'Lille',
        position: { lat: 50.6292, lng: 3.0573 },
        stats: '+41% ventes Uber Eats',
        type: 'Japonais'
    },
    {
        id: 5,
        name: 'Brasserie du Sud-Ouest',
        city: 'tarbes',
        cityDisplay: 'Tarbes',
        position: { lat: 43.2333, lng: 0.0667 },
        stats: '+35% ventes Uber Eats',
        type: 'Brasserie'
    },
    {
        id: 6,
        name: 'Cuisine du Monde',
        city: 'bordeaux',
        cityDisplay: 'Bordeaux',
        position: { lat: 44.8378, lng: -0.5792 },
        stats: '+48% ventes Uber Eats',
        type: 'International'
    },
    {
        id: 7,
        name: 'La Table Toulousaine',
        city: 'toulouse',
        cityDisplay: 'Toulouse',
        position: { lat: 43.6047, lng: 1.4442 },
        stats: '+43% ventes Uber Eats',
        type: 'Traditionnel'
    },
    {
        id: 8,
        name: 'Le Bistrot Nantais',
        city: 'nantes',
        cityDisplay: 'Nantes',
        position: { lat: 47.2184, lng: -1.5536 },
        stats: '+39% ventes Uber Eats',
        type: 'Bistrot'
    },
    {
        id: 9,
        name: 'Winstub Strasbourg',
        city: 'strasbourg',
        cityDisplay: 'Strasbourg',
        position: { lat: 48.5734, lng: 7.7521 },
        stats: '+36% ventes Uber Eats',
        type: 'Alsacien'
    },
    {
        id: 10,
        name: 'Saveurs de Nice',
        city: 'nice',
        cityDisplay: 'Nice',
        position: { lat: 43.7102, lng: 7.2620 },
        stats: '+44% ventes Uber Eats',
        type: 'Méditerranéen'
    },
    {
        id: 11,
        name: 'Crêperie Bretonne Paris',
        city: 'paris',
        cityDisplay: 'Paris 11e',
        position: { lat: 48.8584, lng: 2.3761 },
        stats: '+33% ventes Uber Eats',
        type: 'Crêperie'
    },
    {
        id: 12,
        name: 'Ramen House Lyon',
        city: 'lyon',
        cityDisplay: 'Lyon Part-Dieu',
        position: { lat: 45.7603, lng: 4.8592 },
        stats: '+50% ventes Uber Eats',
        type: 'Japonais'
    }
];

let map;
let markers = [];
let infoWindows = [];

// Initialize Google Map
function initMap() {
    // Center of France
    const franceCenter = { lat: 46.603354, lng: 1.888334 };

    // Create map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: franceCenter,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
    });

    // Add markers for all partners
    restaurantPartners.forEach(partner => {
        addMarker(partner);
    });

    // Setup city filter
    setupCityFilter();

    // Update visible count
    updateVisibleCount();
}

// Add marker to map
function addMarker(partner) {
    const marker = new google.maps.Marker({
        position: partner.position,
        map: map,
        title: partner.name,
        animation: google.maps.Animation.DROP,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#FF6B35',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2
        }
    });

    // Create info window content
    const infoWindowContent = `
    <div class="map-info-window">
      <h3>${partner.name}</h3>
      <p class="location">📍 ${partner.cityDisplay}</p>
      <div class="stat">
        <span class="stat-value">${partner.stats}</span>
        <span class="stat-label">Résultats Factory Eat</span>
      </div>
      <p style="margin: 10px 0 0 0; color: #6C757D; font-size: 14px;">
        Type: ${partner.type}
      </p>
      <a href="contact.html" class="contact-link">Devenir partenaire →</a>
    </div>
  `;

    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });

    // Add click listener
    marker.addListener('click', () => {
        // Close all other info windows
        infoWindows.forEach(iw => iw.close());

        // Open this info window
        infoWindow.open(map, marker);

        // Track map interaction
        if (typeof gtag !== 'undefined') {
            gtag('event', 'map_marker_click', {
                'event_category': 'engagement',
                'event_label': partner.name,
                'value': partner.city
            });
        }
    });

    // Store marker and info window with city reference
    marker.city = partner.city;
    markers.push(marker);
    infoWindows.push(infoWindow);
}

// Setup city filter
function setupCityFilter() {
    const cityFilter = document.getElementById('city-filter');

    if (!cityFilter) return;

    cityFilter.addEventListener('change', function () {
        const selectedCity = this.value;

        markers.forEach(marker => {
            if (selectedCity === 'all' || marker.city === selectedCity) {
                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            }
        });

        // Close all info windows
        infoWindows.forEach(iw => iw.close());

        // Update visible count
        updateVisibleCount();

        // Adjust map bounds to show visible markers
        if (selectedCity !== 'all') {
            const visibleMarkers = markers.filter(m => m.getVisible());
            if (visibleMarkers.length > 0) {
                const bounds = new google.maps.LatLngBounds();
                visibleMarkers.forEach(marker => {
                    bounds.extend(marker.getPosition());
                });
                map.fitBounds(bounds);

                // Adjust zoom if only one marker
                if (visibleMarkers.length === 1) {
                    map.setZoom(12);
                }
            }
        } else {
            // Reset to France view
            map.setCenter({ lat: 46.603354, lng: 1.888334 });
            map.setZoom(6);
        }

        // Track filter usage
        if (typeof gtag !== 'undefined') {
            gtag('event', 'city_filter', {
                'event_category': 'engagement',
                'event_label': selectedCity,
                'value': 1
            });
        }
    });
}

// Update visible count
function updateVisibleCount() {
    const visibleCount = markers.filter(m => m.getVisible()).length;
    const countElement = document.getElementById('visible-count');

    if (countElement) {
        countElement.textContent = visibleCount;
    }
}

// Make initMap available globally for Google Maps callback
window.initMap = initMap;
