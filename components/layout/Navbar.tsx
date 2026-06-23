"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingBag, ChevronDown } from "lucide-react";

const collections = [
  {
    title: "Signature Unstitched",
    links: [
      { name: "Bexi Batik Collection", href: "/collections/bexi-batik" },
      { name: "Embroidery Based Collection", href: "/collections/embroidery" },
      { name: "Kalamkari Collection", href: "/collections/kalamkari" },
    ],
  },
  {
    title: "Digital Printed Lawn",
    links: [
      { name: "A-Grade Jam Jam", href: "/collections/digital-printed-lawn?sub=a-grade" },
      { name: "VIP Jam Jam", href: "/collections/digital-printed-lawn?sub=vip-jam-jam" },
      { name: "Swiss Cotton", href: "/collections/digital-printed-lawn?sub=swiss-cotton" },
      { name: "Malhar", href: "/collections/digital-printed-lawn?sub=malhar" },
      { name: "Karizma Jam Jam", href: "/collections/digital-printed-lawn?sub=karizma" },
    ],
  },
  {
    title: "Shop By Theme",
    links: [
      { name: "Pakistani Inspired", href: "/collections/pakistani-inspired" },
      { name: "Luxury Collection", href: "/collections/luxury" },
      { name: "Summer Collection", href: "/collections/summer" },
      { name: "New Arrivals", href: "/collections/new-arrivals" },
      { name: "Best Sellers", href: "/collections/best-sellers" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-pure-white shadow-luxury py-3" : "bg-pure-white/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-charcoal" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Left Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            <div 
              className="relative" 
              onMouseEnter={() => setMegaMenuOpen(true)} 
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="text-charcoal hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide flex items-center gap-1 uppercase">
                Collections <ChevronDown size={14} className={`transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-pure-white shadow-luxury border border-light-gray p-10 grid grid-cols-3 gap-12"
                  >
                    {collections.map((col) => (
                      <div key={col.title}>
                        <h3 className="font-display text-lg text-forest mb-4 border-b border-gold/30 pb-2">
                          {col.title}
                        </h3>
                        <ul className="space-y-3">
                          {col.links.map((link) => (
                            <li key={link.name}>
                              <Link 
                                href={link.href} 
                                className="text-sm text-charcoal/70 hover:text-gold transition-colors duration-200 block"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/collections/best-sellers" className="text-charcoal hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide uppercase">
              Best Sellers
            </Link>
          </nav>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 text-center">
            <h1 className="font-display text-3xl md:text-4xl text-forest tracking-wider">
              Ahlia
            </h1>
            <p className="text-[10px] tracking-[0.3em] text-gold uppercase mt-1 hidden md:block">
              Fashion
            </p>
          </Link>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-end">
            <Link href="/about" className="text-charcoal hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide uppercase">
              About
            </Link>
            <button className="text-charcoal hover:text-gold transition-colors duration-300" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="text-charcoal hover:text-gold transition-colors duration-300" aria-label="Cart">
              <ShoppingBag size={20} />
            </button>
          </nav>
          
          <div className="md:hidden">
             <button className="text-charcoal" aria-label="Cart">
               <ShoppingBag size={22} />
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-pure-white z-50 p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display text-2xl text-forest">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-charcoal hover:text-gold">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-8">
              {collections.map((col) => (
                <div key={col.title}>
                  <h3 className="font-display text-lg text-forest mb-4 border-b border-gold/30 pb-2">
                    {col.title}
                  </h3>
                  <ul className="space-y-3 pl-2">
                    {col.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="text-sm text-charcoal/80 hover:text-gold transition-colors block"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}