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
    <section id="capabilities" className="py-32 bg-secondary/30 relative overflow-hidden">
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
              Advanced{" "}
              <span className="text-gradient">Capabilities</span>
            </h2>
          </ScrollReveal>