import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Background"
          className="hero-image"
        />
      </div>

      {/* Hero Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight text-shadow">
          RELIABLE POWER<br />
          <span className="text-accent">ANYTIME, ANYWHERE</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
          Next-generation lithium-ion power solutions for professionals, adventurers, and everyday use.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/products">
            <a className={cn(
              "px-8 py-4 bg-accent text-black font-bold uppercase tracking-wide rounded-full",
              "hover:bg-white transition-colors neon-glow hover:scale-105 transition-transform"
            )}>
              Explore Products
            </a>
          </Link>
          <Link href="/about">
            <a className={cn(
              "px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wide rounded-full",
              "hover:border-accent hover:text-accent transition-colors hover:scale-105 transition-transform"
            )}>
              Learn More
            </a>
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="text-white h-8 w-8" />
      </motion.div>
    </section>
  );
}
