import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { ProductGrid } from "@/components/sections/product-grid";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";
import { SupportSection } from "@/components/sections/support-section";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="overflow-hidden">
        <HeroSection />
        <FeaturedProduct />
        <ProductGrid />
        <ComparisonSection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
        <SupportSection />
      </main>
      
      {/* Floating Cart Button */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <Link href="/cart">
          <Button 
            size="icon" 
            className="w-16 h-16 rounded-full bg-accent text-black hover:bg-white transition-colors neon-glow shadow-lg"
          >
            <ShoppingCart className="h-6 w-6" />
          </Button>
        </Link>
      </div>
      
      <Footer />
    </>
  );
}
