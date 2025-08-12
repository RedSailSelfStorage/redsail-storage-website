import { GoogleMaps } from "@/components/ui/google-maps";
import { MapPin, Clock, Phone, Car } from "lucide-react";

export default function Location() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-roboto-slab">Our Location</h1>
          <p className="text-lg text-neutral-medium">Conveniently located in St. Osyth, Essex with easy access from major routes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Information */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-dark mb-6">Visit Red Sail Self Storage</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-sail text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-dark">Address</h4>
                  <p className="text-neutral-medium">
                    Blackwater Farm Office<br />
                    Lee Wick Lane, St. Osyth<br />
                    Clacton on Sea, Essex<br />
                    CO16 8ES
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-sail text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-dark">Access Hours</h4>
                  <p className="text-neutral-medium">
                    Daily: 07:00 - 19:00<br />
                    Access outside these hours available by prior arrangement
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-sail text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-dark">Contact</h4>
                  <p className="text-neutral-medium">
                    Phone: 01255 823031<br />
                    Email: redsailselfstorage@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-sail text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-dark">Parking & Access</h4>
                  <p className="text-neutral-medium">
                    Free parking available on-site<br />
                    Drive-up access to your container<br />
                    Wide access routes for easy loading
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-neutral-light rounded-xl">
              <h4 className="font-semibold text-neutral-dark mb-3">Important Access Notice</h4>
              <p className="text-neutral-medium text-sm">
                Access is strictly for customers only. The storage area is specifically the area accessed by the gate with the Red Sail Self Storage sign. No access is permitted to the adjoining farm yard at any time.
              </p>
            </div>
          </div>

          {/* Google Map */}
          <GoogleMaps />
        </div>

        {/* Directions */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-neutral-dark mb-6 text-center">Getting to Red Sail Self Storage</h3>
          <div className="max-w-2xl mx-auto">
            <h4 className="font-semibold text-neutral-dark mb-4">From St. Osyth Village Centre (Crossroads)</h4>
            <ol className="list-decimal list-inside space-y-3 text-neutral-medium">
              <li>From the crossroads in St. Osyth village centre, head towards Point Clear on the B1027</li>
              <li>Continue straight for approximately 1.5 miles, following the road as it curves</li>
              <li>You'll pass through the village and head towards the coast</li>
              <li>Cross over the dam bridge - you'll see <strong>Curve Water Sports on your left</strong> as you enter Point Clear</li>
              <li>Continue straight on Lee Wick Lane for another 0.5 miles</li>
              <li>Look for <strong>Blackwater Farm Office</strong> on your right-hand side</li>
              <li>Turn into the entrance marked with the <strong>Red Sail Self Storage sign</strong></li>
            </ol>
            
            <div className="mt-6 p-4 bg-neutral-light rounded-lg">
              <h5 className="font-semibold text-neutral-dark mb-2">Key Landmarks to Look For:</h5>
              <ul className="space-y-1 text-sm text-neutral-medium">
                <li>• Curve Water Sports (on left as you cross the dam into Point Clear)</li>
                <li>• Red Sail Self Storage signage at the farm entrance</li>
                <li>• Access is strictly for customers only - look for our sign</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
