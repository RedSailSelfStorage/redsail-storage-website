import { Warehouse, Shield, Clock, Car } from "lucide-react";

export default function Services() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-roboto-slab">Our Storage Solutions</h1>
          <p className="text-lg text-neutral-medium max-w-3xl mx-auto">Professional container storage with modern facilities and secure access in the heart of Essex</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Container Specifications */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-dark mb-6">Premium Container Specifications</h3>
            
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
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-dark">Daily Access 07:00 - 19:00</h4>
                  <p className="text-neutral-medium">Convenient access hours with special arrangements available outside standard times.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-sail text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-dark">Drive-Up Access</h4>
                  <p className="text-neutral-medium">Free parking on-site with wide access routes for easy loading and unloading.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Container Images and Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img 
                src="/attached_assets/RSSS OUR YARD_1754999439213.jpg" 
                alt="Red Sail Self Storage Yard Overview"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img 
                src="/attached_assets/20241220_113505_1754999439211.jpg" 
                alt="Red Sail Storage Container Close-up"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="bg-neutral-light p-8 rounded-xl">
              <h4 className="text-xl font-semibold text-neutral-dark mb-6 text-center">Container Details</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-sail mb-2">20ft</div>
                  <div className="text-sm text-neutral-medium">Length</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-sail mb-2">8ft</div>
                  <div className="text-sm text-neutral-medium">Width</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-sail mb-2">8.5ft</div>
                  <div className="text-sm text-neutral-medium">Height</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-sail mb-2">160</div>
                  <div className="text-sm text-neutral-medium">Sq Ft</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-neutral-dark mb-8 text-center">Security & Access Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">Secure Lock Boxes</h4>
              <p className="text-neutral-medium text-sm">Professional lock boxes protect against weather and tampering.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">Daily Access</h4>
              <p className="text-neutral-medium text-sm">Access your container daily between 07:00 and 19:00 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">Drive-Up Access</h4>
              <p className="text-neutral-medium text-sm">Park directly next to your container for easy loading.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Warehouse className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">Weather Protection</h4>
              <p className="text-neutral-medium text-sm">Containers provide complete weather protection for your belongings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
