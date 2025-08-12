import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { QuickNavCard } from "@/components/ui/quick-nav-card";
import { 
  Warehouse, 
  Tags, 
  MapPin, 
  Phone, 
  FileText, 
  Shield 
} from "lucide-react";

export default function Home() {
  const quickNavItems = [
    {
      icon: Warehouse,
      title: "Storage Solutions",
      description: "20ft shipping containers with lock boxes and heavy-duty padlocks. Professional storage with easy access handles.",
      actionText: "Learn More",
      link: "/services"
    },
    {
      icon: Tags,
      title: "Pricing & Discounts",
      description: "Competitive rates starting at £36.90/week. Save up to 18.75% with our long-term storage options.",
      actionText: "View Pricing",
      link: "/pricing"
    },
    {
      icon: MapPin,
      title: "Location & Access",
      description: "Conveniently located in St. Osyth, Essex. Daily access from 07:00 to 19:00 hours.",
      actionText: "View Map",
      link: "/location"
    },
    {
      icon: Phone,
      title: "Contact Information",
      description: "Get in touch: 01255 823031 or email redsailselfstorage@gmail.com for immediate assistance.",
      actionText: "Contact Us",
      link: "/contact"
    },
    {
      icon: FileText,
      title: "Terms & Conditions",
      description: "Review our comprehensive terms and conditions for storage agreements and policies.",
      actionText: "View T&Cs",
      link: "/terms"
    },
    {
      icon: Shield,
      title: "Security Features",
      description: "Industry-standard security with lock boxes, heavy-duty padlocks, and secure site access.",
      actionText: "Learn More",
      link: "/services"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative red-sail-gradient text-white py-20">
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-roboto-slab">
              Secure Container Storage in <span className="text-red-sail">Essex</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Professional 20ft shipping containers with 24/7 access. Lowest price starting from £29.98/week with long-term discounts of up to 18.75% off.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-red-sail hover:bg-red-sail-dark text-lg">
                  View Pricing & Discounts
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white bg-white text-black hover:bg-gray-100 text-lg"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-roboto-slab">Quick Access</h2>
            <p className="text-lg text-neutral-medium">Find what you need quickly with our essential information</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickNavItems.map((item, index) => (
              <QuickNavCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                actionText={item.actionText}
                onClick={() => window.location.href = item.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-roboto-slab">Why Choose Red Sail?</h2>
            <p className="text-lg text-neutral-medium max-w-3xl mx-auto">Professional container storage with modern facilities and secure access in the heart of Essex</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-sail text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Warehouse className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-dark">New 'One-Trip' 20ft Containers</h4>
                    <p className="text-neutral-medium">High-quality shipping containers with easy opening handles for convenient access.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-sail text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-dark">Professional Lock Boxes</h4>
                    <p className="text-neutral-medium">Each container fitted with secure lock box and industry-standard heavy duty padlock.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-sail text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Tags className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-dark">Competitive Pricing with Discounts</h4>
                    <p className="text-neutral-medium">Save up to 18.75% with long-term storage options. Maximum savings of £359.84 annually.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <img 
                src="/attached_assets/20241220_113431_1754999439209.jpg" 
                alt="Red Sail Self Storage Container Facility"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="bg-neutral-light p-6 rounded-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-sail mb-2">20ft</div>
                    <div className="text-sm text-neutral-medium">Container Size</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-sail mb-2">£150</div>
                    <div className="text-sm text-neutral-medium">Refundable Deposit</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-sail mb-2">24/7</div>
                    <div className="text-sm text-neutral-medium">Site Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
