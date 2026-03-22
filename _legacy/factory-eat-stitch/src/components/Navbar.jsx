
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* Brand */}
                <a href="#" className="flex items-center gap-2">
                    <span className="text-2xl" role="img" aria-label="Burger">🍔</span>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">Factory Eat</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">Accueil</a>
                    <a href="#solutions" className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">Solutions</a>
                    <a href="#partenaires" className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">Partenaires</a>
                    <a href="#blog" className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">Blog</a>

                    <a href="#contact" className="ml-4 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        Audit Gratuit
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-600 focus:outline-none"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4">
                    <a href="#" className="text-gray-700 font-medium hover:text-orange-500">Accueil</a>
                    <a href="#solutions" className="text-gray-700 font-medium hover:text-orange-500">Solutions</a>
                    <a href="#partenaires" className="text-gray-700 font-medium hover:text-orange-500">Partenaires</a>
                    <a href="#blog" className="text-gray-700 font-medium hover:text-orange-500">Blog</a>
                    <a href="#contact" className="w-full text-center px-5 py-3 bg-orange-500 text-white rounded-full font-bold">
                        Audit Gratuit
                    </a>
                </div>
            )}
        </nav>
    );
}
