"use client";

import { motion } from "framer-motion";

export default function WhatsAppSticky() {
  return (
    <motion.a
      href="https://wa.me/8801531191282?text=Hello%20Ahlia%20Fashion,%20I%20have%20a%20query."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Gold Pulsing Ring */}
      <span className="absolute inset-0 rounded-full bg-gold opacity-40 animate-ping"></span>
      
      {/* Button Body */}
      <div className="relative w-14 h-14 bg-forest rounded-full shadow-luxury flex items-center justify-center border-2 border-gold/50 group-hover:border-gold transition-colors duration-300">
        <span className="text-pure-white text-2xl">💬</span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-charcoal text-pure-white text-xs tracking-wide px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Order via WhatsApp
      </div>
    </motion.a>
  );
}