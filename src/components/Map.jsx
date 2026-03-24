import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
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

    const specialIcon = L.divIcon({
        className: '',
        html: `<div style="font-size:28px; animation:pulse-emoji 2s infinite;">🚚</div>`,
        iconSize: [28, 28]
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

    return (
        <div style={{ width: '100%', height: '500px', borderRadius: '12px', marginTop: '2rem', position: 'relative', zIndex: 1 }}>
            <style dangerouslySetInnerHTML={{__html: `@keyframes pulse-emoji { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }`}} />
            <MapContainer center={[46.5, 2.5]} zoom={6} scrollWheelZoom={false} style={{ width: '100%', height: '100%', borderRadius: '12px', zIndex: 1 }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map((c, i) => {
                    let icon = orangeIcon;
                    let extra = null;
                    if (c.type === 'truck') { icon = truckIcon; extra = <><br/><em>Spécial Foodtrucks !</em></>; }
                    else if (c.type === 'sushi') { icon = sushiIcon; extra = <><br/><em>Spécial Asian / Sushi !</em></>; }
                    else if (c.type === 'special') { icon = specialIcon; }

                    return (
                        <Marker key={i} position={[c.lat, c.lng]} icon={icon}>
                            <Popup>
                                {c.type === 'special' ? (
                                    <>
                                        <strong style={{color: '#FF6B35'}}>★ Premier partenaire Truck !</strong><br/>
                                        <strong>Biba's Come</strong><br/>
                                        La Réole (Gironde)<br/>
                                        <span style={{color: '#FF6B35', fontWeight: 600, cursor: 'pointer'}}>Voir succès →</span>
                                    </>
                                ) : (
                                    <>
                                        <strong>{c.name}</strong><br/>
                                        {c.count} partenaire{c.count > 1 ? 's' : ''} actif{c.count > 1 ? 's' : ''}
                                        {extra}
                                    </>
                                )}
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
};

export default Map;
