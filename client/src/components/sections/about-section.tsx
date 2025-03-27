import { Link } from "wouter";
import { motion } from "framer-motion";

export function AboutSection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Team working"
    },
    {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Power station in use"
    },
    {
      src: "https://images.unsplash.com/photo-1581093196277-9f678c7ba3c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Product design"
    },
    {
      src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Solar charging"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-secondary dark:bg-gradient-to-b dark:from-background dark:to-card relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              OUR <span className="text-accent">STORY</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground font-light leading-relaxed">
              Founded by a team of energy engineers and outdoor enthusiasts, Re-Fire was born from a simple frustration: 
              traditional power solutions were noisy, dirty, and unreliable.
            </p>
            <p className="text-lg mb-6 text-muted-foreground font-light leading-relaxed">
              We set out to create power solutions that were as clean and elegant as they were powerful and dependable. 
              After years of R&D, we developed our proprietary lithium-ion technology that delivers unmatched performance 
              in a package that feels like it belongs in your home, not your garage.
            </p>
            <p className="text-lg mb-10 text-muted-foreground font-light leading-relaxed">
              Today, Re-Fire powers everything from remote film productions to emergency medical equipment, 
              with the same commitment to quality, sustainability, and design excellence that inspired our first product.
            </p>
            <div>
              <Link href="/about">
                <a className="inline-block px-8 py-4 bg-primary dark:bg-accent text-white dark:text-black font-bold uppercase tracking-wide rounded-full hover:bg-accent hover:text-black dark:hover:bg-white transition-colors hover:scale-105 transition-transform">
                  Learn More About Us
                </a>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {images.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg shadow-xl h-64 object-cover w-full hover:shadow-2xl transition-shadow duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
