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
import FeaturedPartner from './components/FeaturedPartner';
import './App.css';

// Components for dedicated pages
const PartnersPage = () => {
  const foliesData = {
    name: "Le Folie’s Café Mimizan",
    tag: "⭐ Nouvelle Star Landes",
    location: "📍 Mimizan Ville (Bourg), Landes",
    img: "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/653474327_122164874546905218_5711820587859352252_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=voTzB1elE0wQ7kNvwEOrr32&_nc_oc=Adrgy7_UJdic3gshQFivCJS7zZAyj0NjVdORYA_E6IXddkk5HUKu0Xi3oygK-zrDV3KuF2ZdUAEmJlGdOyNEY--r&_nc_zt=23&_nc_ht=scontent-cdg4-1.xx&_nc_gid=cn4EvtFT6xtV3R7bzDSu5A&_nc_ss=7a30f&oh=00_Afzt4Luw-4embyFtTFXulSn-SgS0dFzM_yCpIS7OG8df5Q&oe=69CA0DBF",
    description: "Café-Restaurant & Planchas situé au cœur de Mimizan Ville. Réputé pour son ambiance conviviale, ses planches apéro et ses burgers généreux. Un modèle de réussite locale boosté par Factory Eat.",
    stats: [
        { label: "+35% CA Apéro", color: "#FF6B35" },
        { label: "Négo commissions -10%", color: "#FF6B35" },
        { label: "Top Seller Mimizan", color: "#FF6B35" }
    ],
    quote: "À Mimizan, nos planches apéro et notre poulet Churrasco sont devenus des best-sellers sur les apps grâce à Factory Eat ! On ne pourrait plus s'en passer.",
    facebook: "https://www.facebook.com/p/Le-folies-caf%C3%A9-Mimizan-61577156547250/",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45400!2d1.29!3d44.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50766326b8655b%3A0xe547250!2sMimizan+Plage!5e0!3m2!1sfr!2sfr!4v1"
  };

  return (
    <div className="animate-fade-up">
      <div className="hero-overlay" style={{ minHeight: '40vh', backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070')" }}>
        <div className="container"><h1>Nos Partenaires</h1></div>
      </div>
      
      <FeaturedPartner /> {/* Biba's Come par défaut */}
      
      <div style={{ padding: '60px 0', background: 'rgba(255,255,255,0.02)' }}>
        <FeaturedPartner partner={foliesData} />
      </div>

      <Partners /> {/* Le graphique et la grille */}
      
      <div className="container my-10">
        <h2 className="text-center" style={{ marginBottom: '1rem' }}>Présents partout en France</h2>
        <Map />
      </div>
    </div>
  );
};

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
      <h3 translate="no" style={{ color: '#FF6B35' }}>Factory Eat</h3>
      <p>Boostez votre cuisine sur Uber Eats & Deliveroo.</p>
      <div style={{ marginTop: '2rem' }}>
        &copy; 2026 <span translate="no">Factory Eat</span>. Tous droits réservés.
      </div>
    </div>
  </footer>
);

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-container">
      <Navbar setPage={setPage} currentPage={page} />

      {page === 'home' && (
        <>
          <Hero setPage={setPage} />
          <Partners />
          <Timeline />
          <Cuisines setPage={setPage} />
        </>
      )}

      {page === 'offre-restos' && <OffreRestos setPage={setPage} />}
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
