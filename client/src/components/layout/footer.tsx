import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Link href="/">
              <a className="inline-block mb-6">
                <span className="text-3xl font-bold tracking-tight uppercase">
                  RE-<span className="text-accent">FIRE</span>
                </span>
              </a>
            </Link>
            <p className="text-white/70 mb-6">
              Next-generation lithium-ion power solutions for a cleaner, quieter, and more sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/power-nexus-5000">
                  <a className="text-white/70 hover:text-accent transition-colors">Power Nexus 5000</a>
                </Link>
              </li>
              <li>
                <Link href="/products/power-nexus-3000">
                  <a className="text-white/70 hover:text-accent transition-colors">Power Nexus 3000</a>
                </Link>
              </li>
              <li>
                <Link href="/products/power-nexus-1000">
                  <a className="text-white/70 hover:text-accent transition-colors">Power Nexus 1000</a>
                </Link>
              </li>
              <li>
                <Link href="/products/power-nexus-mini">
                  <a className="text-white/70 hover:text-accent transition-colors">Power Nexus Mini</a>
                </Link>
              </li>
              <li>
                <Link href="/products/solar-panels">
                  <a className="text-white/70 hover:text-accent transition-colors">Solar Panels</a>
                </Link>
              </li>
              <li>
                <Link href="/products/accessories">
                  <a className="text-white/70 hover:text-accent transition-colors">Accessories</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-white/70 hover:text-accent transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/technology">
                  <a className="text-white/70 hover:text-accent transition-colors">Technology</a>
                </Link>
              </li>
              <li>
                <Link href="/sustainability">
                  <a className="text-white/70 hover:text-accent transition-colors">Sustainability</a>
                </Link>
              </li>
              <li>
                <Link href="/press">
                  <a className="text-white/70 hover:text-accent transition-colors">Press</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="text-white/70 hover:text-accent transition-colors">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/70 hover:text-accent transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support">
                  <a className="text-white/70 hover:text-accent transition-colors">Help Center</a>
                </Link>
              </li>
              <li>
                <Link href="/support#faqs">
                  <a className="text-white/70 hover:text-accent transition-colors">FAQs</a>
                </Link>
              </li>
              <li>
                <Link href="/manuals">
                  <a className="text-white/70 hover:text-accent transition-colors">User Manuals</a>
                </Link>
              </li>
              <li>
                <Link href="/warranty">
                  <a className="text-white/70 hover:text-accent transition-colors">Warranty</a>
                </Link>
              </li>
              <li>
                <Link href="/returns">
                  <a className="text-white/70 hover:text-accent transition-colors">Returns</a>
                </Link>
              </li>
              <li>
                <Link href="/support#contact">
                  <a className="text-white/70 hover:text-accent transition-colors">Contact Support</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Re-Fire Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/50">
            <Link href="/privacy">
              <a className="hover:text-accent transition-colors">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-accent transition-colors">Terms of Service</a>
            </Link>
            <Link href="/shipping">
              <a className="hover:text-accent transition-colors">Shipping Policy</a>
            </Link>
          </div>
        </div>
      </div>

      {/* Green glow effect in footer */}
      <div className="footer-glow"></div>
    </footer>
  );
}
