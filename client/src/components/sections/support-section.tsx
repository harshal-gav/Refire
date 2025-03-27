import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FAQ, insertContactMessageSchema, InsertContactMessage } from "@shared/schema";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, ChevronUp } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="mb-4 border-b border-gray-300/20 dark:border-gray-700/20 pb-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {faq.question}
        {isOpen ? (
          <ChevronUp className="text-muted-foreground h-5 w-5" />
        ) : (
          <ChevronDown className="text-muted-foreground h-5 w-5" />
        )}
      </button>
      
      <div 
        className={`mt-2 text-muted-foreground transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {faq.answer}
      </div>
    </div>
  );
}

export function SupportSection() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const { data: faqs, isLoading: isLoadingFaqs } = useQuery<FAQ[]>({
    queryKey: ["/api/faqs"],
  });
  
  // Contact form
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "Pre-Sales Question",
      message: "",
    },
  });
  
  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };
  
  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="support" className="py-24 bg-background dark:bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            SUPPORT & <span className="text-accent">FAQs</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground font-light">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ Accordion */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            
            {isLoadingFaqs ? (
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="mb-4 pb-4 border-b border-gray-300/20 dark:border-gray-700/20">
                  <Skeleton className="h-7 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {faqs?.map((faq) => (
                  <FAQItem 
                    key={faq.id}
                    faq={faq}
                    isOpen={openFaqId === faq.id}
                    onToggle={() => toggleFaq(faq.id)}
                  />
                ))}
              </motion.div>
            )}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="bg-secondary dark:bg-background border border-gray-300/30 dark:border-gray-700/30 rounded-lg focus:ring-accent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Your email address" 
                          {...field} 
                          className="bg-secondary dark:bg-background border border-gray-300/30 dark:border-gray-700/30 rounded-lg focus:ring-accent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-secondary dark:bg-background border border-gray-300/30 dark:border-gray-700/30 rounded-lg focus:ring-accent">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pre-Sales Question">Pre-Sales Question</SelectItem>
                          <SelectItem value="Technical Support">Technical Support</SelectItem>
                          <SelectItem value="Warranty Claim">Warranty Claim</SelectItem>
                          <SelectItem value="Business Inquiry">Business Inquiry</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          rows={4} 
                          {...field} 
                          className="bg-secondary dark:bg-background border border-gray-300/30 dark:border-gray-700/30 rounded-lg focus:ring-accent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary dark:bg-accent text-white dark:text-black font-bold rounded-lg hover:bg-accent hover:text-black dark:hover:bg-white"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
