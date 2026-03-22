
import { motion } from 'framer-motion';

export default function ChartSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Chart Column */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Performance Partenaires</h3>
                        <div className="chart-88-wrapper relative w-48 h-48">
                            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                <path
                                    className="text-gray-200"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 0.88 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="text-primary"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="var(--color-primary)" // Using CSS variable for consistency
                                    strokeWidth="2.5"
                                    strokeDasharray="100, 100"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold" style={{ color: 'var(--color-dark)' }}>88%</span>
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Satisfaction</span>
                            </div>
                        </div>
                        <p className="mt-6 text-center text-gray-600 max-w-sm">
                            Partenaires constatant une hausse immédiate du CA après le premier mois.
                        </p>
                    </div>

                    {/* Testimonials Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-8 text-gray-800">Ce qu'ils en disent</h3>

                        {[
                            { text: "Grâce à Factory Eat, mon chiffre d'affaires a bondi de 30% en deux mois.", author: "Jean, Paris" },
                            { text: "L'intégration Uber Eats et Deliveroo s'est faite sans accroc.", author: "Sarah, Lyon" },
                            { text: "Le support est top et les résultats sont là. Je recommande.", author: "Ahmed, Marseille" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-sm"
                            >
                                <p className="text-lg text-gray-700 italic mb-3">"{item.text}"</p>
                                <span className="block font-semibold" style={{ color: 'var(--color-primary)' }}>— {item.author}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
