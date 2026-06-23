"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

// Custom TikTok Icon as it's not in Lucide
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-forest text-pure-white pt-20 pb-8 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h2 className="font-display text-3xl mb-4 text-gold">Ahlia Fashion</h2>
            <p className="text-pure-white/70 text-sm leading-relaxed mb-6">
              Elegance in Every Stitch. Premium 100% cotton unstitched three-piece collections designed for the modern Bangladeshi woman.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/AhliaFashion" target="_blank" rel="noreferrer" className="text-pure-white/60 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/AhliaFashion" target="_blank" rel="noreferrer" className="text-pure-white/60 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com/@AhliaFashion" target="_blank" rel="noreferrer" className="text-pure-white/60 hover:text-gold transition-colors">
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/collections/new-arrivals" className="text-pure-white/70 hover:text-pure-white transition-colors">New Arrivals</Link></li>
              <li><Link href="/collections/best-sellers" className="text-pure-white/70 hover:text-pure-white transition-colors">Best Sellers</Link></li>
              <li><Link href="/collections/digital-printed-lawn" className="text-pure-white/70 hover:text-pure-white transition-colors">Digital Printed Lawn</Link></li>
              <li><Link href="/collections/pakistani-inspired" className="text-pure-white/70 hover:text-pure-white transition-colors">Pakistani Inspired</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Customer Care</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy-policy" className="text-pure-white/70 hover:text-pure-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/exchange-policy" className="text-pure-white/70 hover:text-pure-white transition-colors">Exchange Policy</Link></li>
              <li><Link href="/delivery-info" className="text-pure-white/70 hover:text-pure-white transition-colors">Delivery Information</Link></li>
              <li><Link href="/faq" className="text-pure-white/70 hover:text-pure-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm text-pure-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-gold flex-shrink-0" />
                <span>Barishal, Bakergonj Municipality, TNT Road, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+8801827924443" className="hover:text-pure-white transition-colors">+880 1827-924443</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold flex-shrink-0">💬</span>
                <a href="https://wa.me/8801531191282" target="_blank" rel="noreferrer" className="hover:text-pure-white transition-colors">01531-191282 (WhatsApp)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pure-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-pure-white/50 tracking-wide">
            © {new Date().getFullYear()} Ahlia Fashion. Crafted with care, designed for you.
          </p>
          <p className="text-xs text-pure-white/50 tracking-wide">
            Made in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}