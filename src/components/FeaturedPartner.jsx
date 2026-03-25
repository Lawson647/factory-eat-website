import React from 'react';

const FeaturedPartner = ({ partner }) => {
    // Default data for Biba's Come if no partner prop
    const defaultPartner = {
        name: "Biba's Come",
        tag: "⭐ Premier Partenaire",
        location: "📍 La Réole, Gironde",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop&q=80",
        description: "Foodtruck spécialisé en grillades et rôtisserie du sud-ouest. Viandes locales de qualité, cuisson au feu de bois. Premier restaurant à faire confiance à Factory Eat pour booster sa visibilité.",
        stats: [
            { label: "+30% CA", color: "#FF6B35" },
            { label: "Commission 15%", color: "#FF6B35" },
            { label: "+45 commandes/semaine", color: "#FF6B35" }
        ],
        quote: "Factory Eat a été le tremplin idéal pour nos viandes locales ! En 2 semaines, nos commandes sur Uber Eats ont explosé. Le meilleur investissement qu'on ait fait.",
        facebook: "https://www.facebook.com/profile.php?id=61581283250102",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45000!2d-0.03!3d44.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552c5f9a9a9a9%3A0x0!2sLa+R%C3%A9ole!5e0!3m2!1sfr!2sfr!4v1"
    };

    const data = partner || defaultPartner;

    return (
        <section className="container my-10 animate-fade-up">
            <div className="text-center" style={{ marginBottom: '40px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(255, 107, 53, 0.1)', color: '#FF6B35', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px' }}>{data.tag}</div>
                <h2 style={{ fontSize: '2.5rem' }}>{data.name}</h2>
            </div>
            
            <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', padding: '0', overflow: 'hidden', background: 'linear-gradient(145deg, #2A2A2A, #222)' }}>
                <div style={{ height: '450px', overflow: 'hidden' }}>
                    <img 
                        src={data.img}
                        alt={data.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>{data.name}</h3>
                    <div style={{ color: '#FF6B35', fontWeight: 'bold', marginBottom: '1rem' }}>{data.location}</div>
                    
                    <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        {data.description}
                    </p>
                    
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {data.stats.map((stat, i) => (
                            <span key={i} style={{ background: 'rgba(255, 107, 53, 0.2)', border: '1px solid #FF6B35', padding: '6px 12px', borderRadius: '6px', fontSize: '0.9rem', color: '#FF6B35', fontWeight: 'bold' }}>{stat.label}</span>
                        ))}
                    </div>

                    <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '4px solid #FF6B35', marginBottom: '1.5rem' }}>
                        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#fff', marginBottom: '10px' }}>"{data.quote}"</p>
                        <span style={{ color: '#aaa', fontSize: '0.9rem', fontWeight: 'bold' }}>— Propriétaire, {data.name}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="btn" style={{ border: '2px solid #1877F2', color: '#1877F2', fontWeight: 'bold', textDecoration: 'none', padding: '10px 20px', borderRadius: '8px' }}>
                            Visiter la Page Facebook
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPartner;
