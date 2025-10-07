import {
  Briefcase,
  Mountain,
  Flame,
  FlaskConical,
  TruckIcon,
} from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Briefcase,
      title: "Office Safety",
      description:
        "Comprehensive workplace safety training covering ergonomics, emergency procedures, and daily safety protocols.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mountain,
      title: "Height Safety",
      description:
        "Advanced training for working at heights, scaffolding safety, fall protection, and rescue procedures.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Flame,
      title: "Fire Safety",
      description:
        "Fire prevention, emergency response, evacuation procedures, and fire extinguisher operation training.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FlaskConical,
      title: "Pharma Safety",
      description:
        "Specialized pharmaceutical industry safety protocols, cleanroom procedures, and contamination prevention.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TruckIcon,
      title: "Forklift Safety",
      description:
        "Complete forklift operation training, safety protocols, warehouse navigation, and certification programs.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-slide-left">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Safety <span className="text-gradient">Training Products</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-leading VR training courses designed to enhance workplace safety
            and compliance across multiple sectors.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group card-elevated reveal-3d-card stagger-${
                (index % 5) + 1
              } perspective-1000 relative overflow-hidden`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${product.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <product.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal-slide-left">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to revolutionize your safety training program?
          </p>
          <a href="#contact" className="btn-primary">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
