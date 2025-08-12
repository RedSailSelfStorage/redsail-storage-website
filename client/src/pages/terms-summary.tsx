import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FileText, AlertTriangle, Users, Building } from "lucide-react";

export default function TermsSummary() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-roboto-slab">Terms & Conditions</h1>
          <p className="text-lg text-neutral-medium">Key terms for your storage agreement</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Key Terms */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-6">Key Terms Summary</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium"><strong>Minimum Notice:</strong> 2 weeks notice required to terminate agreement</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium"><strong>Access Hours:</strong> Daily 07:00-19:00, outside hours by arrangement</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium"><strong>Payment Terms:</strong> Pre-payment by bank transfer with booking reference</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium"><strong>Security:</strong> Customer responsible for securing container with provided lock</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium"><strong>Deposit:</strong> £150 refundable deposit required upon agreement</p>
                </div>
              </div>
            </div>

            {/* Prohibited Items */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-6">Prohibited Items</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium">Perishable goods, food items (unless securely packed)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium">Flammable materials, chemicals, compressed gases</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium">Living creatures, illegal substances</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium">Items emitting fumes, smells, or odours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-sail rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-medium">Firearms, explosives, weapons, ammunition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance and Liability */}
          <div className="border-t pt-8 mb-8">
            <h3 className="text-xl font-semibold text-neutral-dark mb-6">Insurance & Liability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Important Notice</h4>
                    <p className="text-amber-700 text-sm">Red Sail Self Storage does not insure your goods. You must arrange your own insurance coverage for items stored in the container.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-neutral-dark mb-3">Your Responsibilities</h4>
                <ul className="space-y-2 text-sm text-neutral-medium">
                  <li>• Ensure full replacement value insurance coverage</li>
                  <li>• Maintain insurance throughout storage period</li>
                  <li>• Storage is at your sole risk</li>
                  <li>• Inspect container regularly for damage or issues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold text-neutral-dark mb-6">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-neutral-medium">
              <div className="text-center">
                <Building className="w-8 h-8 text-red-sail mx-auto mb-2" />
                <p><strong>Company:</strong> Red Sail Self Storage Limited</p>
                <p><strong>Registration:</strong> 13933641</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-red-sail mx-auto mb-2" />
                <p><strong>VAT Number:</strong> 403 7274 17</p>
                <p><strong>Bank:</strong> Tide Bank</p>
              </div>
              <div className="text-center">
                <FileText className="w-8 h-8 text-red-sail mx-auto mb-2" />
                <p><strong>Account:</strong> 18819400</p>
                <p><strong>Sort Code:</strong> 04-06-05</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/terms/full">
              <Button className="bg-red-sail hover:bg-red-sail-dark">
                <FileText className="w-4 h-4 mr-2" />
                View Full Terms & Conditions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
