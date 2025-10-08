import { useState } from "react";
import {
  Briefcase,
  Mountain,
  Flame,
  FlaskConical,
  TruckIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import officeSafety1 from "@/assets/product-office-safety-1.png";
import officeSafety2 from "@/assets/product-office-safety-2.png";
import officeSafety3 from "@/assets/product-office-safety-3.png";
import heightSafety1 from "@/assets/product-height-safety-1.png";
import heightSafety2 from "@/assets/product-height-safety-2.png";
import heightSafety3 from "@/assets/product-height-safety-3.png";
import heightSafety4 from "@/assets/product-height-safety-4.png";
import fireSafety1 from "@/assets/product-fire-safety-1.png";
import fireSafety2 from "@/assets/product-fire-safety-2.png";
import fireSafety3 from "@/assets/product-fire-safety-3.png";
import fireSafety4 from "@/assets/product-fire-safety-4.png";
import fireSafety5 from "@/assets/product-fire-safety-5.png";
import pharmaSafety1 from "@/assets/product-pharma-safety-1.png";
import flammableChemicals from "@/assets/product-flammable-chemicals.png";
import forkliftSafety1 from "@/assets/product-forklift-safety-1.jpg";
import forkliftSafety2 from "@/assets/product-forklift-safety-2.jpg";
import forkliftSafety3 from "@/assets/product-forklift-safety-3.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products = [
    {
      icon: Briefcase,
      title: "Office Safety",
      description:
        "Comprehensive workplace safety training covering ergonomics, emergency procedures, and daily safety protocols.",
      color: "from-blue-500 to-cyan-500",
      images: [officeSafety1, officeSafety2, officeSafety3],
    },
    {
      icon: Mountain,
      title: "Height Safety",
      description:
        "Advanced training for working at heights, scaffolding safety, fall protection, and rescue procedures.",
      color: "from-purple-500 to-pink-500",
      images: [heightSafety1, heightSafety2, heightSafety3, heightSafety4],
    },
    {
      icon: Flame,
      title: "Fire Safety",
      description:
        "Fire prevention, emergency response, evacuation procedures, and fire extinguisher operation training.",
      color: "from-orange-500 to-red-500",
      images: [fireSafety1, fireSafety2, fireSafety3, fireSafety4, fireSafety5],
    },
    {
      icon: FlaskConical,
      title: "Pharma Safety",
      description:
        "Specialized pharmaceutical industry safety protocols, cleanroom procedures, and contamination prevention.",
      color: "from-green-500 to-emerald-500",
      images: [pharmaSafety1, flammableChemicals],
    },
    {
      icon: TruckIcon,
      title: "Forklift Safety",
      description:
        "Complete forklift operation training, safety protocols, warehouse navigation, and certification programs.",
      color: "from-yellow-500 to-orange-500",
      images: [forkliftSafety1, forkliftSafety2, forkliftSafety3],
    },
  ];

  const openGallery = (productIndex: number) => {
    setSelectedProduct(productIndex);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct !== null && products[selectedProduct].images) {
      const images = products[selectedProduct].images!;
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedProduct !== null && products[selectedProduct].images) {
      const images = products[selectedProduct].images!;
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };


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
                {/* Product Image or Icon */}
                {product.images && product.images.length > 0 ? (
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-6 shadow-lg">
                    <img 
                      src={product.images[0]} 
                      alt={`${product.title} VR Training`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${product.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <product.icon className="w-8 h-8" />
                  </div>
                )}

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Learn More Link */}
                <button
                  onClick={() => openGallery(index)}
                  className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all group bg-transparent border-none cursor-pointer"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
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

        {/* Image Gallery Dialog */}
        <Dialog open={selectedProduct !== null} onOpenChange={closeGallery}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">
                {selectedProduct !== null && products[selectedProduct].title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProduct !== null && products[selectedProduct].images && (
              <div className="space-y-4">
                {/* Main Image Display */}
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={products[selectedProduct].images![currentImageIndex]}
                    alt={`${products[selectedProduct].title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Navigation Arrows */}
                  {products[selectedProduct].images!.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium">
                    {currentImageIndex + 1} / {products[selectedProduct].images!.length}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                {products[selectedProduct].images!.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {products[selectedProduct].images!.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-accent scale-105"
                            : "border-transparent hover:border-accent/50"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {products[selectedProduct].description}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Products;
