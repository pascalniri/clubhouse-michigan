'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, Users, Heart, MapPin, Briefcase, BookOpen, Phone, Newspaper, TrendingUp, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const dropdownContent = {
    featured: {
        title: 'What is a Clubhouse?',
        description: 'Community-based support empowering people with mental illness',
        icon: Heart
    },
    links: [
        { title: 'Our Mission', icon: Heart },
        { title: 'Member Stories', icon: Users },
        { title: 'Find Locations', icon: MapPin },
        { title: 'Employment', icon: Briefcase },
        { title: 'Education', icon: BookOpen },
        { title: 'Get Involved', icon: TrendingUp }
    ]
};

const navItems = [
    { name: 'About', dropdown: true },
    { name: 'Job Postings', icon: Briefcase },
    { name: 'News & Media', icon: Newspaper },
    { name: 'Contact', icon: Phone }
];

const animations = {
    backdrop: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    menu: {
        closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
        open: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.1 } }
    },
    dropdown: {
        hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.05 } }
    },
    item: {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 },
        hidden: { opacity: 0, y: -5 },
        visible: { opacity: 1, y: 0 }
    }
};

export default function AppleNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const DropdownContent = ({ isMobile = false }) => {
        const Icon = dropdownContent.featured.icon;
        return (
            <div className={`${isMobile ? 'px-4 pb-4' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'}`}>
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-8'} justify-start items-start`}>
                    <motion.div
                        variants={animations.item}
                        initial={isMobile ? "visible" : undefined}
                        animate={isMobile ? "visible" : undefined}
                        className="bg-gray-50 border border-gray-100 flex flex-col items-start rounded-xl p-6 cursor-pointer"
                    >
                        <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#0B527F]/10 flex items-center justify-center'>
                            <Icon size={20} className="text-[#0B527F]" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {dropdownContent.featured.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {dropdownContent.featured.description}
                        </p>
                        <span className="text-[#0B527F] text-sm font-medium cursor-pointer px-6 py-3 border border-[#0B527F] rounded-full flex items-center gap-2 mt-3 hover:bg-[#0B527F] hover:text-white transition-colors duration-300">Learn more <ChevronRight size={16} /></span>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-2">
                        {dropdownContent.links.map((link, idx) => {
                            const LinkIcon = link.icon;
                            return (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    variants={animations.item}
                                    initial={isMobile ? "visible" : undefined}
                                    animate={isMobile ? "visible" : undefined}
                                    className="flex items-center gap-3 px-6 py-3 border border-[#0B527F]/10 rounded-full hover:bg-[#0B527F] hover:text-white transition-colors group"
                                    onClick={() => isMobile && setMobileDropdown(null)}
                                >
                                    <LinkIcon size={16} className="text-[#0B527F] group-hover:text-white mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm text-[#0B527F] group-hover:text-white transition-colors">
                                        {link.title}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-white/70 backdrop-blur-md'
                    }`}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <div className="flex items-center justify-between h-16">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                            <Image src="/clubhouse_michigan_logo.webp" alt="Clubhouse Logo" width={80} height={80} />
                        </motion.div>

                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative"
                                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                >
                                    <motion.a
                                        href="#"
                                        className="text-sm text-gray-800 hover:text-gray-600 transition-colors relative group flex items-center gap-1"
                                        whileHover={{ y: -2 }}
                                    >
                                        {item.name}
                                        {item.dropdown && <ChevronDown className="w-3 h-3" />}
                                        <motion.span
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </motion.a>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center space-x-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                className="hidden md:block px-6 py-3 bg-[#0B527F] text-white text-sm rounded-full cursor-pointer transition-colors"
                            >
                                Donate
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden border border-[#0B527F] w-10 h-10 rounded-full flex items-center justify-center"
                            >
                                {isOpen ? <X size={16} className='cursor-pointer text-[#0B527F]' /> : <Menu size={16} className='cursor-pointer text-[#0B527F]' />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {activeDropdown && (
                        <motion.div
                            variants={animations.dropdown}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="absolute top-full left-0 right-0 bg-white backdrop-blur-xl shadow-lg border-t border-gray-100"
                        >
                            <DropdownContent />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            variants={animations.backdrop}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden "
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            variants={animations.menu}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-xl  z-40 md:hidden shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto"
                        >
                            <div className="px-4 py-6 space-y-1">
                                {navItems.map((item, idx) => (
                                    <div key={idx}>
                                        <motion.div
                                            onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                                            variants={animations.item}
                                            className="flex items-center justify-between py-4 text-sm font-medium text-gray-800 border-b border-gray-100"
                                        >
                                            <a href="#" onClick={() => !item.dropdown && setIsOpen(false)} className="flex-1">
                                                {item.name}
                                            </a>
                                            {item.dropdown && (
                                                <button
                                                    className="p-2"
                                                >
                                                    <ChevronDown
                                                        size={16}
                                                        className={`transition-transform ${mobileDropdown === item.name ? 'rotate-180' : ''}`}
                                                    />
                                                </button>
                                            )}
                                        </motion.div>
                                        <AnimatePresence>
                                            {item.dropdown && mobileDropdown === item.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden py-4"
                                                >
                                                    <DropdownContent isMobile />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                                <div className="flex items-center space-x-6 pt-6">

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="md:hidden block px-6 py-3 bg-[#0B527F] text-white text-sm rounded-full cursor-pointer transition-colors"
                                    >
                                        Donate
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}