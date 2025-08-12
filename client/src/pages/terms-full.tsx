import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsFull() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/terms">
            <Button variant="ghost" className="text-red-sail hover:text-red-sail-dark">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Summary
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-red-sail mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-neutral-dark mb-2">Full Terms & Conditions</h1>
            <p className="text-neutral-medium">Red Sail Self Storage Limited - Version 3 – April 2023</p>
          </div>

          <div className="prose prose-sm max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Company Information</h2>
                <p className="text-neutral-medium mb-2">Red Sail Self Storage is a limited liability company.</p>
                <p className="text-neutral-medium mb-2">
                  <strong>Operating and registered address:</strong><br />
                  Blackwater Farm Office, Lee Wick Lane, St. Osyth, Clacton on Sea, Essex, CO16 8ES
                </p>
                <p className="text-neutral-medium mb-2"><strong>Registered company number:</strong> 13933641</p>
                <p className="text-neutral-medium mb-4"><strong>VAT No:</strong> 403 7274 17</p>
                
                <p className="text-neutral-medium mb-2">
                  <strong>Contact details:</strong><br />
                  Telephone: 01255 823031<br />
                  Email: redsailselfstorage@gmail.com
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Payment Terms</h2>
                <p className="text-neutral-medium mb-4">All payments for storage must be made by bank transfer quoting your booking reference.</p>
                
                <div className="bg-neutral-light p-4 rounded-lg mb-4">
                  <p className="text-neutral-medium mb-2"><strong>Our bank details for payment:</strong></p>
                  <ul className="text-neutral-medium space-y-1">
                    <li><strong>Bank:</strong> Tide Bank</li>
                    <li><strong>Account number:</strong> 18819400</li>
                    <li><strong>Sort code:</strong> 04-06-05</li>
                    <li><strong>Account name:</strong> Red Sail Self Storage Ltd</li>
                  </ul>
                </div>
                
                <p className="text-neutral-medium mb-4">We only accept payment in GB Pounds.</p>
                <p className="text-neutral-medium mb-4">Storage rental is payable in 4-weekly payments in advance, twelve weekly in advance or twenty six weekly in advance dependant on the discount level you opt for.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Termination of Agreement</h2>
                <p className="text-neutral-medium mb-4">We ask that you give us as much notice as possible of your intention to vacate and a minimum of two weeks.</p>
                <p className="text-neutral-medium mb-4">Deposit refunds upon 'checking out' of your unit are subject to further terms as outlined in the full agreement.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Access and Security</h2>
                <p className="text-neutral-medium mb-4">You must ensure that the Container is locked so as to be secure from unauthorised entry at all times when you are not in the Container. We will not be responsible for locking any unlocked Container.</p>
                <p className="text-neutral-medium mb-4">Access Hours refer to the hours we permit access to the Container. We reserve the right to change Access Hours to other reasonable access times at any time without giving any prior notice.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Prohibited Items</h2>
                <p className="text-neutral-medium mb-2">You must not store (and you must not allow any other person to store) any of the following in the Container:</p>
                <ul className="list-disc list-inside text-neutral-medium space-y-1 mb-4">
                  <li>Food or perishable goods unless securely packed so that they are protected from and do not attract vermin</li>
                  <li>Birds, fish, animals or any other living creatures</li>
                  <li>Combustible or flammable materials or liquids such as gas, paint, petrol, oil or cleaning solvents</li>
                  <li>Firearms, explosives, weapons or ammunition</li>
                  <li>Chemicals, radioactive materials, biological agents</li>
                  <li>Toxic waste, asbestos or other materials of a potentially dangerous nature</li>
                  <li>Any item which emits any fumes, smell or odour</li>
                  <li>Any illegal substances, illegal items or goods illegally obtained</li>
                  <li>Compressed gases</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Insurance and Liability</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-700 font-semibold">WE DO NOT INSURE YOUR GOODS</p>
                </div>
                <p className="text-neutral-medium mb-4">Storage of Goods in the Container is at your sole risk. You warrant to us that prior to bringing the Goods onto the Site you have insured or will insure the Goods against all normal perils under a valid contract of insurance with a reputable insurance company for their full replacement value.</p>
                <p className="text-neutral-medium mb-4">Normal Perils include loss of or damage to Goods caused by fire, lightning, explosion, earthquake, aircraft, storm, flood, bursting and/or leaking pipes, theft accompanied by forcible and violent entry or exit, riot, strike, civil commotion, malicious damage, and impact by vehicles.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Late Payment and Charges</h2>
                <p className="text-neutral-medium mb-4">If you do not pay our Fees on the Due Date, you must pay us an administrative charge for late payment which is the larger of 10 per cent of our Fees or £10.</p>
                <p className="text-neutral-medium mb-4">Additionally, on each occasion any payment is dishonoured, at our option you must pay us an administrative charge of £10.</p>
                <p className="text-neutral-medium mb-4">You must pay us interest on all amounts overdue for payment at the rate of 5% above the Bank of England base rate, calculated from the date when payment becomes due.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Deposit Terms</h2>
                <p className="text-neutral-medium mb-4">You must pay us the Deposit on your acceptance of this Agreement. The Deposit will be returned to you (without interest) after this Agreement terminates less any amount we may in our sole discretion deduct to cover:</p>
                <ul className="list-disc list-inside text-neutral-medium space-y-1 mb-4">
                  <li>Any breach of conditions</li>
                  <li>Any of our Fees which have not been paid or any unpaid removal or other charges</li>
                  <li>Any other obligation to us that you have not performed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Legal Jurisdiction</h2>
                <p className="text-neutral-medium mb-4">This Agreement shall be governed by English law and you and we submit to the exclusive jurisdiction of the English courts.</p>
                <p className="text-neutral-medium mb-4">This Agreement shall not create a tenancy or constitute us as bailees of Goods.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Identification Requirements</h2>
                <p className="text-neutral-medium mb-4">For all bookings we require sight of photographic Identification (ideally a valid UK Drivers Licence) and a utility bill (not less than two months old). Both items we will take photocopies or scans of and retain for the duration of your booking with us.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-dark mb-4">Keys and Padlocks</h2>
                <p className="text-neutral-medium mb-4">All padlocks and keys provided for the securing of the storage container must be returned to us at the Termination of the Agreement. No copies of keys should be made under any circumstances. Should storage container padlock keys be lost, you must report this to us immediately. We will provide a replacement. You may be charged for lost keys.</p>
              </section>

              <div className="mt-8 p-4 bg-neutral-light rounded-lg text-center">
                <p className="text-xs text-neutral-medium">This document contains the complete terms and conditions for storage services provided by Red Sail Self Storage Limited. For any questions or clarifications, please contact us at 01255 823031 or redsailselfstorage@gmail.com.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
