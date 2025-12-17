'use client'

import { ChevronRight, Facebook, Heart, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const socialMedia = [
    {
        name: "Facebook",
        icon: <Facebook size={16} />,
        link: "https://www.facebook.com/clubhouse-michigan"
    },
    {
        name: "Instagram",
        icon: <Instagram size={16} />,
        link: "https://www.instagram.com/clubhouse-michigan"
    },
    {
        name: "Twitter",
        icon: <Twitter size={16} />,
        link: "https://twitter.com/clubhouse-michigan"
    }
]

export default function HeroSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 mt-24 md:mt-32">
            <div className="relative w-full min-h-[85vh] md:min-h-[600px] rounded-3xl overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <Image
                    src="/clubhouse_hero_image.webp"
                    alt="Hero Section"
                    width={1000}
                    height={600}
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />

                {/* Main Hero Content */}
                <motion.div
                    className="relative z-10 flex flex-col md:flex-row w-full justify-between items-start pt-10 px-4 sm:px-8 lg:px-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-[72px] font-semibold text-white leading-tight lg:leading-[1.1]"
                        >
                            Welcome to Clubhouse Michigan
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-white/90 text-sm md:text-base leading-relaxed max-w-lg"
                        >
                            A Clubhouse is a community-based service dedicated to supporting and empowering people living with mental illness, known as Clubhouse members.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3 flex-wrap mt-4 md:mt-6"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-[#9f2943] text-white text-sm font-medium rounded-full cursor-pointer transition-colors hover:bg-[#8a223a]"
                            >
                                Click to donate
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-full cursor-pointer transition-colors hover:bg-white/20"
                            >
                                <p>Learn more</p>
                                <ChevronRight size={16} />
                            </motion.button>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="hidden md:flex flex-col gap-3 mt-4 md:mt-0"
                    >
                        {socialMedia.map((media) => (
                            <Link
                                key={media.name}
                                href={media.link}
                                className="w-10 h-10 bg-[#9f2943] text-white rounded-full flex items-center justify-center hover:bg-[#8a223a] transition-colors"
                            >
                                {media.icon}
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Info Cards - Stack on mobile, row on desktop */}
                <motion.div
                    className="relative z-10 w-full px-4 sm:px-6 lg:px-12 pb-6 md:pb-10 mt-8 md:mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <div className="flex flex-col md:grid md:grid-cols-3 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden px-6 md:px-0 py-0 md:py-6">
                        <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-gray-200 p-6 md:p-8">
                            <span className="h-12 w-12 bg-[#9f2943]/10 text-[#9f2943] rounded-full flex items-center justify-center mb-2">
                                <Heart size={20} />
                            </span>
                            <h2 className="font-bold text-lg md:text-xl text-gray-900">
                                Who We Are
                            </h2>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                A Clubhouse is a community-based service dedicated to supporting and empowering people living with mental illness.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-gray-200 p-6 md:p-8">
                            <span className="h-12 w-12 bg-[#9f2943]/10 text-[#9f2943] rounded-full flex items-center justify-center mb-2">
                                <Heart size={20} />
                            </span>
                            <h2 className="font-bold text-lg md:text-xl text-gray-900">
                                What We Do
                            </h2>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Providing a supportive environment where members can regain their confidence and skills through meaningful work.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 p-6 md:p-8">
                            <span className="h-12 w-12 bg-[#9f2943]/10 text-[#9f2943] rounded-full flex items-center justify-center mb-2">
                                <Heart size={20} />
                            </span>
                            <h2 className="font-bold text-lg md:text-xl text-gray-900">
                                Our Impact
                            </h2>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Empowering individuals to lead fulfilling lives by providing education, employment, and housing opportunities.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}