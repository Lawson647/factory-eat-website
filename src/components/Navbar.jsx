import React from 'react';

const Navbar = ({ setPage }) => {
    return (
        <nav style={{
            background: 'var(--dark)',
            padding: '1rem 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff', cursor: 'pointer' }} onClick={() => setPage('home')}>
                Factory Eat <span style={{ color: '#FF6B35' }}>Multi</span>
            </div>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
                <li onClick={() => setPage('home')} style={{ cursor: 'pointer', color: '#fff' }}>Accueil</li>
                <li onClick={() => setPage('offre-restos')} style={{ cursor: 'pointer', color: '#fff' }}>Offre Restos</li>
                <li onClick={() => setPage('foodtrucks')} style={{ cursor: 'pointer', color: '#fff' }}>Foodtrucks</li>
                <li onClick={() => setPage('partenaires')} style={{ cursor: 'pointer', color: '#fff' }}>Partenaires</li>
                <li onClick={() => setPage('comment')} style={{ cursor: 'pointer', color: '#fff' }}>Comment ça marche</li>
                <li onClick={() => setPage('blog')} style={{ cursor: 'pointer', color: '#fff' }}>Blog</li>
                <li onClick={() => setPage('contact')} style={{
                    background: '#FF6B35',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    color: '#fff'
                }}>
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
