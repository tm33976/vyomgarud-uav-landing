import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: "About", href: "#about" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
      { label: "Partners", href: "#" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer className="bg-background border-t border-border py-16" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-foreground">Vyom</span>
                <span className="text-primary">Garud</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Pioneering the future of aerial defense with precision-engineered, 
              autonomous UAV systems built for mission-critical operations.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} VyomGarud. All rights reserved.
            </p>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">
              Developed by <span className="text-primary font-semibold">Tushar Mishra</span>
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;