import { PricingCard } from "@/components/ui/pricing-card";
import { CreditCard, Percent, PoundSterling } from "lucide-react";

export default function Pricing() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-roboto-slab">Pricing & Discounts</h1>
          <p className="text-lg text-neutral-medium">Transparent pricing with significant savings for longer-term storage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Basic Rate */}
          <PricingCard
            title="Basic Rate"
            price="£36.90"
            description="4-weekly payments in advance<br>£147.60 for 4 weeks"
            ctaText="Select Plan"
            ctaVariant="outline"
          />

          {/* 12 Week Discount */}
          <PricingCard
            title="12 Week Plan"
            price="£33.21"
            savings="£3.69"
            discount="10%"
            description="Pre-paid 12 weeks<br>£398.52 total"
            totalSavings="£44.28"
            isPopular={true}
            ctaText="Best Value"
          />

          {/* 26 Week Discount */}
          <PricingCard
            title="26 Week Plan"
            price="£31.37"
            savings="£5.53"
            discount="15%"
            description="Pre-paid 26 weeks<br>£815.49 total"
            totalSavings="£143.83"
            ctaText="Great Deal"
            ctaVariant="secondary"
          />

          {/* 52 Week Discount */}
          <PricingCard
            title="52 Week Plan"
            price="£29.98"
            savings="£6.92"
            discount="18.75%"
            description="Pre-paid 52 weeks<br>£1,559.03 total"
            totalSavings="£359.84"
            ctaText="Maximum Savings"
            ctaVariant="destructive"
          />
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-neutral-dark mb-6 text-center">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <PoundSterling className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">Refundable Deposit</h4>
              <p className="text-neutral-medium">£150.00 deposit required, fully refundable upon checkout when container is left clean with padlock and key returned.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">Payment Methods</h4>
              <p className="text-neutral-medium">All payments by bank transfer to Tide Bank. Account details provided upon booking confirmation.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-sail text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-neutral-dark mb-2">VAT Included</h4>
              <p className="text-neutral-medium">All prices quoted are inclusive of Value Added Tax (VAT) at the prevailing rate.</p>
            </div>
          </div>

          {/* Bank Details */}
          <div className="mt-8 p-6 bg-neutral-light rounded-xl">
            <h4 className="font-semibold text-neutral-dark mb-4 text-center">Bank Details for Payment</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold">Bank</p>
                <p>Tide Bank</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Account Number</p>
                <p>18819400</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Sort Code</p>
                <p>04-06-05</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Account Name</p>
                <p>Red Sail Self Storage Ltd</p>
              </div>
            </div>
            <p className="text-center text-neutral-medium text-sm mt-4">Quote your booking reference when making payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
