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
