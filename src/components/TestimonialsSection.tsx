import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const testimonials = [
  {
    quote: "VyomGarud's reconnaissance capabilities have revolutionized our border surveillance operations. The precision and reliability are unmatched.",
    author: "Col. Rajesh Kumar",
    organization: "Indian Border Security Force",
    rating: 5,
  },
  {
    quote: "Their maritime patrol drones have significantly enhanced our coastal security monitoring. A game-changer for naval operations.",
    author: "Rear Admiral S. Nair",
    organization: "Indian Navy",
    rating: 5,
  },
  {
    quote: "The autonomous flight capabilities and real-time data transmission have proven invaluable for our disaster response missions.",
    author: "Dr. Priya Sharma",
    organization: "National Disaster Response Force",
    rating: 5,
  },
  {
    quote: "VyomGarud delivers military-grade performance with exceptional support. Their drones exceed our operational requirements.",
    author: "Brig. Amit Singh",
    organization: "Indian Army Aviation Corps",
    rating: 5,
  },
];

const clientLogos = [
  { name: "Indian Army", initials: "IA" },
  { name: "Indian Navy", initials: "IN" },
  { name: "Indian Air Force", initials: "IAF" },
  { name: "Border Security Force", initials: "BSF" },
  { name: "DRDO", initials: "DRDO" },
  { name: "Coast Guard", initials: "ICG" },
  { name: "NDRF", initials: "NDRF" },
  { name: "ISRO", initials: "ISRO" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Trusted by <span className="text-primary">Defense Leaders</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hear from the organizations that rely on VyomGarud for their critical operations
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 h-full relative group"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.organization}</p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Client Logo Carousel */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Our Trusted Partners</h3>
            <p className="text-muted-foreground">Serving India's premier defense and security organizations</p>
          </div>
        </ScrollReveal>

        {/* Infinite Scroll Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Double the logos for seamless loop */}
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-32 h-32 bg-card/60 backdrop-blur-sm border border-border rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer group transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary font-bold text-lg">{logo.initials}</span>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center px-2">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <ScrollReveal delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            {[
              { value: "50+", label: "Defense Contracts" },
              { value: "15+", label: "Years Experience" },
              { value: "99.9%", label: "Mission Success" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
