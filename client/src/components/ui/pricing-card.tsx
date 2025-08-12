import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  savings?: string;
  discount?: string;
  description: string;
  totalSavings?: string;
  isPopular?: boolean;
  ctaText: string;
  ctaVariant?: "default" | "secondary" | "destructive" | "outline";
}

export function PricingCard({ 
  title, 
  price, 
  originalPrice,
  savings,
  discount,
  description, 
  totalSavings,
  isPopular = false,
  ctaText,
  ctaVariant = "default"
}: PricingCardProps) {
  return (
    <Card className={`relative ${isPopular ? 'border-2 border-green-500' : ''}`}>
      {discount && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-green-500 text-white">
            {discount} OFF
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <h3 className="text-lg font-semibold text-neutral-dark mb-2">{title}</h3>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
          <div className="text-sm text-neutral-medium">per week</div>
          {savings && (
            <div className="text-sm text-red-sail font-semibold">Save {savings}/week</div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="text-center">
        <div className="text-neutral-medium text-sm mb-6">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          {totalSavings && (
            <div className="mt-2">
              <strong className="text-green-600">Total Savings: {totalSavings}</strong>
            </div>
          )}
        </div>
        <Button 
          className={`w-full ${
            ctaVariant === 'default' && isPopular 
              ? 'bg-green-500 hover:bg-green-600' 
              : ctaVariant === 'secondary'
              ? 'bg-orange-500 hover:bg-orange-600'
              : ctaVariant === 'destructive'
              ? 'bg-red-sail hover:bg-red-sail-dark'
              : 'bg-neutral-dark hover:bg-neutral-medium'
          }`}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}
