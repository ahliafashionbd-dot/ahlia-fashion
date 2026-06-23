"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  code: string;
  price: number;
  discountPrice?: number;
  image: string;
  subCategory?: string;
}

export default function ProductCard({ id, name, code, price, discountPrice, image, subCategory }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappMessage = `Hello Ahlia Fashion, I am interested in ordering:\n\n*Product:* ${name}\n*Code:* ${code}\n*Price:* ৳${discountPrice || price}\n\nIs it available?`;
  const whatsappLink = `https://wa.me/8801531191282?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div 
      className="group relative bg-pure-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-light-gray">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-[1.2s] ease-out ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        
        {/* Editorial Sub-category Tag */}
        {subCategory && (
          <div className="absolute top-4 left-4 bg-pure-white/90 backdrop-blur-sm px-3 py-1">
            <span className="text-[10px] tracking-[0.2em] text-forest uppercase">{subCategory}</span>
          </div>
        )}

        {/* Hover Overlay Actions */}
        <div className={`absolute inset-0 bg-charcoal/20 flex items-end justify-center p-4 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col gap-2 w-full">
            <button className="w-full bg-pure-white text-charcoal py-3 text-xs tracking-[0.2em] uppercase hover:bg-forest hover:text-pure-white transition-colors duration-300 flex items-center justify-center gap-2">
              <Eye size={14} /> Quick View
            </button>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-forest text-pure-white py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <span>💬</span> Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="pt-4 text-center">
        <p className="text-[10px] tracking-[0.2em] text-gold uppercase mb-1">Code: {code}</p>
        <h3 className="font-display text-lg text-charcoal mb-2 truncate">{name}</h3>
        <div className="flex items-center justify-center gap-2">
          {discountPrice ? (
            <>
              <span className="text-charcoal/50 line-through text-sm">৳{price}</span>
              <span className="text-forest font-medium text-md">৳{discountPrice}</span>
            </>
          ) : (
            <span className="text-forest font-medium text-md">৳{price}</span>
          )}
        </div>
        <p className="text-[10px] text-charcoal/40 mt-1 tracking-wide">Unstitched 3 Piece</p>
      </div>
    </motion.div>
  );
}