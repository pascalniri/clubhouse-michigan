'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { NavItem } from '@/lib/navigation-data';

interface MobileNavProps {
    items: NavItem[];
    isOpen: boolean;
}

export default function MobileNav({ items, isOpen }: MobileNavProps) {
    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 top-20 z-40 bg-white overflow-y-auto"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
        >
            <div className="p-6 space-y-6 pb-20">
                {items.map((item, idx) => (
                    <div key={idx} className="space-y-3">
                        {!item.hasDropdown ? (
                            <a href={item.href} className="block text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3">
                                {item.label}
                            </a>
                        ) : (
                            <>
                                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3">
                                    {item.label}
                                </h3>
                                {item.dropdownContent?.sections.map((section, sIdx) => (
                                    <div key={sIdx} className="space-y-3 pl-2">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase">{section.title}</h4>
                                        {section.items.map((dropItem, dIdx) => (
                                            <a
                                                key={dIdx}
                                                href={dropItem.href}
                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50"
                                            >
                                                <div className="p-2 rounded-md bg-white shadow-sm" style={{ color: dropItem.color }}>
                                                    <dropItem.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900 text-sm">{dropItem.title}</div>
                                                    <p className="text-xs text-gray-500 mt-1">{dropItem.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                ))}
                                {item.dropdownContent?.featured && (
                                    <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-[#9F2943]/10 to-[#0E5282]/10 border border-[#9F2943]/10">
                                        <h4 className="font-semibold text-[#9F2943] text-sm mb-1">
                                            {item.dropdownContent.featured.title}
                                        </h4>
                                        <p className="text-xs text-gray-600 mb-3">{item.dropdownContent.featured.description}</p>
                                        <a
                                            href={item.dropdownContent.featured.href}
                                            className="block w-full py-2 text-center text-xs font-bold text-white bg-[#9F2943] rounded-lg"
                                        >
                                            {item.dropdownContent.featured.cta}
                                        </a>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
                <hr className="border-gray-100" />
                <a href="/donate" className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#9F2943] to-[#0E5282] text-white rounded-xl font-bold">
                    Donate Now
                    <Heart className="w-4 h-4 fill-white" />
                </a>
            </div>
        </motion.div>
    );
}
