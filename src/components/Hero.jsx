import React, { useState } from 'react';

const Hero = () => {
    const [sales, setSales] = useState(30);
    const [price, setPrice] = useState(12);

    // Modèle réel : Uber Eats 30% + Factory Eat 10% = 40% de frais totaux
    // Le restaurant conserve 60% du CA brut
    const grossRevenue = sales * price * 30;
    const uberCommission = Math.round(grossRevenue * 0.30);
    const factoryFee = Math.round(grossRevenue * 0.10);
    const netRevenue = Math.round(grossRevenue * 0.60);

    return (
        <section className="hero-overlay" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070')" }}>
            <div className="container animate-fade-up">
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Factory Eat — Boostez Votre Cuisine</h1>
                <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>Uber Eats + Deliveroo multi-plateformes. <br />Commission Uber Eats : <b>30%</b> · Frais Factory Eat : <b>10%</b> · Vous gardez <b>60%</b> du CA.</p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <div className="card" style={{ maxWidth: '400px', textAlign: 'left' }}>
                        <h3>Simulateur de Revenus</h3>
                        <label style={{ display: 'block', margin: '10px 0' }}>
                            Ventes / jour: {sales}
                            <input
                                type="range" min="10" max="100" value={sales}
                                onChange={(e) => setSales(Number(e.target.value))}
                                style={{ width: '100%', accentColor: '#FF6B35' }}
                            />
                        </label>
                        <label style={{ display: 'block', margin: '10px 0' }}>
                            Ticket Moyen: {price}€
                            <input
                                type="range" min="8" max="30" value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                style={{ width: '100%', accentColor: '#FF6B35' }}
                            />
                        </label>
                        <div style={{ marginTop: '1rem', padding: '10px', background: 'rgba(255,107,53,0.15)', border: '1px solid #FF6B35', borderRadius: '8px', marginBottom: '0.5rem' }}>
                            <small>Commission Uber Eats (30%)</small>
                            <h4 style={{ color: '#FF6B35', margin: 0 }}>- {uberCommission.toLocaleString()} €</h4>
                        </div>
                        <div style={{ marginTop: '0.5rem', padding: '10px', background: 'rgba(255,107,53,0.1)', border: '1px solid #FF6B35', borderRadius: '8px', marginBottom: '0.5rem' }}>
                            <small>Frais Factory Eat (+10%)</small>
                            <h4 style={{ color: '#FF6B35', margin: 0 }}>- {factoryFee.toLocaleString()} €</h4>
                        </div>
                        <div style={{ marginTop: '0.5rem', padding: '10px', background: 'rgba(39, 174, 96, 0.2)', border: '1px solid #27AE60', borderRadius: '8px' }}>
                            <small>Revenu Net Est. (60% du CA)</small>
                            <h2 style={{ color: '#27AE60', margin: 0 }}>{netRevenue.toLocaleString()} € / mois</h2>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <button className="btn btn-primary" style={{ marginRight: '1rem' }}>Simuler Maintenant</button>
                    <button className="btn" style={{ border: '1px solid white', color: 'white' }}>Contacter l'équipe</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
