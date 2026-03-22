import React from 'react';

const OffreRestos = () => {
    return (
        <div className="animate-fade-up">
            <section className="hero-overlay" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')" }}>
                <div className="container">
                    <h1>Offre Restaurants : Boostez votre CA</h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Multi-plateformes Uber Eats + Deliveroo. <br /> Uber Eats prend <b>30%</b> · Factory Eat ajoute <b>+10%</b> de frais de service · Le restaurant conserve <b>90%</b> de notre marge.</p>
                    <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Démarrer le Boost</button>
                </div>
            </section>

            <section className="container my-10">
                <h2 className="text-center">Tableau Comparatif</h2>
                <div className="card" style={{ overflowX: 'auto', marginTop: '2rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
                        <thead>
                            <tr style={{ background: '#333' }}>
                                <th style={{ padding: '1rem' }}>Critère</th>
                                <th style={{ padding: '1rem' }}>Solo (Vous seul)</th>
                                <th style={{ padding: '1rem', color: '#FF6B35' }}>Factory Eat (Multi)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>Commission Uber Eats</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>30% standard</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444', color: '#27AE60', fontWeight: 'bold' }}>30% standard (+ négo 20-25% possible en volume)</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>Frais Factory Eat</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>N/A</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444', color: '#FF6B35', fontWeight: 'bold' }}>+10% (frais de service)</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>Part reversée au restaurant</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>70% (seul sur Uber)</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444', color: '#27AE60', fontWeight: 'bold' }}>90% de la part Factory Eat</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>Visibilité</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>1 Plateforme</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444', color: '#27AE60', fontWeight: 'bold' }}>Multi-Plateformes (Uber + Deliveroo)</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>Support</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444' }}>Standard</td>
                                <td style={{ padding: '1rem', borderBottom: '1px solid #444', color: '#27AE60', fontWeight: 'bold' }}>Gestionnaire dédié & Optimisation Menu</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default OffreRestos;
