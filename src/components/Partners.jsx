import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ["Biba's Come (La Réole)", 'Sushi Tokyo', 'Nems Marseille', 'Asian Truck', 'Bao Street'],
    datasets: [
        {
            label: 'CA Mensuel (Mois 1)',
            data: [2500, 3200, 2100, 1800, 2900],
            backgroundColor: 'rgba(255, 107, 53, 0.4)',
            borderColor: '#FF6B35',
            borderWidth: 1,
        },
        {
            label: 'CA Mensuel (Mois 6)',
            data: [4200, 5800, 3500, 3100, 4700],
            backgroundColor: 'rgba(39, 174, 96, 0.4)',
            borderColor: '#27AE60',
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top', labels: { color: '#fff' } },
        title: { display: true, text: 'Croissance Partenaires Factory Eat', color: '#fff' },
    },
    scales: {
        x: { ticks: { color: '#fff' } },
        y: { ticks: { color: '#fff' } }
    }
};

const Partners = () => {
    const facebookIcon = (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.34-.86 9.4-5.46 9.4-10.95z"></path>
        </svg>
    );

    return (
        <section className="container my-10 animate-fade-up">
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Nos Stars</h2>
            <div className="grid-2">
                <div className="card">
                    <Bar options={options} data={data} />
                </div>
                <div className="grid-2" style={{ gap: '1.5rem' }}>
                    {/* Biba's Come */}
                    <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070')", backgroundSize: 'cover', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', borderRadius: '12px' }}></div>
                        <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                            <h4>Biba's Come</h4>
                            <p style={{fontStyle: 'italic', marginBottom: '8px'}}>"Factory Eat a été le tremplin idéal pour nos viandes locales ! En 2 semaines, nos commandes sur Uber Eats ont explosé."</p>
                            <p style={{fontSize: '0.85rem', color: '#ccc', marginBottom: '16px'}}>📍 Foodtruck Grillades & Rôtisserie à La Réole, Gironde</p>
                            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px'}}>
                                <span style={{background: 'rgba(255, 107, 53, 0.2)', border: '1px solid #FF6B35', padding: '3px 7px', borderRadius: '4px', fontSize: '0.75rem', color: '#FF6B35'}}>+30% CA</span>
                                <span style={{background: 'rgba(255, 107, 53, 0.2)', border: '1px solid #FF6B35', padding: '3px 7px', borderRadius: '4px', fontSize: '0.75rem', color: '#FF6B35'}}>Commission 15%</span>
                            </div>
                            <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                                <a href="https://www.facebook.com/bibascome/" target="_blank" rel="noopener noreferrer" style={{color: '#FF6B35'}} title="Voir leur Facebook">
                                    {facebookIcon}
                                </a>
                                <img src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/577069038_122110887489042775_7143367543133135439_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2a1932&_nc_ohc=l66OYB-MEk0Q7kNvwHINNkP&_nc_oc=Adp0juWfuchUk_fmPN8P1jwLKzJU1mk47em74GdHZ150UTzVn-NxLKoYQH_qEIucdFT5Q6s34U2dhPRygZLkze9i&_nc_zt=23&_nc_ht=scontent-cdg4-1.xx&_nc_gid=eZKRIIukvzNySeuuwaYpdw&_nc_ss=7a30f&oh=00_Afwsz49OZSOs-S53vVHOLSMFUJjvOOjqb5UCqmYU2SPjGw&oe=69C9E7C1" alt="Signature Biba's" style={{width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #FF6B35', objectFit: 'cover'}} />
                            </div>
                        </div>
                    </div>

                    {/* Folies Café */}
                    <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070')", backgroundSize: 'cover', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', borderRadius: '12px' }}></div>
                        <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                            <h4>Folies Café</h4>
                            <p style={{fontStyle: 'italic', marginBottom: '8px'}}>"À Mimizan, nos planches apéro et notre poulet Churrasco sont devenus des best-sellers sur les apps grâce à Factory Eat !"</p>
                            <p style={{fontSize: '0.85rem', color: '#ccc', marginBottom: '16px'}}>📍 Café-Restaurant & Planchas à Mimizan Plage, Landes</p>
                            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px'}}>
                                <span style={{background: 'rgba(255, 107, 53, 0.2)', border: '1px solid #FF6B35', padding: '3px 7px', borderRadius: '4px', fontSize: '0.75rem', color: '#FF6B35'}}>+35% CA Apéro</span>
                                <span style={{background: 'rgba(255, 107, 53, 0.2)', border: '1px solid #FF6B35', padding: '3px 7px', borderRadius: '4px', fontSize: '0.75rem', color: '#FF6B35'}}>Négo 20%</span>
                            </div>
                            <div style={{display: 'flex', gap: '12px'}}>
                                <a href="https://fr-fr.facebook.com/p/Folies-Caf%C3%A9-Mimizan-100063640244673/" target="_blank" rel="noopener noreferrer" style={{color: '#FF6B35'}} title="Voir leur Facebook">
                                    {facebookIcon}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Nems Marseille */}
                    <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606333664324-4ba20ec26e79?q=80&w=2070')", backgroundSize: 'cover', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', borderRadius: '12px' }}></div>
                        <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                            <h4>Nems Marseille</h4>
                            <p style={{fontStyle: 'italic', marginBottom: '8px'}}>"Le multi-plateformes a doublé notre zone de chalandise. Les nems partent comme des petits pains !"</p>
                            <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                <span style={{background: 'rgba(39, 174, 96, 0.2)', border: '1px solid #27AE60', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', color: '#27AE60'}}>+65% CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Pizzeria Bordeaux */}
                    <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070')", backgroundSize: 'cover', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', borderRadius: '12px' }}></div>
                        <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                            <h4>Pizzeria (Bordeaux)</h4>
                            <p style={{fontStyle: 'italic'}}>"CA qui bondit de 35% le premier mois !"</p>
                        </div>
                    </div>

                    {/* Grande Rôtisserie */}
                    <div className="card" style={{ backgroundImage: "url('/img/rotisserie.png')", backgroundSize: 'cover', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', borderRadius: '12px' }}></div>
                        <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                            <h4>Grande Rôtisserie</h4>
                            <p style={{fontStyle: 'italic', marginBottom: '8px'}}>"+40 commandes/semaine ! Visibilité boostée sans rien changer."</p>
                            <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                                <span style={{background: '#FF6B35', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', color: '#fff'}}>Top Seller</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
