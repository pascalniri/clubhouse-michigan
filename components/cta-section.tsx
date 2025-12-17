'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHeart, Users } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#9f2943] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">

                    {/* Background Circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6"
                        >
                            Together, We Can Make a Difference
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/90 text-lg md:text-xl mb-12 leading-relaxed"
                        >
                            Your support empowers individuals living with mental illness to reach their full potential.
                            Whether through donation, advocacy, or partnership, you are building a stronger community.
                        </motion.p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Donate to Support", icon: Heart, primary: true },
                                { title: "Become a Partner", icon: HandHeart, primary: false },
                                { title: "Join Our Team", icon: Users, primary: false }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.button
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`
                                            flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all
                                            ${item.primary
                                                ? 'bg-white text-[#9f2943] shadow-lg'
                                                : 'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20'}
                                        `}
                                    >
                                        <Icon size={32} className={item.primary ? 'fill-[#9f2943]' : ''} />
                                        <span className="font-semibold text-lg">{item.title}</span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
