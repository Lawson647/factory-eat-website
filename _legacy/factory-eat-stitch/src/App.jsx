
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChartSection from './components/ChartSection';
import DenseGrid from './components/DenseGrid';
import FooterPro from './components/FooterPro';

function App() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <ChartSection />
                <DenseGrid />

                {/* Placeholder for remaining content like 'Steps' or 'Map' if needed later */}
                <section className="py-20 bg-white text-center">
                    <h2 className="text-3xl font-bold mb-6">Prêt à booster votre CA ?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Rejoignez les 100+ restaurants qui nous font confiance.</p>
                    <a href="https://calendly.com/factoryeat/demo" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                        Prendre rendez-vous 📅
                    </a>
                </section>

            </main>
            <FooterPro />
        </div>
    )
}

export default App
