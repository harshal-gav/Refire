import { useQuery } from "@tanstack/react-query";
import { Comparison, Feature } from "@shared/schema";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  LucideIcon,
  Zap, 
  Sun, 
  Smartphone
} from "lucide-react";

// Map icon string from DB to Lucide icon component
const iconMap: Record<string, LucideIcon> = {
  "bolt": Zap,
  "solar-panel": Sun,
  "mobile-alt": Smartphone,
};

export function ComparisonSection() {
  const { data: comparisons, isLoading: isLoadingComparisons } = useQuery<Comparison[]>({
    queryKey: ["/api/comparisons"],
  });

  const { data: features, isLoading: isLoadingFeatures } = useQuery<Feature[]>({
    queryKey: ["/api/features"],
  });

  return (
    <section id="features" className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            WHY <span className="text-accent">RE-FIRE?</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-white/80 font-light">
            Experience the future of portable power, designed to outperform traditional generators in every way.
          </p>
        </div>

        <div className="overflow-x-auto">
          {isLoadingComparisons ? (
            <div className="space-y-4 mb-16">
              <Skeleton className="h-12 w-full bg-gray-800" />
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-16 w-full bg-gray-800" />
              ))}
            </div>
          ) : (
            <table className="w-full min-w-[768px] mb-16">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 px-4 text-left font-bold text-lg">Features</th>
                  <th className="py-4 px-4 text-center font-bold text-lg text-accent">Re-Fire Power Nexus</th>
                  <th className="py-4 px-4 text-center font-bold text-lg text-white/70">Traditional Generators</th>
                </tr>
              </thead>
              <tbody>
                {comparisons?.map((comparison, index) => (
                  <motion.tr 
                    key={comparison.id} 
                    className="border-b border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-5 px-4 font-medium">{comparison.feature}</td>
                    <td className="py-5 px-4 text-center font-medium text-accent">{comparison.refireValue}</td>
                    <td className="py-5 px-4 text-center text-white/70">{comparison.traditionalValue}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoadingFeatures ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-refire-dark p-8 rounded-xl">
                <Skeleton className="w-16 h-16 rounded-full bg-gray-800 mb-6" />
                <Skeleton className="h-7 w-3/4 bg-gray-800 mb-4" />
                <Skeleton className="h-4 w-full bg-gray-800" />
                <Skeleton className="h-4 w-full bg-gray-800 mt-2" />
              </div>
            ))
          ) : (
            features?.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Zap;
              
              return (
                <motion.div 
                  key={feature.id}
                  className="bg-gray-900 p-8 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-accent/20 rounded-full mb-6">
                    <IconComponent className="text-accent h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
