import React from 'react';

const cuisines = [
    { name: 'Burgers', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1500' },
    { name: 'Sushis Japonais', img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1500' },
    { name: 'Nems Chinois', img: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1500' },
    { name: 'Poké / Bao', img: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=1500' },
    { name: 'Foodtrucks', img: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=1500' },
    { name: 'Rôtisserie', img: 'https://images.unsplash.com/photo-1532597327993-277df9313b35?q=80&w=1500' },
];

const Cuisines = ({ setPage }) => {
    return (
        <section className="container my-10 animate-fade-up">
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Toutes nos Cuisines</h2>
            <div className="grid-3">
                {cuisines.map((cuisine, idx) => (
                    <div className="card" key={idx} style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${cuisine.img})`,
                        backgroundSize: 'cover',
                        height: '250px',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <h3>{cuisine.name}</h3>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h3>Rejoignez nos tops ! Multi-plateformes = négo commissions.</h3>
                <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => setPage('contact')}>Je Me Lance</button>
            </div>
        </section>
    );
};

export default Cuisines;
