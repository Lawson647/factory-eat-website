import React from 'react';

const cuisines = [
    { name: 'Burgers', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1500' },
    { name: 'Sushis Japonais', img: '/img/sushi.png' },
    { name: 'Nems Chinois', img: '/img/nems.png' },
    { name: 'Poké / Bao', img: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=1500' },
    { name: 'Foodtrucks', img: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=1500' },
    { name: 'Rôtisserie', img: '/img/rotisserie.png' },
    { name: 'Spécialités Portugaises', img: '/img/portugais.png' },
    { name: 'Tacos Français', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1500' },
    { name: 'Kebab Gourmand', img: '/img/kebab.png' },
    { name: 'Cuisine Turque', img: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1500' },
    { name: 'Saveurs Indiennes', img: 'https://images.unsplash.com/photo-1585932231552-058210b4200e?q=80&w=1500' },
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
