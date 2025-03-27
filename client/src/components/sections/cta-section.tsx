import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              EXPERIENCE <span className="text-accent">POWER FREEDOM</span>
            </h2>
            <p className="text-xl mb-10 text-white/80 font-light">
              Join thousands of professionals and adventurers who've switched to Re-Fire for cleaner, 
              smarter, and more reliable portable power.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                className="floating"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/products">
                  <a className={cn(
                    "px-8 py-4 bg-accent text-black font-bold uppercase tracking-wide rounded-full",
                    "hover:bg-white transition-colors neon-glow block"
                  )}>
                    Shop Now
                  </a>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/support">
                  <a className={cn(
                    "px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wide rounded-full",
                    "hover:border-accent hover:text-accent transition-colors block"
                  )}>
                    Contact Us
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
