"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-20 pb-10 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight">
                Clubhouse Michigan
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Supporting and empowering people living with mental illness to
              reach their full potential through community, employment, and
              education.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#9f2943] dark:hover:bg-[#ff5577] hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Our Programs",
                "Success Stories",
                "Find a Clubhouse",
                "News & Events",
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-gray-400 dark:text-gray-500 hover:text-[#9f2943] dark:hover:text-[#ff5577] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-4">
              {[
                "Member Resources",
                "Family Support",
                "Advocacy",
                "Partner Portal",
                "Privacy Policy",
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-gray-400 dark:text-gray-500 hover:text-[#9f2943] dark:hover:text-[#ff5577] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="mt-1 text-[#9f2943] dark:text-[#ff5577]"
                />
                <span>website@clubhousemichigan.org</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-[#9f2943] dark:text-[#ff5577]"
                />
                <span>Serving 30+ Counties throughout Michigan</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="mt-1 text-[#9f2943] dark:text-[#ff5577]"
                />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 dark:text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} Clubhouse Michigan. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Designed with</span>
            <Heart
              size={14}
              className="text-[#9f2943] dark:text-[#ff5577] fill-[#9f2943] dark:fill-[#ff5577]"
            />
            <span>for the Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
