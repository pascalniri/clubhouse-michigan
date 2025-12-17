'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Menu, X, Heart } from 'lucide-react';
import { NAV_ITEMS, COLORS } from '@/lib/navigation-data';
import DropdownMenu from './navigation/DropdownMenu';
import MobileNav from './navigation/MobileNav';

export default function Navigation() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/60 backdrop-blur-md'
        }`;

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="flex items-center gap-2 group z-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="relative">
                            <div
                                className="absolute inset-0 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
                                style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}
                            />
                            <Sparkles className="relative w-8 h-8" style={{ color: COLORS.primary }} />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#9F2943] to-[#0E5282] bg-clip-text text-transparent">
                            Clubhouse
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <motion.a
                                    href={item.href}
                                    className="flex items-center gap-1 px-3 lg:px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-[#9F2943] transition-colors group"
                                    whileHover={{ y: -1 }}
                                >
                                    <span className="text-sm lg:text-base">{item.label}</span>
                                    {item.hasDropdown && (
                                        <motion.div animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}>
                                            <ChevronDown className="w-4 h-4" />
                                        </motion.div>
                                    )}
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9F2943] to-[#0E5282] rounded-full"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                    />
                                </motion.a>

                                <AnimatePresence>
                                    {activeDropdown === item.label && <DropdownMenu item={item} />}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <motion.a
                            href="/donate"
                            className="hidden md:flex relative px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-semibold text-white overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#9F2943] to-[#0E5282] group-hover:scale-105 transition-transform" />
                            <span className="relative flex items-center gap-2 text-sm lg:text-base">
                                Donate
                                <Heart className="w-4 h-4 fill-white" />
                            </span>
                        </motion.a>

                        <motion.button
                            className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 z-50"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                <MobileNav items={NAV_ITEMS} isOpen={isMobileMenuOpen} />
            </AnimatePresence>
        </nav>
    );
}