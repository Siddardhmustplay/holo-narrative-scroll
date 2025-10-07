import { useEffect, useState } from "react";
import {
  Headset,
  Layers,
  Blend,
  Database,
  GraduationCap,
  ShieldCheck,
  Building,
  Box,
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Headset,
      title: "Virtual Reality",
      description:
        "Immersive VR training solutions that transport your workforce into realistic, risk-free environments for hands-on learning and skill development.",
    },
    {
      icon: Layers,
      title: "Augmented Reality",
      description:
        "AR applications that overlay digital information onto the real world, enhancing on-site training, maintenance procedures, and operational efficiency.",
    },
    {
      icon: Blend,
      title: "Mixed Reality",
      description:
        "Cutting-edge MR experiences that blend physical and digital worlds, enabling interactive collaboration and advanced training scenarios.",
    },
    {
      icon: Database,
      title: "Digital Twins",
      description:
        "Virtual replicas of physical assets and processes, enabling real-time monitoring, predictive maintenance, and scenario simulation.",
    },
    {
      icon: GraduationCap,
      title: "Industrial Training",
      description:
        "Comprehensive training programs for complex industrial operations, machinery, and processes using immersive XR technologies.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Training",
      description:
        "HSE-focused training modules covering office safety, height safety, fire safety, pharma protocols, and forklift operations.",
    },
    {
      icon: Building,
      title: "Real Estate Visualization",
      description:
        "Stunning 3D visualizations and virtual property tours that bring architectural projects to life before construction begins.",
    },
    {
      icon: Box,
      title: "3D Asset Creation",
      description:
        "High-quality 3D modeling, texturing, and animation services for training, marketing, and visualization purposes.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      if (!servicesSection) return;

      const cards = servicesSection.querySelectorAll(".service-card");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.3) {
          setActiveService(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12">
          {/* Sticky Title */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-6">
            <div className="reveal-slide-left">
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Our <span className="text-gradient">Services</span>
              </h2>
              <div className="w-24 h-1 bg-accent mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive XR solutions tailored to transform your business operations
                and training programs.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card card-elevated reveal-3d-card stagger-${
                  (index % 4) + 1
                } ${
                  activeService === index
                    ? "scale-105 shadow-glow border-2 border-accent/20"
                    : ""
                }`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeService === index
                        ? "bg-accent text-white scale-110"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
