import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['La Réole Grill', 'Sushi Tokyo', 'Nems Marseille', 'Asian Truck', 'Bao Street'],
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
    return (
        <section className="container my-10 animate-fade-up">
            <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Nos Stars</h2>
            <div className="grid-2">
                <div className="card">
                    <Bar options={options} data={data} />
                </div>
                <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070')", backgroundSize: 'cover', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', borderRadius: '12px' }}></div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h4>La Réole Grill</h4>
                            <p>"Passé de 0 à 4k€/mois grâce au multi-plateforme !"</p>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974')", backgroundSize: 'cover', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', borderRadius: '12px' }}></div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h4>Sushi Tokyo</h4>
                            <p>"Seulement +10% Factory Eat, multi-plateformes, CA x2 en 3 mois !"</p>
                        </div>
                    </div>
                    {/* More cards can be added here */}
                </div>
            </div>
        </section>
    );
};

export default Partners;
