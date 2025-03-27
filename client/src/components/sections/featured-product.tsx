import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { Bolt, Gauge, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { type Product } from "@shared/schema";

export function FeaturedProduct() {
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products/power-nexus-3000"],
  });

  const features = [
    {
      icon: Bolt,
      title: "3000Wh Capacity",
      description: "Power all your essential devices for days, not hours."
    },
    {
      icon: Gauge,
      title: "Fast Charging",
      description: "80% charge in just 1.2 hours with our proprietary technology."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly & Silent",
      description: "Zero emissions, zero noise. Just clean, reliable power."
    }
  ];

  return (
    <section id="products" className="relative py-24 md:py-32 bg-secondary dark:bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              INTRODUCING<br />
              <span className="text-accent">POWER NEXUS 3000</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground dark:text-muted-foreground font-light leading-relaxed">
              Our flagship power station redefines portable energy with next-generation lithium-ion technology, 
              offering unparalleled capacity in an elegant, compact design.
            </p>
            
            <ul className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-accent text-3xl mt-1 transition-transform hover:scale-110">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={`/products/${isLoading ? '' : product?.slug}`}>
                <a className={cn(
                  "px-8 py-4 bg-primary dark:bg-accent text-primary-foreground dark:text-black",
                  "font-bold uppercase tracking-wide rounded-full transition-colors text-center",
                  "hover:bg-accent hover:text-black dark:hover:bg-white"
                )}>
                  {isLoading ? "Loading..." : `Buy Now - $${(product?.price || 0) / 100}`}
                </a>
              </Link>
              <Link href={`/products/${isLoading ? '' : product?.slug}`}>
                <a className={cn(
                  "px-8 py-4 border-2 border-primary dark:border-white",
                  "text-foreground dark:text-white font-bold uppercase tracking-wide rounded-full",
                  "hover:border-accent hover:text-accent transition-colors text-center"
                )}>
                  Learn More
                </a>
              </Link>
            </div>
          </div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {isLoading ? (
              <Skeleton className="h-[400px] w-full rounded-lg" />
            ) : (
              <img 
                src={product?.imageUrl} 
                alt={product?.name} 
                className="max-w-full rounded-lg shadow-2xl transition-transform hover:scale-105 duration-700"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
