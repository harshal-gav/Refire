import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@shared/schema";

export function ProductGrid() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-background dark:bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            OUR <span className="text-accent">PRODUCT LINE</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground font-light">
            Discover our complete range of power solutions designed for every need - 
            from portable chargers to home backup systems.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden shadow-lg">
                <Skeleton className="h-64 w-full" />
                <div className="p-6">
                  <Skeleton className="h-7 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-10 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products?.map((product) => (
              <motion.div 
                key={product.id}
                className={cn(
                  "bg-card rounded-xl overflow-hidden shadow-lg",
                  "transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                )}
                variants={itemVariants}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    {product.bestSeller && (
                      <Badge className="bg-accent text-black text-xs px-2 py-1 rounded-full font-bold">
                        BEST SELLER
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{product.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${(product.price / 100).toFixed(2)}</span>
                    <Link href={`/products/${product.slug}`}>
                      <Button 
                        variant="default" 
                        size="sm"
                        className="bg-primary dark:bg-accent hover:bg-accent dark:hover:bg-white text-primary-foreground dark:text-black font-medium rounded-full"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mt-16 text-center">
          <Link href="/products">
            <a className={cn(
              "inline-block px-8 py-4 border-2 border-primary dark:border-white",
              "text-foreground dark:text-white font-bold uppercase tracking-wide rounded-full",
              "hover:border-accent hover:text-accent transition-colors hover:scale-105 transition-transform"
            )}>
              View All Products
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
