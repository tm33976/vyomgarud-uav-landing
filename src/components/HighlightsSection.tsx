import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const highlights = [
  {
    title: "Battle-Tested Reliability",
    description:
      "Our systems undergo rigorous testing in extreme conditions, ensuring dependable performance when it matters most.",
  },
  {
    title: "Advanced AI Integration",
    description:
      "Proprietary machine learning algorithms enable autonomous decision-making, threat detection, and adaptive mission execution.",
  },
  {
    title: "Modular Architecture",
    description:
      "Flexible payload configurations and rapid field serviceability allow mission-specific customization without downtime.",
  },
];

const HighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="highlights" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up" delay={0}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5">
              Why VyomGarud
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineered for{" "}
              <span className="text-gradient">Excellence</span>
            </h2>
          </ScrollReveal>
        </div>