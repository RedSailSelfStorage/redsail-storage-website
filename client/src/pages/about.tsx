import { Check, Calendar, MapPin, Users } from "lucide-react";

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-roboto-slab">About Red Sail Self Storage</h1>
          <p className="text-lg text-neutral-medium">Professional container storage solutions in Essex</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-dark mb-6">Your Trusted Storage Partner</h3>
            <div className="space-y-6 text-neutral-medium">
              <p>Red Sail Self Storage Limited is a professional storage company based in Essex, specializing in secure container storage solutions for both domestic and commercial customers.</p>
              
              <p>Located at Blackwater Farm in St. Osyth, our facility offers modern, secure storage using high-quality 'one-trip' 20-foot shipping containers. Each container is fitted with professional lock boxes and comes with industry-standard heavy-duty padlocks for maximum security.</p>
              
              <p>We pride ourselves on offering competitive pricing with flexible payment options and significant discounts for longer-term storage commitments. Our customers benefit from convenient daily access hours and professional service.</p>
              
              <div className="bg-neutral-light p-6 rounded-xl">
                <h4 className="font-semibold text-neutral-dark mb-3">Why Choose Red Sail?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-red-sail" />
                    <span>New, high-quality containers with easy access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-red-sail" />
                    <span>Competitive pricing with substantial long-term discounts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-red-sail" />
                    <span>Convenient daily access from 07:00 to 19:00</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-red-sail" />
                    <span>Professional security with lock boxes and heavy-duty padlocks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-neutral-light p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-red-sail mb-2 flex items-center justify-center">
                  <Calendar className="w-8 h-8 mr-2" />
                  2023
                </div>
                <div className="text-neutral-medium">Company Established</div>
              </div>
              <div className="bg-neutral-light p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-red-sail mb-2">20ft</div>
                <div className="text-neutral-medium">Container Size</div>
              </div>
              <div className="bg-neutral-light p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-red-sail mb-2">18.75%</div>
                <div className="text-neutral-medium">Max Discount</div>
              </div>
              <div className="bg-neutral-light p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-red-sail mb-2">7-19</div>
                <div className="text-neutral-medium">Access Hours</div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold text-neutral-dark mb-4">Service Areas</h4>
              <p className="text-neutral-medium mb-4">We proudly serve customers throughout Essex and the surrounding areas, including:</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-neutral-medium">
                <p>• Clacton-on-Sea</p>
                <p>• Colchester</p>
                <p>• St. Osyth</p>
                <p>• Brightlingsea</p>
                <p>• Frinton-on-Sea</p>
                <p>• Thorpe-le-Soken</p>
                <p>• Manningtree</p>
                <p>• Harwich</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-neutral-dark mb-8 text-center">Company Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">Legal Structure</h4>
              <p className="text-neutral-medium text-sm">
                Red Sail Self Storage Limited<br />
                Company Registration: 13933641<br />
                Limited Liability Company
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">Registered Address</h4>
              <p className="text-neutral-medium text-sm">
                Blackwater Farm Office<br />
                Lee Wick Lane, St. Osyth<br />
                Clacton on Sea, Essex, CO16 8ES
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">Tax Information</h4>
              <p className="text-neutral-medium text-sm">
                VAT Registration: 403 7274 17<br />
                All prices include VAT<br />
                UK Pound Sterling only
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
