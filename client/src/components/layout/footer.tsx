import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/attached_assets/RSSS Logo 2_1754999017403.jpg" 
                alt="Red Sail Self Storage Logo" 
                className="w-10 h-10 rounded-full object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Red Sail Self Storage</h3>
                <p className="text-gray-400 text-sm">Secure Container Storage</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">Professional container storage solutions in Essex. Secure, convenient, and competitively priced with significant discounts for long-term storage.</p>
            <div className="text-sm text-gray-400">
              <p>Red Sail Self Storage Limited</p>
              <p>Company Registration: 13933641</p>
              <p>VAT Number: 403 7274 17</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services">
                  <span className="hover:text-red-sail transition-colors cursor-pointer">Storage Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <span className="hover:text-red-sail transition-colors cursor-pointer">Pricing & Discounts</span>
                </Link>
              </li>
              <li>
                <Link href="/location">
                  <span className="hover:text-red-sail transition-colors cursor-pointer">Location & Access</span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="hover:text-red-sail transition-colors cursor-pointer">Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-red-sail transition-colors cursor-pointer">About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-red-sail" />
                01255 823031
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-red-sail" />
                redsailselfstorage@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-red-sail" />
                St. Osyth, Essex, CO16 8ES
              </p>
              <p className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-red-sail" />
                07:00 - 19:00 Daily
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Red Sail Self Storage Limited. All rights reserved. | Professional container storage in Essex.</p>
        </div>
      </div>
    </footer>
  );
}
