import React from 'react';

const articles = [
    { title: 'Comment fonctionne le modèle Factory Eat : 30% Uber + 10% service ?', category: 'Modèle', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1500' },
    { title: 'Le succès des Sushis Virtuels en 2024', category: 'Success Story', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1500' },
    { title: 'Foodtrucks : La Révolution Mobile', category: 'Tendance', img: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=1500' },
];

const Blog = () => {
    return (
        <section className="container my-10 animate-fade-up">
            <h1 className="text-center" style={{ marginBottom: '3rem' }}>Actualités & Conseils Food</h1>
            <div className="grid-3">
                {articles.map((art, idx) => (
                    <div className="card" key={idx} style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{
                            height: '200px',
                            backgroundImage: `url(${art.img})`,
                            backgroundSize: 'cover'
                        }}></div>
                        <div style={{ padding: '1.5rem' }}>
                            <small style={{ color: '#FF6B35', fontWeight: 'bold' }}>{art.category}</small>
                            <h3 style={{ marginTop: '0.5rem' }}>{art.title}</h3>
                            <a href="#" style={{ color: '#fff', textDecoration: 'underline', marginTop: '1rem', display: 'inline-block' }}>Lire l'article</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
