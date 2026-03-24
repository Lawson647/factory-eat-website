import React, { useState } from 'react';

const Navbar = ({ setPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = (page) => {
        setPage(page);
        setIsOpen(false);
    };

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
            <div translate="no" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#FF6B35', cursor: 'pointer', zIndex: 1001 }} onClick={() => handleNav('home')}>
                Factory Eat
            </div>
            
            {/* Hamburger icon for mobile */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span className={isOpen ? 'line open' : 'line'}></span>
                <span className={isOpen ? 'line open' : 'line'}></span>
                <span className={isOpen ? 'line open' : 'line'}></span>
            </div>
            
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li onClick={() => handleNav('home')}>Accueil</li>
                <li onClick={() => handleNav('offre-restos')}>Offre Restos</li>
                <li onClick={() => handleNav('foodtrucks')}>Foodtrucks</li>
                <li onClick={() => handleNav('partenaires')}>Partenaires</li>
                <li onClick={() => handleNav('comment')}>Comment ça marche</li>
                <li onClick={() => handleNav('blog')}>Blog</li>
                <li onClick={() => handleNav('contact')} className="nav-contact-btn">
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
