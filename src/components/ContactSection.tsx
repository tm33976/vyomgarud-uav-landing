import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "./ScrollReveal";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@vyomgarud.com" },
    { icon: Phone, label: "Phone", value: "+91 8881444693" },
    { icon: MapPin, label: "Location", value: "India" },
  ];
  return (
    <section id="contact" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up" delay={0}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5">
              Get in Touch
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="text-gradient">Connect?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Have questions about our UAV systems? We're here to help you find 
              the right solution for your operational needs.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Reach out to discuss your requirements or schedule a demonstration 
                of our autonomous UAV systems.
              </p>
            </div>