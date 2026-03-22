
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="hero-stitch" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&h=1080&fit=crop&q=80')" }}>
            {/* Dark Overlay is handled by CSS ::before */}

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.9rem', backdropFilter: 'blur(5px)' }}>
                        🚀 Restaurant virtuel nationale
                    </span>
                    <h1 style={{ fontSize: '3.5rem', margin: '1.5rem 0', fontWeight: '800', lineHeight: '1.1' }}>
                        <span style={{ color: 'var(--color-primary)' }}>Factory Eat</span> —<br />Restaurant Virtuel Rentable Nationwide
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: '0.9' }}>
                        Rejoignez <strong>100+ restaurants</strong> partenaires et boostez votre chiffre d'affaires. Sans frais cachés.
                    </p>

                    <div className="flex gap-4 justify-center" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#solu" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Découvrir la Solution Restos →
                        </a>
                        <a href="https://calendly.com/factoryeat/demo" target="_blank" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}>
                            Réserver un audit
                        </a>
                    </div>

                    <div className="hero-stats" style={{ display: 'flex', gap: '3rem', justifyContent: 'center', marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                        <div className="stat">
                            <strong style={{ display: 'block', fontSize: '2.5rem', lineHeight: '1' }}>50+</strong>
                            <span style={{ opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Villes</span>
                        </div>
                        <div className="stat">
                            <strong style={{ display: 'block', fontSize: '2.5rem', lineHeight: '1' }}>100+</strong>
                            <span style={{ opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Partenaires</span>
                        </div>
                        <div className="stat">
                            <strong style={{ display: 'block', fontSize: '2.5rem', lineHeight: '1', color: 'var(--color-primary)' }}>+30%</strong>
                            <span style={{ opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>CA moyen</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
