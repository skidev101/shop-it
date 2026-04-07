import AccountPageHeader from "@/components/account/account-page-header";
import { MapPin, Plus, Trash2, Edit3, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const addresses = [
  {
    id: "1",
    label: "Home",
    isDefault: true,
    name: "John Doe",
    address: "123 Atlas Way, Victoria Island",
    city: "Lagos",
    country: "Nigeria",
    phone: "+234 801 234 5678",
  },
  {
    id: "2",
    label: "Office",
    isDefault: false,
    name: "John Doe",
    address: "456 Tech Boulevard, Yaba",
    city: "Lagos",
    country: "Nigeria",
    phone: "+234 801 987 6543",
  },
];

const steps = [
  { label: "Account", href: "/account" },
  { label: "Addresses", isCurrent: true },
];

export default function AddressesPage() {
  return (
    <div className="space-y-8 pb-10">
      <AccountPageHeader
        title="Shipping Addresses"
        description="Manage your delivery locations for a faster checkout experience."
        steps={steps}
      >
        <Button className="h-11 px-6 rounded-xl bg-[#1A1A1A] text-[11px] font-black uppercase tracking-widest hover:opacity-90 transition-all gap-2">
          <Plus className="h-4 w-4" />
          Add New Address
        </Button>
      </AccountPageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <Card
            key={addr.id}
            className={cn(
              "rounded-4xl border transition-all duration-300",
              addr.isDefault
                ? "border-gray-200 bg-white shadow-md hover:border-[#1A1A1A]/30"
                : "border-[#F5F5F7] bg-gray-100 hover:border-[#1A1A1A]/30",
            )}
          >
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "h-10 w-10 rounded-xl flex items-center justify-center",
                      addr.isDefault
                        ? "bg-[#1A1A1A] text-white"
                        : "bg-white text-[#1A1A1A] border border-[#F5F5F7]",
                    )}
                  >
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#1A1A1A]">
                      {addr.label}
                    </h4>
                    {addr.isDefault && (
                      <div className="flex items-center gap-1 text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-0.5">
                        <CheckCircle2 className="h-3 w-3" />
                        Default Address
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="h-9 w-9 rounded-xl hover:cursor-pointer flex items-center justify-center hover:bg-white transition-colors text-[#999999] hover:text-[#1A1A1A]">
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button className="h-9 w-9 rounded-xl hover:cursor-pointer flex items-center justify-center hover:bg-rose-50 transition-colors text-[#999999] hover:text-rose-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#999999]">
                    Recipient
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    {addr.name}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#999999]">
                    Address
                  </p>
                  <p className="text-sm font-medium text-[#666666] leading-relaxed">
                    {addr.address},<br />
                    {addr.city}, {addr.country}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#999999]">
                    Phone Number
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    {addr.phone}
                  </p>
                </div>
              </div>

              {!addr.isDefault && (
                <Button
                  variant="outline"
                  className="w-full mt-8 h-10 rounded-xl border-[#E5E5E5] text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all"
                >
                  Set as Default
                </Button>
              )}
            </CardContent>
          </Card>
        ))}

        {/* Add New Card Placeholder */}
        <button className="rounded-2xl hover:cursor-pointer border-2 border-dashed border-[#E5E5E5] bg-[#F9F9F9]/30 p-8 flex flex-col items-center justify-center gap-4 hover:bg-[#F5F5F7] hover:border-[#1A1A1A]/30 transition-all group min-h-[300px]">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-[#999999] group-hover:scale-110 transition-transform shadow-sm">
            <Plus className="h-6 w-6" />
          </div>
          <p className="text-[11px] font-black uppercase tracking-widest text-[#999999]">
            Add New Address
          </p>
        </button>
      </div>
    </div>
  );
}
