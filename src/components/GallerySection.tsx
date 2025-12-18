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