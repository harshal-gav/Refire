import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SupportSection } from "@/components/sections/support-section";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  FileText, 
  Shield, 
  RefreshCw, 
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";

export default function Support() {
  const supportOptions = [
    {
      icon: FileText,
      title: "User Manuals",
      description: "Download detailed instructions and guides for your Re-Fire products",
      link: "/manuals"
    },
    {
      icon: Shield,
      title: "Warranty Information",
      description: "Learn about our warranty coverage and how to register your product",
      link: "/warranty"
    },
    {
      icon: RefreshCw,
      title: "Returns & Repairs",
      description: "Process returns or get your Re-Fire product serviced",
      link: "/returns"
    },
    {
      icon: MessageSquare,
      title: "FAQs",
      description: "Find answers to commonly asked questions",
      link: "#faqs"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team during business hours: 9AM-6PM EST",
      phone: "+1 (800) 555-1234"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a message and we'll respond within 24 hours",
      email: "support@re-fire.com"
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Support Hero */}
        <section className="relative pt-32 pb-24 bg-black text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1614624532603-58538c69b2af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80"
              alt="Support"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                WE'RE HERE TO <span className="text-accent">HELP</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Our support team is ready to assist you with any questions or issues you might have with your Re-Fire products.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Support Options */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 text-center">Support Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-accent/20 rounded-full mb-6">
                    <option.icon className="text-accent h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  
                  {option.link && (
                    <Link href={option.link}>
                      <a className="text-accent font-medium hover:underline">
                        {option.link.startsWith('#') ? 'View Below' : 'Learn More'}
                      </a>
                    </Link>
                  )}
                  
                  {option.phone && (
                    <a href={`tel:${option.phone.replace(/[^0-9+]/g, '')}`} className="text-accent font-medium hover:underline">
                      {option.phone}
                    </a>
                  )}
                  
                  {option.email && (
                    <a href={`mailto:${option.email}`} className="text-accent font-medium hover:underline">
                      {option.email}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQs and Contact Form */}
        <div id="faqs">
          <SupportSection />
        </div>
      </main>
      
      <Footer />
    </>
  );
}
