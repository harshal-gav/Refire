import { 
  users, type User, type InsertUser,
  products, type Product, type InsertProduct,
  testimonials, type Testimonial, type InsertTestimonial,
  faqs, type FAQ, type InsertFAQ,
  features, type Feature, type InsertFeature,
  comparisons, type Comparison, type InsertComparison,
  contactMessages, type ContactMessage, type InsertContactMessage
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getProductById(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // FAQs
  getFAQs(): Promise<FAQ[]>;
  createFAQ(faq: InsertFAQ): Promise<FAQ>;
  
  // Features
  getFeatures(): Promise<Feature[]>;
  createFeature(feature: InsertFeature): Promise<Feature>;
  
  // Comparisons
  getComparisons(): Promise<Comparison[]>;
  createComparison(comparison: InsertComparison): Promise<Comparison>;
  
  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private faqs: Map<number, FAQ>;
  private features: Map<number, Feature>;
  private comparisons: Map<number, Comparison>;
  private contactMessages: Map<number, ContactMessage>;
  
  private currentUserId: number;
  private currentProductId: number;
  private currentTestimonialId: number;
  private currentFaqId: number;
  private currentFeatureId: number;
  private currentComparisonId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.testimonials = new Map();
    this.faqs = new Map();
    this.features = new Map();
    this.comparisons = new Map();
    this.contactMessages = new Map();
    
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentTestimonialId = 1;
    this.currentFaqId = 1;
    this.currentFeatureId = 1;
    this.currentComparisonId = 1;
    this.currentContactMessageId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug,
    );
  }
  
  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
  
  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  // FAQs
  async getFAQs(): Promise<FAQ[]> {
    return Array.from(this.faqs.values()).sort((a, b) => a.order - b.order);
  }
  
  async createFAQ(insertFAQ: InsertFAQ): Promise<FAQ> {
    const id = this.currentFaqId++;
    const faq: FAQ = { ...insertFAQ, id };
    this.faqs.set(id, faq);
    return faq;
  }
  
  // Features
  async getFeatures(): Promise<Feature[]> {
    return Array.from(this.features.values());
  }
  
  async createFeature(insertFeature: InsertFeature): Promise<Feature> {
    const id = this.currentFeatureId++;
    const feature: Feature = { ...insertFeature, id };
    this.features.set(id, feature);
    return feature;
  }
  
  // Comparisons
  async getComparisons(): Promise<Comparison[]> {
    return Array.from(this.comparisons.values()).sort((a, b) => a.order - b.order);
  }
  
  async createComparison(insertComparison: InsertComparison): Promise<Comparison> {
    const id = this.currentComparisonId++;
    const comparison: Comparison = { ...insertComparison, id };
    this.comparisons.set(id, comparison);
    return comparison;
  }
  
  // Contact Messages
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  // Initialize data
  private initializeData() {
    // Add products
    this.createProduct({
      name: "Power Nexus 1000",
      slug: "power-nexus-1000",
      description: "The Power Nexus 1000 is our compact yet powerful solution, perfect for weekend adventures and powering small devices. With a 1000Wh capacity, it's ideal for campers, photographers, and anyone needing reliable, portable power.",
      shortDescription: "1000Wh capacity, perfect for weekend adventures and small devices.",
      price: 79900, // $799.00
      imageUrl: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "1000Wh",
      bestSeller: false
    });
    
    this.createProduct({
      name: "Power Nexus 3000",
      slug: "power-nexus-3000",
      description: "Our flagship power station redefines portable energy with next-generation lithium-ion technology, offering unparalleled capacity in an elegant, compact design. The Power Nexus 3000 provides 3000Wh of capacity, designed for extended use and home backup.",
      shortDescription: "Our flagship 3000Wh unit, designed for extended use and home backup.",
      price: 199900, // $1,999.00
      imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      capacity: "3000Wh",
      bestSeller: true
    });
    
    this.createProduct({
      name: "Power Nexus Mini",
      slug: "power-nexus-mini",
      description: "The Power Nexus Mini packs impressive power in our most portable form factor yet. With 300Wh capacity, it's the perfect companion for mobile professionals, travelers, and daily use. Charge laptops, phones, cameras, and small devices on the go.",
      shortDescription: "300Wh ultra-portable power for mobile professionals and daily use.",
      price: 29900, // $299.00
      imageUrl: "https://images.unsplash.com/photo-1610785396703-70a0b45cab76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "300Wh",
      bestSeller: false
    });
    
    // Add testimonials
    this.createTestimonial({
      name: "Sarah J.",
      role: "Wildlife Photographer",
      content: "As a professional photographer in remote locations, reliable power is non-negotiable. The Re-Fire Power Nexus has been a game-changer for my workflow.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    });
    
    this.createTestimonial({
      name: "Mark T.",
      role: "Tech Reviewer",
      content: "I've tested dozens of power stations, and Re-Fire stands head and shoulders above the competition. The build quality is exceptional, and performance exceeds specs.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    });
    
    this.createTestimonial({
      name: "David L.",
      role: "Construction Manager",
      content: "We deployed Re-Fire units at our construction sites and saw immediate benefits. Silent operation, zero emissions, and reliable power have improved our workflow.",
      rating: 4.5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    });
    
    // Add FAQs
    this.createFAQ({
      question: "How long will a Re-Fire power station last?",
      answer: "Re-Fire power stations are built with high-quality lithium-ion cells with a lifespan of 800+ charge cycles to 80% capacity. With average use, this translates to 5-7 years of reliable service.",
      order: 1
    });
    
    this.createFAQ({
      question: "Can I charge my Re-Fire from solar panels?",
      answer: "Yes, all Re-Fire power stations feature MPPT controllers for efficient solar charging. We recommend our compatible solar panels for optimal performance, but any panel with the correct voltage range will work.",
      order: 2
    });
    
    this.createFAQ({
      question: "What is your warranty policy?",
      answer: "All Re-Fire products come with a standard 2-year warranty. Register your product to extend to 3 years at no additional cost. Our Premium Protection Plan extends coverage to 5 years and includes accidental damage.",
      order: 3
    });
    
    this.createFAQ({
      question: "Can Re-Fire power my home during an outage?",
      answer: "The Power Nexus 3000 and 5000 models can power essential home appliances during outages. For whole-home backup, consider our Home Integration Kit with automatic transfer switch for seamless power switching.",
      order: 4
    });
    
    // Add features
    this.createFeature({
      title: "Smart Power Management",
      description: "Advanced BMS optimizes power distribution and protects connected devices from surges.",
      icon: "bolt"
    });
    
    this.createFeature({
      title: "Solar Ready",
      description: "High-efficiency MPPT controller for optimal solar charging in any conditions.",
      icon: "solar-panel"
    });
    
    this.createFeature({
      title: "Mobile App Control",
      description: "Monitor power usage, charge levels, and control your unit remotely with our intuitive app.",
      icon: "mobile-alt"
    });
    
    // Add comparisons
    this.createComparison({
      feature: "Noise Level",
      refireValue: "Silent Operation (0db)",
      traditionalValue: "Loud (60-70db)",
      order: 1
    });
    
    this.createComparison({
      feature: "Emissions",
      refireValue: "Zero Emissions",
      traditionalValue: "CO2, CO, NOx emissions",
      order: 2
    });
    
    this.createComparison({
      feature: "Indoor Use",
      refireValue: "Safe for Indoor Use",
      traditionalValue: "Dangerous, Risk of CO poisoning",
      order: 3
    });
    
    this.createComparison({
      feature: "Maintenance",
      refireValue: "Maintenance-Free",
      traditionalValue: "Regular oil changes, filter replacements",
      order: 4
    });
    
    this.createComparison({
      feature: "Ongoing Costs",
      refireValue: "Recharge Only",
      traditionalValue: "Fuel costs, maintenance parts",
      order: 5
    });
    
    this.createComparison({
      feature: "Smart Features",
      refireValue: "App control, monitoring, upgrades",
      traditionalValue: "None",
      order: 6
    });
  }
}

export const storage = new MemStorage();
