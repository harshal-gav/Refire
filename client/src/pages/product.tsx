import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Product } from "@shared/schema";
import { Bolt, Gauge, Leaf, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

export default function ProductPage() {
  const { toast } = useToast();
  const [match, params] = useRoute("/products/:slug");
  const slug = params?.slug;
  
  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: [`/api/products/${slug}`],
    enabled: !!slug,
  });
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product?.name} has been added to your cart.`,
      variant: "default",
    });
  };
  
  if (!match) {
    return null;
  }
  
  if (error) {
    return (
      <>
        <Header />
        <div className="container mx-auto py-32 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p>Sorry, we couldn't find the product you're looking for.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Skeleton className="h-12 w-3/4 mb-6" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-8" />
                
                <div className="space-y-6 mb-10">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <Skeleton className="h-10 w-10 mt-1" />
                      <div className="flex-1">
                        <Skeleton className="h-6 w-1/2 mb-2" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Skeleton className="h-12 w-36" />
                  <Skeleton className="h-12 w-36" />
                </div>
              </div>
              
              <Skeleton className="h-[500px] w-full rounded-lg" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">{product?.name}</h1>
                <p className="text-3xl font-bold mb-6 text-accent">${(product?.price || 0) / 100}</p>
                <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                  {product?.description}
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <div className="text-accent text-3xl mt-1">
                      <Bolt className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{product?.capacity} Capacity</h3>
                      <p className="text-muted-foreground">Power all your essential devices for days, not hours.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-accent text-3xl mt-1">
                      <Gauge className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Fast Charging</h3>
                      <p className="text-muted-foreground">80% charge in just 1.2 hours with our proprietary technology.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-accent text-3xl mt-1">
                      <Leaf className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Eco-Friendly & Silent</h3>
                      <p className="text-muted-foreground">Zero emissions, zero noise. Just clean, reliable power.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    size="lg"
                    className="bg-primary dark:bg-accent text-white dark:text-black font-bold uppercase rounded-full hover:bg-accent hover:text-black dark:hover:bg-white"
                    onClick={addToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary dark:border-white text-foreground dark:text-white font-bold uppercase rounded-full hover:border-accent hover:text-accent"
                  >
                    Technical Specs
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src={product?.imageUrl} 
                  alt={product?.name} 
                  className="max-w-full rounded-lg shadow-2xl transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
}
