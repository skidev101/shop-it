import { VendorSidebar } from "@/components/vendor/vendor-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F9F9FB] font-sans">
      <VendorSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader 
          searchPlaceholder="Search products, orders, or customers..."
          userName="Vanguard Gear"
          userRole="Verified Merchant"
        />

        <main className="pt-[40px] px-6 lg:px-8 pb-12">{children}</main>
      </div>
    </div>
  );
}
