import React, { useState } from 'react';

const Hero = () => {
    const [sales, setSales] = useState(30);
    const [price, setPrice] = useState(12);

    // Modèle : Prix ajusté en ligne (+30%) pour absorber la commission
    const onlinePrice = price * 1.30;
    const grossRevenueOnline = sales * onlinePrice * 30;
    const uberCommission = Math.round(grossRevenueOnline * 0.30);
    const factoryFee = Math.round(grossRevenueOnline * 0.10);
    const netRevenue = Math.round(grossRevenueOnline - uberCommission - factoryFee);

    return (
        <section className="hero-overlay" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070')" }}>
            <div className="container animate-fade-up">
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Factory Eat — Boostez Votre Cuisine</h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.9 }}>
                    Vos prix en ligne sont <b>ajustés (+30%)</b> pour absorber les commissions.<br/>
                    Grâce à <b>Uber One</b>, vos clients ne paient pas la livraison et commandent sans friction !
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <div className="card" style={{ maxWidth: '400px', textAlign: 'left' }}>
                        <h3>Simulateur de Revenus</h3>
                        <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '1rem' }}>Basé sur le prix de votre carte en restaurant.</p>
                        <label style={{ display: 'block', margin: '10px 0' }}>
                            <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Ventes / jour:</span>
                                <strong translate="no">{sales}</strong>
                            </div>
                            <input
                                type="range" min="1" max="500" value={sales}
                                onChange={(e) => setSales(Number(e.target.value))}
                                style={{ width: '100%', accentColor: '#FF6B35' }}
                            />
                        </label>
                        <label style={{ display: 'block', margin: '10px 0' }}>
                            <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Ticket Moyen (en salle):</span>
                                <strong translate="no">{price} €</strong>
                            </div>
                            <input
                                type="range" min="5" max="50" value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                style={{ width: '100%', accentColor: '#FF6B35' }}
                            />
                        </label>
                        
                        <div style={{ marginTop: '1.5rem', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <small>CA Généré en ligne (Prix majoré)</small>
                                <strong>{Math.round(grossRevenueOnline).toLocaleString()} €</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: '#aaa' }}>
                                <small>Commission Uber (30%)</small>
                                <span>- {uberCommission.toLocaleString()} €</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa' }}>
                                <small>Frais Factory Eat (10%)</small>
                                <span>- {factoryFee.toLocaleString()} €</span>
                            </div>
                        </div>

                        <div style={{ marginTop: '1rem', padding: '15px', background: 'rgba(39, 174, 96, 0.2)', border: '1px solid #27AE60', borderRadius: '8px', textAlign: 'center' }}>
                            <small style={{ color: '#fff', fontWeight: 'bold' }}>Revenu net direct dans votre poche 🚀</small>
                            <h2 style={{ color: '#27AE60', margin: '5px 0 0 0' }}>{netRevenue.toLocaleString()} € / mois</h2>
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
