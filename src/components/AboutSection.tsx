import { Shield, Target, Zap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Military Grade",
      description: "Built to withstand the most demanding operational environments",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Centimeter-level accuracy for mission-critical applications",
    },
    {
      icon: Zap,
      title: "Autonomous",
      description: "AI-powered decision making for real-time adaptability",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <ScrollReveal direction="left" delay={0}>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5">
                About Us
              </span>
            </ScrollReveal>
             <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Redefining Aerial{" "}
                <span className="text-gradient">Autonomy</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                VyomGarud is at the forefront of unmanned aerial vehicle technology, 
                developing next-generation autonomous systems that set new standards 
                for reliability, precision, and operational capability.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower defense and surveillance operations with 
                cutting-edge UAV platforms that combine advanced AI, robust engineering, 
                and seamless integration for mission success.
              </p>
            </ScrollReveal>
          </div>
            {/* Right Content - Feature Cards */}
          <StaggerContainer className="space-y-6" staggerDelay={0.15}>
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="flex gap-5 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:translate-x-2">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;