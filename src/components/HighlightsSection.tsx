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