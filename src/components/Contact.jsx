import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
    const position = [46.603354, 1.888334]; // Center of France

    return (
        <div className="container my-10 animate-fade-up">
            <h1 className="text-center">Contactez-nous</h1>
            <div className="grid-2">
                <div className="card">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>Nom du Restaurant / Foodtruck</label>
                            <input type="text" style={{ width: '100%', padding: '0.8rem', background: '#333', border: '1px solid #444', color: 'white', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>Email</label>
                            <input type="email" style={{ width: '100%', padding: '0.8rem', background: '#333', border: '1px solid #444', color: 'white', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>Téléphone</label>
                            <input type="tel" style={{ width: '100%', padding: '0.8rem', background: '#333', border: '1px solid #444', color: 'white', borderRadius: '4px' }} />
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Envoyer</button>
                    </form>
                </div>
                <div style={{ height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
                    <MapContainer center={position} zoom={6} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[48.8566, 2.3522]}>
                            <Popup>Factory Eat Paris</Popup>
                        </Marker>
                        <Marker position={[45.7640, 4.8357]}>
                            <Popup>Sushi Lyon</Popup>
                        </Marker>
                        <Marker position={[43.6047, 1.4442]}>
                            <Popup>Asian Truck Toulouse</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Contact;
