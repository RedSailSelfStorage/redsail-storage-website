import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/location", label: "Location" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img 
                src="/attached_assets/RSSS Logo 2_1754999017403.jpg" 
                alt="Red Sail Self Storage Logo" 
                className="w-12 h-12 rounded-full object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-neutral-dark">Red Sail Self Storage</h1>
                <p className="text-sm text-neutral-medium">Secure Container Storage</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`font-medium transition-colors cursor-pointer ${
                  location === item.href 
                    ? "text-red-sail" 
                    : "text-neutral-dark hover:text-red-sail"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-neutral-dark">01255 823031</p>
              <p className="text-xs text-neutral-medium">07:00 - 19:00 Daily</p>
            </div>
            <Link href="/contact">
              <Button className="bg-red-sail hover:bg-red-sail-dark">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span 
                      className={`text-lg font-medium block py-2 px-4 rounded-lg transition-colors cursor-pointer ${
                        location === item.href 
                          ? "text-red-sail bg-red-sail/10" 
                          : "text-neutral-dark hover:text-red-sail hover:bg-red-sail/10"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
                
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-neutral-dark mb-4">
                    <Phone className="h-4 w-4" />
                    <span className="font-semibold">01255 823031</span>
                  </div>
                  <Link href="/contact">
                    <Button className="w-full bg-red-sail hover:bg-red-sail-dark" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
