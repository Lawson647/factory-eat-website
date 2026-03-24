import React from 'react';

const Timeline = () => {
    return (
        <section className="container my-10 animate-fade-up" style={{ textAlign: 'center' }}>
            <h2>Comment Ça Marche ?</h2>
            <div className="timeline-container" style={{ position: 'relative', marginTop: '2rem' }}>
                <div className="timeline-item" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="card" style={{ width: '300px', background: '#2C2C2C', borderLeft: '4px solid #FF6B35' }}>
                        <h3>1. Inscription Multi-Plateforme</h3>
                        <p>On vous lance sur Uber Eats ET Deliveroo simultanément.</p>
                    </div>
                </div>
                <div className="timeline-item" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="card" style={{ width: '300px', background: '#2C2C2C', borderLeft: '4px solid #27AE60' }}>
                        <h3>2. Menu Tremplin</h3>
                        <p>Menu optimisé (Asiatique, Burgers) pour convertir dès le jour 1.</p>
                    </div>
                </div>
                <div className="timeline-item" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="card" style={{ width: '300px', background: '#2C2C2C', borderLeft: '4px solid #FF6B35' }}>
                        <h3>3. Prix Ajustés (0 Charge)</h3>
                        <p>Les prix en ligne sont majorés pour absorber les 30% d'Uber. <b>Ex: Un burger à 10€ en salle sera vendu 13€ sur l'app.</b> Le restaurant ne perd aucune marge !</p>
                    </div>
                </div>
                <div className="timeline-item" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="card" style={{ width: '300px', background: '#2C2C2C', borderLeft: '4px solid #27AE60' }}>
                        <h3>4. Vous Gardez 90%</h3>
                        <p>Sur notre marge de 10%, le restaurant en conserve 90%. Bonus possible : négo Uber à 20-25% en volume.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
