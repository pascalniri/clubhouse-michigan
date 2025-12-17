'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { NavItem, COLORS } from '@/lib/navigation-data';

interface DropdownMenuProps {
    item: NavItem;
}

export default function DropdownMenu({ item }: DropdownMenuProps) {
    if (!item.dropdownContent) return null;

    return (
        <motion.div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-4xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
        >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />

            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9F2943] to-[#0E5282]" />

                <div className="p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {item.dropdownContent.sections.map((section, idx) => (
                            <div key={idx} className="space-y-3">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    {section.title}
                                </h3>
                                <div className="space-y-2">
                                    {section.items.map((dropItem, i) => (
                                        <motion.a
                                            key={i}
                                            href={dropItem.href}
                                            className="group block p-3 rounded-xl hover:bg-gray-50 transition-all"
                                            whileHover={{ x: 4 }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className="p-2 rounded-lg bg-white shadow-sm"
                                                    style={{ borderLeft: `3px solid ${dropItem.color}` }}
                                                >
                                                    <dropItem.icon className="w-5 h-5" style={{ color: dropItem.color }} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h4 className="font-semibold text-gray-900 text-sm">{dropItem.title}</h4>
                                                        {dropItem.badge && (
                                                            <span
                                                                className="px-2 py-0.5 text-xs font-medium text-white rounded-full"
                                                                style={{ background: dropItem.color }}
                                                            >
                                                                {dropItem.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-gray-600">{dropItem.description}</p>
                                                </div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {item.dropdownContent.featured && (
                            <div className="md:col-span-1">
                                <div className="h-full p-6 rounded-xl bg-gradient-to-br from-[#9F2943] to-[#0E5282] text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                                    <Sparkles className="w-8 h-8 mb-3 opacity-90" />
                                    <h3 className="text-lg font-bold mb-2">{item.dropdownContent.featured.title}</h3>
                                    <p className="text-sm text-white/90 mb-4">{item.dropdownContent.featured.description}</p>
                                    <motion.a
                                        href={item.dropdownContent.featured.href}
                                        className="block w-full px-4 py-2 bg-white text-[#9F2943] rounded-lg font-medium text-sm text-center"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        {item.dropdownContent.featured.cta}
                                    </motion.a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
