import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Radar, Eye, Crosshair, Satellite } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const capabilities = [
  {
    icon: Radar,
    title: "Reconnaissance UAV",
    description:
      "Long-endurance surveillance platforms with advanced sensor suites for strategic intelligence gathering and threat assessment.",
    specs: ["12+ Hour Endurance", "HD Thermal Imaging", "Real-time Data Link"],
  },
  {
    icon: Eye,
    title: "Surveillance Drone",
    description:
      "Compact, rapid-deployment systems designed for persistent monitoring of critical assets and perimeter security.",
    specs: ["Silent Operation", "360° Coverage", "AI Detection"],
  },
  {
    icon: Crosshair,
    title: "Tactical Platform",
    description:
      "High-performance tactical UAVs engineered for precision operations in contested environments.",
    specs: ["VTOL Capability", "EW Resistant", "Modular Payload"],
  },
  {
    icon: Satellite,
    title: "Command & Control",
    description:
      "Integrated ground control systems providing seamless multi-drone coordination and mission management.",
    specs: ["Multi-UAV Sync", "Encrypted Comms", "3D Mapping"],
  },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="capabilities"
      className="py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up" delay={0}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5">
              Our Systems
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="text-gradient">Capabilities</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg text-muted-foreground">
              A comprehensive suite of autonomous aerial platforms designed to
              meet the evolving demands of modern defense and surveillance
              operations.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-card rounded-2xl border border-border/50 p-8 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <capability.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {capability.description}
                </p>
                {/* Specs */}
                <div className="flex flex-wrap gap-2">
                  {capability.specs.map((spec, specIndex) => (
                    <motion.span
                      key={specIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + index * 0.15 + specIndex * 0.05,
                      }}
                      className="px-3 py-1 text-xs font-medium bg-background/50 border border-border rounded-full text-muted-foreground"
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
