import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

// Import gallery images
import reconImage from "@/assets/gallery-reconnaissance.jpg";
import urbanImage from "@/assets/gallery-urban.jpg";
import rescueImage from "@/assets/gallery-rescue.jpg";
import maritimeImage from "@/assets/gallery-maritime.jpg";
import borderImage from "@/assets/gallery-border.jpg";
import inspectionImage from "@/assets/gallery-inspection.jpg";

const galleryItems = [
  {
    id: 1,
    image: reconImage,
    title: "Desert Reconnaissance",
    category: "Surveillance",
    description: "Long-range reconnaissance mission in arid terrain with advanced thermal imaging capabilities.",
  },
  {
    id: 2,
    image: urbanImage,
    title: "Urban Operations",
    category: "Tactical",
    description: "Night-time urban surveillance providing real-time situational awareness in complex environments.",
  },
  {
    id: 3,
    image: rescueImage,
    title: "Search & Rescue",
    category: "Emergency",
    description: "Mountain search and rescue operations with high-powered spotlights and thermal detection.",
  },
  {
    id: 4,
    image: maritimeImage,
    title: "Maritime Logistics",
    category: "Naval",
    description: "Heavy-lift cargo delivery drone supporting naval vessel resupply operations at sea.",
  },
  {
    id: 5,
    image: borderImage,
    title: "Border Security",
    category: "Defense",
    description: "Perimeter surveillance along critical border infrastructure with AI-powered threat detection.",
  },
  {
    id: 6,
    image: inspectionImage,
    title: "Infrastructure Inspection",
    category: "Industrial",
    description: "Precision inspection of electrical infrastructure for preventive maintenance.",
  },
];
const categories = ["All", "Surveillance", "Tactical", "Emergency", "Naval", "Defense", "Industrial"];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  return (
    <section id="gallery" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal direction="up" delay={0}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5">
              Mission Portfolio
            </span>
          </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="text-gradient">Operations</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Explore our diverse range of successful mission deployments across 
              defense, surveillance, and emergency response operations.
            </p>
          </ScrollReveal>
        </div>

        {/* Category Filter */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-semibold text-primary uppercase tracking-wider mb-2"
                  >
                    {item.category}
                  </motion.span>
                  <motion.h3 
                    className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted-foreground line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {item.description}
                  </motion.p>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;