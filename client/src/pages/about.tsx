import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-black text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80"
              alt="Re-Fire team"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-center">
                ABOUT <span className="text-accent">RE-FIRE</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
                We're revolutionizing portable power with next-generation lithium-ion technology,
                creating solutions that are as elegant as they are powerful.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Founded in 2018 by a team of energy engineers and outdoor enthusiasts, Re-Fire was born from 
                  a simple frustration: traditional power solutions were noisy, dirty, and unreliable.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  After experiencing one too many ruined camping trips due to failed generators and dead batteries, 
                  our founders decided to create the reliable, eco-friendly power solution they wished existed.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  What started as a passion project quickly evolved into a mission to revolutionize portable power. 
                  After three years of R&D, we launched our first product, the Power Nexus 1000, which immediately 
                  gained a cult following among outdoor enthusiasts and professionals alike.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Re-Fire team" 
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-24 bg-secondary dark:bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-background dark:bg-background p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-accent">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly pushing the boundaries of what's possible in portable power technology, 
                  investing heavily in R&D to deliver solutions that haven't existed before.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background dark:bg-background p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-accent">Sustainability</h3>
                <p className="text-muted-foreground">
                  Our products are designed with environmental impact in mind, from zero-emission operation 
                  to recyclable components and packaging made from recycled materials.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-background dark:bg-background p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-accent">Reliability</h3>
                <p className="text-muted-foreground">
                  We understand that when you need power, you really need it. That's why every Re-Fire 
                  product undergoes rigorous testing to ensure it performs when it matters most.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="Michael Chen" 
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-accent font-medium mb-2">CEO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Former Tesla battery engineer with a passion for outdoor adventures.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="Sarah Johnson" 
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-accent font-medium mb-2">CTO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Electrical engineering PhD with expertise in power management systems.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="David Lee" 
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">David Lee</h3>
                <p className="text-accent font-medium mb-2">Head of Design</p>
                <p className="text-muted-foreground text-sm">
                  Industrial designer focused on creating functional yet beautiful products.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="Emma Rodriguez" 
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">Emma Rodriguez</h3>
                <p className="text-accent font-medium mb-2">Head of Sustainability</p>
                <p className="text-muted-foreground text-sm">
                  Environmental scientist ensuring our products minimize ecological impact.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
