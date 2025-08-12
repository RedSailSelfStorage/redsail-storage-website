import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GoogleMaps() {
  const googleMapsUrl = "https://maps.app.goo.gl/kK7iHYp1oQxs2C1w9";
  
  const openInGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="h-96 lg:h-full min-h-96">
      <div className="w-full h-full bg-neutral-light rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold text-neutral-dark mb-2">Interactive Map</h4>
          <p className="text-neutral-medium mb-4">Click to view our location on Google Maps</p>
          <Button 
            onClick={openInGoogleMaps}
            className="bg-red-sail hover:bg-red-sail-dark"
          >
            Open in Google Maps
          </Button>
        </div>
      </div>
    </div>
  );
}
