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
    <footer className="bg-brand-blue text-white pt-20 pb-10 border-t border-[#1E3C5D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight">
                Clubhouse Michigan
              </span>
            </div>
            <div className="space-y-4">
              <h5 className="text-sm font-bold uppercase tracking-widest text-[#923445]">
                Our Purpose
              </h5>
              <p className="text-white/70 leading-relaxed text-lg">
                To develop and expand Michigan Clubhouses, empower members in
                their recovery, and create societal change for people living
                with mental illness.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-sm font-bold uppercase tracking-widest text-[#923445]">
                Our Mission
              </h5>
              <p className="text-white/70 leading-relaxed text-lg">
                Committed to strengthening and growing Michigan's Clubhouse
                International Accredited Clubhouses through education, advocacy,
                and collaborative relationships that foster the goals of
                individual Clubhouses and members.
              </p>
            </div>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1E3C5D] flex items-center justify-center text-white/70 hover:bg-[#923445] hover:text-white transition-all duration-300"
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
                { name: "Home", href: "/" },
                { name: "Member Stories", href: "/member-stories" },
                { name: "Job Postings", href: "/jobs" },
                { name: "News & Media", href: "/news" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#923445] transition-colors"
                  >
                    {link.name}
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
                    className="text-white/70 hover:text-[#923445] transition-colors"
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
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 text-[#923445]" />
                <span>info@clubhousemichigan.org</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-[#923445]" />
                <span>Serving 30+ Counties throughout Michigan</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 text-[#923445]" />
                <span>(517) 555-0123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E3C5D] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>
            © {new Date().getFullYear()} Clubhouse Michigan. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Designed with</span>
            <Heart size={14} className="text-[#923445] fill-[#923445]" />
            <span className="font-script text-white/80 text-lg">
              for the Community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
