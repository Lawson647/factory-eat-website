
import { motion } from 'framer-motion';

const features = [
    {
        title: "Sushis & Japonais",
        desc: "Menu virtuel 'Factory Sushi Poke'",
        img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80",
        cols: "md:col-span-2",
    },
    {
        title: "Nems & Wok",
        desc: "Factory Nems Express",
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80",
        cols: "md:col-span-1",
    },
    {
        title: "Poké & Healthy",
        desc: "Factory Asian Fusion",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
        cols: "md:col-span-1",
    },
    {
        title: "Foodtrucks & Mobile",
        desc: "Zones flexibles & Multi-plateformes",
        img: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=600&q=80",
        cols: "md:col-span-2",
    },
];

export default function DenseGrid() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
                        Spécialités
                    </span>
                    <h2 className="text-4xl font-bold mt-4 mb-4 text-gray-900">
                        Asiatique Explosif 🥢 & Foodtrucks 🚚
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Propulsez votre cuisine asiatique ou votre foodtruck vers de nouveaux sommets.
                        Menus virtuels optimisés et gestion flexible des zones de livraison.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${feature.cols}`}
                        >
                            <img
                                src={feature.img}
                                alt={feature.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-200 text-sm font-medium opacity-90">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Découvrir toutes les cuisines
                    </a>
                </div>
            </div>
        </section>
    )
}
