
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function FooterPro() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-white text-lg font-bold mb-4">Factory Eat 🍔</h4>
                        <p className="text-sm leading-relaxed mb-6">
                            Restaurant virtuel nationale. Boostez votre activité physique avec nos marques optimisées pour Uber Eats & Deliveroo.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Solutions</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Multi-Plateformes</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Foodtrucks</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Restaurants Asiatiques</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Audit Gratuit</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Entreprise</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">À propos</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Partenaires</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Légal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Mentions Légales</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">Confidentialité</a></li>
                            <li><a href="#" className="hover:text-orange-400 transition-colors">CGV</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© 2026 Factory Eat. Tous droits réservés.</p>
                    <p className="mt-2 md:mt-0">Fait avec ❤️ pour les restaurateurs.</p>
                </div>
            </div>
        </footer>
    )
}
