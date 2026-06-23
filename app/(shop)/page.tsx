"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Award, Star } from "lucide-react";


// Mock data representing a few premium unstitched 3-piece items
const featuredProducts = [
  { id: "1", name: "Classic Malhar Print", code: "AF-ML-01", price: 2800, discountPrice: 2450, image: "", subCategory: "Malhar Lawn" },
  { id: "2", name: "VIP Jam Jam Crimson Elegance", code: "AF-VJ-12", price: 3200, image: "", subCategory: "VIP Jam Jam" },
  { id: "3", name: "Bexi Batik Heritage Indigo", code: "AF-BB-07", price: 2600, image: "", subCategory: "Bexi Batik" },
  { id: "4", name: "Luxury Swiss Cotton Embroidered", code: "AF-SC-04", price: 4500, discountPrice: 3950, subCategory: "Swiss Cotton" },
];

const mainCollections = [
  { name: "Bexi Batik", desc: "Authentic traditional wax-resist dyed masterpieces on high-grade cotton base.", count: "18 Designs" },
  { name: "Digital Printed Lawn", desc: "Featuring premium A-Grade Jam Jam, VIP Jam Jam, Swiss Cotton, Malhar, and Karizma configurations.", count: "45 Designs" },
  { name: "Embroidery Based", desc: "Intricate, timeless Pakija embroidery works tailored for sophisticated elegance.", count: "22 Designs" },
  { name: "Pakistani Inspired", desc: "Global fashion statements crafted with premium local breathability.", count: "15 Designs" },
];

function ProductCard({ name, code, price, discountPrice, image, subCategory }: { name: string; code: string; price: number; discountPrice?: number; image?: string; subCategory: string; }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-pure-white rounded-3xl overflow-hidden border border-light-gray/40 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64 bg-charcoal/5 flex items-center justify-center">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center text-sm text-charcoal/70 px-6 text-center">
            <span className="font-semibold mb-1">{subCategory}</span>
            <span className="text-xs uppercase tracking-[0.2em]">Premium Textile</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">{subCategory}</span>
        <h3 className="font-display text-xl text-charcoal mt-3 mb-2">{name}</h3>
        <p className="text-xs text-charcoal/60 uppercase tracking-[0.2em] mb-4">{code}</p>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold text-charcoal">৳{discountPrice ?? price}</span>
          {discountPrice ? (
            <span className="text-sm text-charcoal/50 line-through">৳{price}</span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function HomePage() {
  return (
    <div className="bg-pure-white min-h-screen font-body text-charcoal overflow-x-hidden">
      
      {/* SECTION 1: Luxury Hero Banner */}
      <section className="relative h-[85vh] flex items-center justify-center bg-charcoal text-pure-white">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/40 z-10" />
        {/* Placeholder background image matching editorial theme */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a5a3e_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        
        <div className="relative z-20 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold tracking-[0.4em] uppercase text-xs sm:text-sm font-semibold mb-4"
          >
            Elegance in Every Stitch
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl mb-6 tracking-wide leading-tight"
          >
            Premium Bangladeshi <br /><span className="italic font-normal text-gold">Women's Fashion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-light-gray/80 text-sm sm:text-lg tracking-wide max-w-xl mb-10 font-light"
          >
            Inspired by Global Trends, Crafted with Care. Discover our signature 100% Cotton-based Unstitched Three-Piece Collections.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/collections" className="bg-forest text-pure-white px-8 py-4 tracking-[0.2em] text-xs uppercase font-medium hover:bg-gold transition-colors duration-300 rounded-xl shadow-lg shadow-forest/20">
              Shop Collections
            </Link>
            <a href="https://wa.me/8801531191282" target="_blank" rel="noopener noreferrer" className="border border-pure-white text-pure-white px-8 py-4 tracking-[0.2em] text-xs uppercase font-medium hover:bg-pure-white hover:text-charcoal transition-all duration-300 rounded-xl">
              WhatsApp Order
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Shop by Collection */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold block mb-2">Curated Trunk Shows</span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal tracking-wide">Shop By Collection</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {mainCollections.map((col, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-light-gray p-8 sm:p-12 rounded-xl flex flex-col justify-between border border-light-gray/50 hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-display text-2xl sm:text-3xl text-charcoal">{col.name}</h3>
                  <span className="text-xs text-gold font-semibold tracking-wider uppercase">{col.count}</span>
                </div>
                <p className="text-charcoal/60 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-md">
                  {col.desc}
                </p>
              </div>
              <Link href={`/collections/${col.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs tracking-[0.2em] text-forest font-semibold uppercase flex items-center gap-2 group-hover:text-gold transition-colors duration-300">
                Explore Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Featured Products */}
      <section className="py-20 bg-light-gray/40 border-y border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold block mb-2">In the Spotlight</span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal tracking-wide">Featured Layouts</h2>
            </div>
            <Link href="/collections" className="text-xs tracking-[0.2em] text-charcoal font-semibold uppercase border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors">
              View All Catalogue
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Why Choose Ahlia Fashion */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-5">
              <Award size={24} strokeWidth={1.5} />
            </div>
            <h4 className="font-display text-xl mb-2 text-charcoal">Premium Fabrics</h4>
            <p className="text-charcoal/60 text-sm font-light leading-relaxed px-4">Strictly handling 100% high-grade, unstitched cotton threads crafted for comfort and absolute breathability.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-5">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h4 className="font-display text-xl mb-2 text-charcoal">Quality Checked</h4>
            <p className="text-charcoal/60 text-sm font-light leading-relaxed px-4">Every piece undergoes rigorous inspection across dye resilience and stitch-ready weave continuity.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-5">
              <Truck size={24} strokeWidth={1.5} />
            </div>
            <h4 className="font-display text-xl mb-2 text-charcoal">Nationwide Delivery</h4>
            <p className="text-charcoal/60 text-sm font-light leading-relaxed px-4">Securely shipping directly to your doorstep all across Bangladesh with premium logistics handlers.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-5">
              <Star size={24} strokeWidth={1.5} />
            </div>
            <h4 className="font-display text-xl mb-2 text-charcoal">Affordable Luxury</h4>
            <p className="text-charcoal/60 text-sm font-light leading-relaxed px-4">Delivering elite catalog finishes at a competitive price point, directly honoring our customers.</p>
          </div>
        </div>
      </section>

      {/* SECTION 9: About Ahlia Fashion */}
      <section className="bg-forest text-pure-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold block mb-3">Our Heritage</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-8 tracking-wide">The Ahlia Story</h2>
          <p className="text-light-gray/80 text-base sm:text-lg font-light leading-relaxed mb-6 max-w-2xl mx-auto">
            Ahlia Fashion was founded by three passionate entrepreneurs dedicated to introducing elegant, trend-inspired, and uncompromised premium quality unstitched Three-Piece collections to the sophisticated modern woman across Bangladesh.
          </p>
          <p className="text-light-gray/75 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            We meticulously hand-select textile composites, seasonal palettes, artisan digital matrices, and embroidery drafts. Our promise is simple: a matchless balance of authentic luxurious textiles, structural longevity, and approachability.
          </p>
          <div className="mt-10 text-gold font-display text-lg italic tracking-widest">
            Crafted with care, designed for you.
          </div>
        </div>
      </section>
      
    </div>
  );
}