import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ShoppingCart } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled && "bg-white/90 dark:bg-refire-black/90 backdrop-blur-md shadow-md"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center z-10">
          <span className="text-2xl font-bold tracking-tight uppercase">
            RE-<span className="text-accent">FIRE</span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide">
          <Link href="/products" className="hover:text-accent transition-colors">
            Products
          </Link>
          <Link href="/#features" className="hover:text-accent transition-colors">
            Features
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/support" className="hover:text-accent transition-colors">
            Support
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <Link href="/cart" className="hidden md:flex items-center space-x-2 hover:text-accent transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart (0)</span>
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-background absolute w-full left-0 py-4 shadow-lg transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-3 text-center font-medium uppercase tracking-wide">
          <Link href="/products" className="py-2 hover:text-accent transition-colors">
            Products
          </Link>
          <Link href="/#features" className="py-2 hover:text-accent transition-colors">
            Features
          </Link>
          <Link href="/about" className="py-2 hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/support" className="py-2 hover:text-accent transition-colors">
            Support
          </Link>
          <Link href="/cart" className="py-2 hover:text-accent transition-colors">
            Cart (0)
          </Link>
        </div>
      </div>
    </header>
  );
}
