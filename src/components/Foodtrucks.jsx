import React from 'react';

const Foodtrucks = () => {
    return (
        <div className="animate-fade-up">
            <section className="hero-overlay" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=2070')" }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Foodtrucks : Mobilité & Liberté</h1>
                    <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>Soyez visible sur Uber Eats & Deliveroo partout où vous allez.</p>
                </div>
            </section>

            <section className="container my-10">
                <div className="grid-2">
                    <div className="card">
                        <h3>QG Fixe + GPS Dynamique</h3>
                        <p>Définissez votre point de base, mais mettez à jour votre position en temps réel.</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '1rem' }}>
                            <li>Mise à jour GPS instantanée</li>
                            <li>Zones de livraison flexibles (10km)</li>
                            <li>Notification client "Foodtruck à proximité"</li>
                        </ul>
                    </div>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#27AE60', color: 'white' }}>
                        <h3>+30% de CA via Applications Mobiles</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Foodtrucks;
