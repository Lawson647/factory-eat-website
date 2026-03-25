import React, { useState } from 'react';

const Navbar = ({ setPage, currentPage }) => {
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
            <div translate="no" className="navbar-brand" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#FF6B35', cursor: 'pointer', zIndex: 1001 }} onClick={() => handleNav('home')}>
                Factory Eat
            </div>
            
            {/* Hamburger icon for mobile */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span className={isOpen ? 'line open' : 'line'}></span>
                <span className={isOpen ? 'line open' : 'line'}></span>
                <span className={isOpen ? 'line open' : 'line'}></span>
            </div>
            
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li onClick={() => handleNav('home')} style={{ color: currentPage === 'home' ? '#FF6B35' : '' }}>Accueil</li>
                <li onClick={() => handleNav('offre-restos')} style={{ color: currentPage === 'offre-restos' ? '#FF6B35' : '' }}>Offre Restos</li>
                <li onClick={() => handleNav('foodtrucks')} style={{ color: currentPage === 'foodtrucks' ? '#FF6B35' : '' }}>Foodtrucks</li>
                <li onClick={() => handleNav('partenaires')} style={{ color: currentPage === 'partenaires' ? '#FF6B35' : '' }}>Partenaires</li>
                <li onClick={() => handleNav('comment')} style={{ color: currentPage === 'comment' ? '#FF6B35' : '' }}>Comment ça marche</li>
                <li onClick={() => handleNav('blog')} style={{ color: currentPage === 'blog' ? '#FF6B35' : '' }}>Blog</li>
                <li onClick={() => handleNav('contact')} className="nav-contact-btn" style={{ background: currentPage === 'contact' ? '#FF6B35' : '', color: currentPage === 'contact' ? '#fff' : '' }}>
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
