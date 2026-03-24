import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Timeline from './components/Timeline';
import Cuisines from './components/Cuisines';
import OffreRestos from './components/OffreRestos';
import Foodtrucks from './components/Foodtrucks';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Map from './components/Map';
import './App.css';

// Components for dedicated pages
const PartnersPage = () => (
  <div className="animate-fade-up">
    <div className="hero-overlay" style={{ minHeight: '40vh', backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070')" }}>
      <div className="container"><h1>Nos Partenaires</h1></div>
    </div>
    <Partners /> {/* The chart and success stories */}
    <div className="container my-10">
      <h2 className="text-center" style={{ marginBottom: '1rem' }}>Présents partout en France</h2>
      {/* Interactive France Map with data from Factory Eat network */}
      <Map />
    </div>
  </div>
);

const CommentPage = () => (
  <div className="animate-fade-up">
    <div className="hero-overlay" style={{ minHeight: '40vh', backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032')" }}>
      <div className="container"><h1>Comment Ça Marche ?</h1></div>
    </div>
    <Timeline />
    <div className="container" style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
        Notre équipe s'occupe de tout : création des comptes, shooting photos, optimisation des menus pour la livraison, et négociation des commissions grâce à notre volume d'affaires global.
      </p>
    </div>
  </div>
);

const Footer = () => (
  <footer style={{ background: '#000', padding: '3rem 0', marginTop: '4rem', borderTop: '1px solid #333' }}>
    <div className="container" style={{ textAlign: 'center', color: '#888' }}>
      <h3>Factory Eat</h3>
      <p>Boostez votre cuisine sur Uber Eats & Deliveroo.</p>
      <div style={{ marginTop: '2rem' }}>
        &copy; 2026 Factory Eat. Tous droits réservés.
      </div>
    </div>
  </footer>
);

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-container">
      <Navbar setPage={setPage} />

      {page === 'home' && (
        <>
          <Hero />
          <Partners />
          <Timeline />
          <Cuisines />
        </>
      )}

      {page === 'offre-restos' && <OffreRestos />}
      {page === 'foodtrucks' && <Foodtrucks />}
      {page === 'partenaires' && <PartnersPage />}
      {page === 'comment' && <CommentPage />}
      {page === 'blog' && <Blog />}
      {page === 'contact' && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
